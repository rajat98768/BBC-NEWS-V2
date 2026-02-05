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

  const newsBaseUrl =
    "https://finnhub.io/api/v1/news?category=general&token=d625hphr01qvmk0k76b0d625hphr01qvmk0k76bg";

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
  }, []);

  return (
    <Router>
      <Navbar2 />
      <LATEST />

      <h1 style={{ marginTop: '10px', fontFamily: 'fantasy', textAlign: "center" }}>
        Top Headlines
      </h1>

      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route index element={<News articles={articles} />} />
          <Route path="/home" element={<News articles={articles} />} />
        </Routes>
      )}

      <Footer />
    </Router>
  );
};

export default App;
