import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Marketing Association New Zealand</p>
      </div>
    </footer>
  );
}

export default Footer;
