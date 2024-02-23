import React, { PureComponent } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

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

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&business&apiKey=88e4fbad73534132a922989dd2014afe&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedta = await data.json();
    this.setState({
      articles: parsedta.articles,
      totalResults: parsedta.totalResults,
      loading: false,
    });
  }

  clickprevbtn = async () => {
    console.log("Previous button");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&business&apiKey=88e4fbad73534132a922989dd2014afe&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedta = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedta.articles,
      loading: false,
    });
  };

  clicknxtbtn = async () => {
    console.log("Next button");
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&business&apiKey=88e4fbad73534132a922989dd2014afe&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedta = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedta.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        {this.state.loading && <Spinner />}
        <h2 className="text-center">Top Headlines</h2>
        <div className="row">
          {!this.state.loading &&
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
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.clickprevbtn}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.clicknxtbtn}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
