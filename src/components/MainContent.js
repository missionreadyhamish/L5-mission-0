import React from "react";
import looksharp from "../images/looksharp.png";
import ocr from "../images/ocr.png";
import farm from "../images/farm.png";
import nzme from "../images/nzme.png";

function MainContent() {
  return (
    <main className="main-content">
      <div className="banner">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search articles..."
            className="search-bar"
          />
          <button className="search-button">Search</button>
        </div>
      </div>
      <div className="container">
        <div className="articles">
          <article className="article">
            <img src={looksharp} alt="Latest News" className="article-image" />
            <h2 className="article-title">
              Look Sharp fined almost $300k for misleading pricing, ignoring
              complaints
            </h2>
            <p className="article-date">19 Feb, 2025 05:27 PM</p>
          </article>
          <article className="article">
            <img src={ocr} alt="Upcoming Event" className="article-image" />
            <h2 className="article-title">
              Official Cash Rate live updates: Reserve Bank Governor Adrian Orr
              speaks after OCR cut by 50 basis points to 3.75%
            </h2>
            <p className="article-date">19 Feb, 2025 05:22 PM</p>
          </article>
          <article className="article">
            <img src={farm} alt="Upcoming Event" className="article-image" />
            <h2 className="article-title">
              Federated Farmers’ latest Farm Confidence Survey reveals highest
              level in over a decade
            </h2>
            <p className="article-date">19 Feb, 2025 01:45 PM</p>
          </article>
          <article className="article">
            <img src={nzme} alt="Upcoming Event" className="article-image" />
            <h2 className="article-title">
              Media Insider: NZME confirms plans to cut NZ Herald newsroom
              roles, launch new video brand
            </h2>
            <p className="article-date">19 Feb, 2025 01:27 PM</p>
          </article>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
