import { useState, useEffect, useRef } from "react";
import './adBanner.css';

export default function Component() {
  return (
    <div className="main-container">
      <div className="flex-container">
        <div className="text-container">
          <h2 className="heading">
            100 Thousand Songs, ad-free
          </h2>
          <h2 className="heading">
            Over thousands podcast episodes
          </h2>
        </div>
        <div className="image-container">
          <img
            src="https://file.rendit.io/n/jOOee1E3qTpWdXLIlXVu.svg"
            alt="Vibrating Headphone"
            className="image"
          />
        </div>
      </div>
    </div>
  );
}
