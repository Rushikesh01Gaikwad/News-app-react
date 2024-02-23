import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, ImageUrl, NewsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card container my-4">
          <img
            src={
              !ImageUrl
                ? "https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?cs=srgb&dl=pexels-patrick-case-3657154.jpg&fm=jpg"
                : ImageUrl
            }
            class="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1%'}}>
              {source} </span>
            </h5>
            <span class="badge text-bg-success">Success</span>
            <p className="card-text">{description}</p>
            <a
              rel="noreferrer"
              href={NewsUrl}
              target="_blank"
              class="btn btn-sm btn-dark"
            >
              Go somewhere
            </a>
          </div>
          <div class="card-footer">
            <small class="text-muted">
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
