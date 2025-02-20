import React, { useEffect, useRef } from "react";
import looksharp from "../images/looksharp.png";
import ocr from "../images/ocr.png";

function SearchOverlay({ isOpen, onClose }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (overlayRef.current === e.target) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="search-overlay" ref={overlayRef}>
      <div className="search-overlay-content" ref={contentRef}>
        <button className="close-btn" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search articles..."
            className="search-input"
            autoFocus
          />
          <button className="search-submit">Search</button>
        </div>

        <div className="featured-articles">
          <h2>Featured Articles</h2>
          <div className="featured-grid">
            <article className="featured-article">
              <img src={looksharp} alt="Featured" />
              <h3>Look Sharp fined almost $300k</h3>
            </article>
            <article className="featured-article">
              <img src={ocr} alt="Featured" />
              <h3>Official Cash Rate live updates</h3>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchOverlay;
