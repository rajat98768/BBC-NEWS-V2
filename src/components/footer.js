import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-section about">
            <h3>About</h3>
            <p>
             Hello! I’m <strong>Rajat</strong>,<br/> A Tech Enthusiast and web developer.
            </p>
          </div>

          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Top Headlines</a>
              </li>
              <li>
                <a href="/">Tech News</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contact</h3>
            <p>Email: rajat.2023@vitstudent.ac.in</p>
            <p>Phone: +919660229835</p>
            <p>Address: Singhana, Jhunjhunu,Rajasthan, India</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 News App. All Rights Reserved.</p>
        </div>

        {/* Inline CSS */}
        <style>{`
          /* Footer.css */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.site-footer {
  background-color: #1b1b1b;
  color: #fff;
  padding: 40px 60px 20px 60px;
  font-family: "Segoe UI", Arial, sans-serif;
  width: 100%;
  overflow-x: hidden;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  flex: 1 1 250px;
  min-width: 220px;
}

.footer-section h3 {
  margin-bottom: 15px;
  font-size: 18px;
  color: #ff6600;
  text-transform: uppercase;
  border-bottom: 2px solid #ff6600;
  display: inline-block;
  padding-bottom: 5px;
}

.footer-section p,
.footer-section ul {
  font-size: 15px;
  line-height: 1.6;
  color: #ddd;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 8px;
}

.footer-section ul li a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #ff6600;
}

.footer-bottom {
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
  border-top: 1px solid #444;
  padding-top: 12px;
  color: #ccc;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .footer-section {
    flex: 1 1 100%;
  }
}

        `}</style>
      </footer>
    );
  }
}
