import React, { useState } from "react";
import profile from "../images/profile.png";
import subscribe from "../images/subscribe.png";
import SearchOverlay from "./SearchOverlay";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <h1>Marketing Association NZ</h1>
        <nav>
          <ul>
            <li>
              <button className="search-btn" onClick={toggleSearch}>
                <i className="fas fa-search"></i>
                Search
              </button>
            </li>
            <li>
              <button className="subscribe">
                <img src={subscribe} alt="Subscribe" className="button-icon" />
                Subscribe
              </button>
            </li>
            <li>
              <button className="sign-in">
                <img src={profile} alt="Profile" className="button-icon" />
                Sign In
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <SearchOverlay isOpen={isSearchOpen} onClose={toggleSearch} />
    </header>
  );
}

export default Header;
