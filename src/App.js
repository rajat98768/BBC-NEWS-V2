import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar2 from './components/Navbar2';
import News from './components/News';
import LATEST from './components/LATEST';
import Footer from './components/footer';
import Spinner from './components/Spinner';

const App = () => {
  

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const newsBaseUrl = "https://x9rihe4p1a.execute-api.eu-north-1.amazonaws.com/default/NEWSAPI?";

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(newsBaseUrl);
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [newsBaseUrl]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Router>
      <Navbar2 />
      <LATEST />
      <h1 style={{ marginTop: '10px', fontFamily: 'fantasy', textAlign: "center" }}>
        Top Headlines
      </h1>
      <Routes>
        <Route path  =""   element={<News URL ="https://x9rihe4p1a.execute-api.eu-north-1.amazonaws.com/default/NEWSAPI?"/>}/>
        <Route path="/home"  element={<News URL ="https://x9rihe4p1a.execute-api.eu-north-1.amazonaws.com/default/NEWSAPI?" articles={articles}/>} />
      </Routes>
     
      
      <Footer />
    </Router>
  );
};

export default App;
