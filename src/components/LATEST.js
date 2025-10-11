import React, { Component } from "react";


export default class LATEST extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      currentIndex: 0,
    };
  }

  async componentDidMount() {
    try {
      const url =
        "https://x9rihe4p1a.execute-api.eu-north-1.amazonaws.com/default/NEWSAPI?";

      const response = await fetch(url);
      const data = await response.json();
      this.setState({ articles: data.articles || [] });

      // Rotate news every 5 seconds
      this.interval = setInterval(() => {
        this.setState((prevState) => ({
          currentIndex:
            (prevState.currentIndex + 1) % prevState.articles.length,
        }));
      }, 5000);
    } catch (err) {
      console.error("Error fetching news:", err);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { articles, currentIndex } = this.state;


    const tickerContainer = {
      width:"98%", // card width
      height: "320px", // card height
      overflow: "hidden",
      margin: "20px auto",
      position: "relative",
      border: ".1px solid #ddd",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      display:"flex",
      marginRight:"60px",
      justifyContent:"center",
      paddingBottom:"0%"
    };

    const slideStyle = {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      transition: "transform 1.3s ease-in-out",
      transform: `translateX(-${currentIndex * 100}%)`,
      display: "flex",
    };

    const cardStyle = {
      minWidth: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      boxSizing: "border-box",
      padding: "10px",
      background: "#fff",
      marginBottom:"0%",
    };

    const imgStyle = {
      width: "100%",
      height: "200px",
      imageSize: "cover",
      borderRadius: "10px 10px 0 0",
    };

    const titleStyle = {
      marginTop: "10px",
      fontSize: "30px",
      fontWeight: "500",
      color: "#000",
      fontFamily:"Fantasy",
      marginBottom:"0%",
    };

    return (
      <div>
      
        <h1 style={{ textAlign: "center",fontWeight:"bold", color:"red",marginTop: "20px",fontFamily:"fantasy" }}>
         Breaking News
        </h1>

        <div style={tickerContainer}>
          <div style={slideStyle}>
            {articles.map((article, index) => (
              <div key={index} style={cardStyle}>
                {article.urlToImage && (
                  <img src={article.urlToImage?article.urlToImage:"https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/4301/live/22dc5b10-91da-11f0-9cf6-cbf3e73ce2b9.jpg"} alt="news" style={imgStyle} />
                )}
                <a
                  href={article.url?article:"https://www.bbc.co.uk/news/articles/cx2r9y3kxy9o"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={titleStyle}
                >
                  {article.title?article.title:"Newspaper headlines: 'Rest in peace, champ' and 'scramble inside No 10'"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
