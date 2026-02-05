import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import "./news.css";

export default class News extends Component {
  state = {
    articles: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = async () => {
    try {
      const response = await fetch(this.props.URL);
      const data = await response.json();

      // Finnhub returns ARRAY directly
      this.setState({
        articles: data,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  };

  render() {
    const { articles, loading } = this.state;

    if (loading) return <Spinner />;

    if (!articles || articles.length === 0) {
      return <h3 style={{ textAlign: "center" }}>No news available</h3>;
    }

    return (
      <div className="news-container">
        {articles.map((item, index) => (
          <Newsitem
            key={index}
            title={item.headline}
            description={item.summary}
            image={item.image}
            url={item.url}
            time={new Date(item.datetime * 1000).toGMTString()}
            source={item.source}
          />
        ))}
      </div>
    );
  }
}
