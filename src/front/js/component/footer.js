import React from 'react';
import '../../styles/footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Questions? Call 1-800-123-4567</h3>
        </div>
        <div className="footer-section">
          <ul className="footer-links">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Speed Test</a></li>
          </ul>
          <ul className="footer-links">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Cookie Preferences</a></li>
            <li><a href="#">Legal Notices</a></li>
          </ul>
          <ul className="footer-links">
            <li><a href="#">Account</a></li>
            <li><a href="#">Ways to Watch</a></li>
            <li><a href="#">Corporate Information</a></li>
            <li><a href="#">Netflix Originals</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <select className="language-selector">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
          <p>© {new Date().getFullYear()} Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
};
