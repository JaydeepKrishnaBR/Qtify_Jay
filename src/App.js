import React from "react";
import Component from './component/adBanner';
import "./App.css"; // Import the CSS file

export default function App() {
  return (
    <div>
    <div className="app-bar">
      <div className="logo-container">
      <span className="app-title">Qtify</span>
      </div>
      <div className="search-container">
        <div className="relative">
          <input
            className="search-input"
            placeholder="Search an album of your choice"
          />
          <button className="search-icon-button" aria-label="Search Button">
            <img
              src="https://file.rendit.io/n/XiX0TA3xiBuKQLWZg6uF.svg"
              className="search-icon-img"
              alt="Search Icon"
            />
          </button>
        </div>
      </div>
      <button
        className="feedback-button"
        onClick={() => alert("Feedback form/modal triggered.")}
      >
        Give Feedback
      </button>
    </div>


    <Component />

    </div>
  );
}
