import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      mode: "Dark",
    };
  }

  // Toggle Dark/divght Mode
  toggle = () => {
    const { mode } = this.state;
    const body = document.querySelector("body");

    if (mode === "Dark") {
      body.style.backgroundColor = "black";
      body.style.color = "white";
      document.querySelector(".navbar").style.backgroundColor="red";
      document.querySelector(".navbar").style.color ="white";
      document.querySelector(".navbar-brand a").style.color="white";
      this.setState({ mode: "light" });
    } else {
      body.style.backgroundColor = "white";
      body.style.color = "black";
      document.querySelector(".navbar").style.backgroundColor="Black";
      document.querySelector(".navbar-brand a").style.color="red";
      
      this.setState({ mode: "Dark" });
    }
  };
   
  // Toggle menu open/close
  

  render() {
    const {  mode } = this.state;

    return (
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <a href="/">BBC news</a>
          </div>
<nav className={`navbar-menu`}>          
            <div className="navbar-items">
              <div className="nav-item">
                <a style={{
                  fontSize:"20px"


                }}href="/">Home</a>
              </div>
              <div className="nav-item">
                <a href="/world">World</a>
              </div>
              <div className="nav-item">
                <a href="/business">Business</a>
              </div>
              <div className="nav-item">
                <a href="/technology">Technology</a>
              </div>
              <div className="nav-item">
                <a href="/about">About</a>
              </div>
                <div className="form-check form-switch">
                  <input
                    onClick={this.toggle} // corrected
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="switchCheckDefault"
                  />
                  {mode}
                </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
