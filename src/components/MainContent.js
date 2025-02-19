import React from "react";

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
            <img src="" alt="Latest News" className="article-image" />
            <h2 className="article-title">Marketing Trends for 2025</h2>
            <p className="article-description">
              Explore the top marketing trends shaping the future. From
              AI-driven analytics to immersive digital experiences, learn how to
              stay ahead.
            </p>
          </article>
          <article className="article">
            <img
              src="event.jpg"
              alt="Upcoming Event"
              className="article-image"
            />
            <h2 className="article-title">Annual Marketing Conference</h2>
            <p className="article-description">
              Join us for our annual conference this May in Auckland. Discover
              new strategies, network with peers, and get inspired by industry
              leaders.
            </p>
          </article>
          {/* Add more articles as needed */}
        </div>
      </div>
    </main>
  );
}

export default MainContent;
