// NewsItemWithReadMoreLink.jsx

import React, { Component } from 'react';
import './Newsitem.css';

export default class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  toggleReadMore = () => {
    this.setState(prev => ({
      isExpanded: !prev.isExpanded
    }));
  }

  render() {
    const { title, description, imagurl, url,time ,author} = this.props;
    const { isExpanded } = this.state;

    const previewLength = 100;
    const isLong = description && description.length > previewLength;
    const previewText = isLong
      ? description.substring(0, previewLength) + "..."
      : description;

    return (<>
      <div className="news-item-readmore-wrapper">
        <div className="news-image-wrapper">
          
          <img
            src={imagurl} 
            className="news-image"
            alt={title || "news image"}
          />
        </div>
        <h2 className="news-title">{title} <span className="badge text-bg-secondary">New</span></h2>
        <p className="news-description">
          {isExpanded || !isLong
            ? description
            : previewText
          }
        </p>
       
        <p className="card-text" style={{margin:"20px"}}><small className="text-body-secondary">by {author} on {time}</small></p>
        {isLong && (
          <button
            className="btn-read-more"
            onClick={this.toggleReadMore}
          >
            { isExpanded ? "Show Less" : "more" }
          </button>
        )}

        {url && (
          <a
            href={url}
            className="btn-go-external"
            target="_blank"
            rel="noopener noreferrer"
          >
           Read more...
          </a>
        )}
       
      </div>
      </>
    );
  }
}

