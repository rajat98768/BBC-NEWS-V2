import React, { Component } from 'react';
import Navbar2 from './components/Navbar2';
import News from './components/News';
import LATEST from './components/LATEST';
import Footer from './components/footer';
import Spinner from './components/Spinner';


export default class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true
    };
  }
  fetchArticles = async () => {
    const response = await fetch("https://x9rihe4p1a.execute-api.eu-north-1.amazonaws.com/default/NEWSAPI?");
    let data = response.json();

    setTimeout(()=>{this.setState({articles:data.articles,
      loading:false
    })},2000);
  };
  componentDidMount(){
    this.fetchArticles();
  }
  render() {
    const newsBaseUrl =
      "https://x9rihe4p1a.execute-api.eu-north-1.amazonaws.com/default/NEWSAPI?";
          if (this.state.loading === true) {
      return <Spinner/>
    }
    return (
      <div>
        <Navbar2 />
        <LATEST />
        <h1
          style={{
           
            marginTop: '10px',
            fontFamily: 'fantasy',
            textAlign: "center"
          }}
        >
          Top Headlines
        </h1>

        <News pageSize={20} URL={newsBaseUrl} />

        <Footer />
      </div>
    );
  }
}
