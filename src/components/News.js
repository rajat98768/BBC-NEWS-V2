import React, { Component } from 'react';
import Newsitem from './Newsitem';
import './news.css';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
    };
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    // If page changed, or if pageSize or URL prop changed, refetch
    if (
      prevState.page !== this.state.page ||
      prevProps.URL !== this.props.URL
    ) {
      this.fetchArticles();
    }
  }

  fetchArticles = async () => {
    const {  URL } = this.props;
    const { page } = this.state;
    // Construct the complete URL including pagination
    const fullUrl = `${URL}&page=${page}`;
    try {
      const response = await fetch(fullUrl);
      const data = await response.json();
      this.setState({ articles: data.articles || [] });
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  handlePrev = () => {
    this.setState(
      (prevState) => ({
        page: Math.max(prevState.page - 1, 1),
      }),
      () => {
        console.log('After prev, page =', this.state.page);
      }
    );
  };

  handleNext = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
      }),
      () => {
        console.log('After next, page =', this.state.page);
      }
    );
  };

  render() {
    const { articles, page } = this.state;
      
    return (
      
      <div>
        
        <section className="news-grid">
          {articles.map((element) => (
            <Newsitem
              key={element.url}
              title={element.title || ''}
              imagurl={
                element.urlToImage
                  ? element.urlToImage
                  : 'https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/4301/live/22dc5b10-91da-11f0-9cf6-cbf3e73ce2b9.jpg'
              }
              description={element.description || ''}
              url={element.url}
            />
          ))}
        </section>

        <div className="page">
          <button
            disabled={page === 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrev}
            style={{ width: '100px' }}
          >
           Prev 
          </button>
          <button
           disabled={page ===2}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
            style={{ width: '100px' }}
          >
            Next 
          </button>
        </div>
      </div>
    );
  }
}
