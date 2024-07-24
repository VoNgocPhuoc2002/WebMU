import React from 'react';
import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">About WEBZEN</a>
        <a href="#">Korean Game Portal</a>
        <a href="#">IP Franchising List</a>
        <a href="#">Business Partnership</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">EULA</a>
      </div>
      <div className="footer-main">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="https://static.webzen.com/platform/common/v1/images/ico_webzen.png" alt="Webzen Icon" className="webzen-icon" />
          </div>
          <div className="footer-copyright">
            Webzen Inc. Global Digital Entertainment Leader<br />
            COPYRIGHT© Webzen Inc. ALL RIGHTS RESERVED.
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-time">
            <span>18:31</span> Server Time<br />
            Jul 24 2024 (UTC)
          </div>
          <div className="footer-time">
            <span>01:31</span> Local Time<br />
            Jul 25 2024 (Asia/Saigon)
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
