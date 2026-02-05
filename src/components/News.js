import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  state = {
    articles: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
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

    return (
      <div style={{ padding: "20px" }}>
        <h1 style={{ textAlign: "center" }}>Top Stock News</h1>

        {articles.map((item) => (
          <NewsItem
            key={item.id}
            headline={item.headline}
            summary={item.summary}
            image={item.image}
            source={item.source}
            time={item.datetime}
            url={item.url}
          />
        ))}
      </div>
    );
  }
}
