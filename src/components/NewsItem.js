import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, ImageUrl, NewsUrl} = this.props
    return (
      <div className='my-3'>
        <div className="card container my-4" style={{width: "18rem"}}>
          <img src={ImageUrl} class="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={NewsUrl} target='_blank' class="btn btn-sm btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
