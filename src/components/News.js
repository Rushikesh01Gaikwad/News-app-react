import React, { PureComponent } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends PureComponent {
  static defaultProps = {
    country: "us",
    pagesize: 4,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0,
    };
    document.title=`${this.props.category} - News`
  }

  async updateNews()
  {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
    this.props.category
  }&business&apiKey=${this.props.apikey}&page=${
    this.state.page
  }&pageSize=${
    this.props.pageSize
  }`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedta = await data.json();
    this.props.setProgress(60);
    this.setState({
      articles: parsedta.articles,
      totalResults: parsedta.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  clickprevbtn = async () => {
    this.setState({page: this.state.page - 1 })
    this.updateNews()
  };

  clicknxtbtn = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      this.setState({page: this.state.page + 1 })
      this.updateNews()
    }
  };

  fetchMoreData = async() => {
    this.setState(
      {
        page: this.state.page + 1
      }
    )
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
    this.props.category
  }&business&apiKey=${this.props.apikey}&page=${
    this.state.page
  }&pageSize=${
    this.props.pageSize
  }`;
    let data = await fetch(url);
    let parsedta = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedta.articles),
      totalResults: parsedta.totalResults,
    });
  };

  render() {
    return (
      <div>
        {this.state.loading && <Spinner />}
        <h2 className="text-center" style={{marginTop:'80px'}}>Top Headlines from {this.props.category} News</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner style={{marginTop:'50px'}}/>}>
        <div className="container">
        <div className="row">
          {
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    ImageUrl={element.urlToImage}
                    NewsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  ></NewsItem>
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
