import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <Link to="/" className="footer-logo">LibraLink</Link>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h4>개인정보처리방침</h4>
          </div>
          
          <div className="footer-column">
            <h4>이용약관</h4>
          </div>
          
          <div className="footer-column">
            <h4>저작권정책</h4>
          </div>
          
          <div className="footer-column">
            <h4>사이트맵</h4>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>©2024 20201514 All right reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;