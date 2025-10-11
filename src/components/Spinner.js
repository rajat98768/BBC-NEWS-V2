import React, { Component } from "react";

export default class Spinner extends Component {
  state = {
    loading: true,
    data: null,
  };

  componentDidMount() {
    // simulate async load
    setTimeout(() => {
      this.setState({ data:"Server did not repond", loading: false });
    }, 8000);
  }

  render() {
    const { loading, data } = this.state;

    return (
      <div className="wrapper">
        {loading && (
          <div className="loader-overlay">
            <div className="loader"></div>
          </div>
        )}

        <div className="content">
          {!loading && (
            <>
              <h2>Failed</h2>
              <p>{data}</p>
            </>
          )}
        </div>

        <style>{`
          .wrapper {
            position: relative; 
            min-height: 200px; 
            display:flex;
            alignItem:center;
            justifyContent:center;
          }

          .loader-overlay {
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(255, 255, 255, 0.8);
            z-index: 999;
          }

          .loader {
            width: 50px;
            height: 50px;
            border: 6px solid #f3f3f3;
            border-top: 6px solid #ff6600;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .content {
            /* you can style this as needed */
            padding: 20px;
          }
        `}</style>
      </div>
    );
  }
}
