import React, { useEffect } from "react";
import looksharp from "../images/looksharp.png";
import ocr from "../images/ocr.png";
import farm from "../images/farm.png";
import nzme from "../images/nzme.png";

function MainContent() {
  useEffect(() => {
    // Load weather widget script
    const script = document.createElement("script");
    script.src = "https://weatherwidget.io/js/widget.min.js";
    script.async = true;
    script.id = "weatherwidget-io-js";
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.getElementById("weatherwidget-io-js");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <main className="main-content">
      <nav className="category-nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <h1>|</h1>
          </li>
          <li>
            <a href="#new-news">Latest News</a>
          </li>
          <li>
            <a href="#business">Business</a>
          </li>
          <li>
            <a href="#politics">Politics</a>
          </li>
          <li>
            <a href="#technology">Technology</a>
          </li>
          <li>
            <a href="#sports">Sports</a>
          </li>
          <li>
            <a href="#entertainment">Entertainment</a>
          </li>
          <li>
            <a href="#world">World</a>
          </li>
        </ul>
      </nav>

      <div className="weather-banner">
        <a
          className="weatherwidget-io"
          href="https://forecast7.com/en/n36d85174d76/auckland/"
          data-label_1="AUCKLAND"
          data-label_2="WEATHER"
          data-theme="original"
        >
          AUCKLAND WEATHER
        </a>
      </div>

      <div className="container">
        <div className="articles">
          <article className="article">
            <img src={looksharp} alt="Latest News" className="article-image" />
            <h2 className="article-title">
              Look Sharp fined almost $300k for misleading pricing, ignoring
              complaints
            </h2>
            <p className="article-date">19 Feb, 2025 0 5:27 PM</p>
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
