import React from "react";
import "./styles.scss" 
import { Link } from "react-router-dom";

const NavTop = () => {
  return (
    <div className="navbar">
      <ul className="navbar__menu">
        <li><Link to="/news">News</Link>
          <ul className="submenu">
            <li><a href="/news">Notice</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Update Roadmap</a></li>
          </ul>
        </li>
        <li><a href="#">Guides</a>
          <ul className="submenu">
            <li><a href="#">Characters</a></li>
            <li><a href="#">Season Updates</a></li>
            <li><a href="#">Game Guide</a></li>
          </ul>
        </li>
        <li><a href="#">Leader Board</a>
          <ul className="submenu">
            <li><a href="/RankingTable">Ranking</a></li>
            <li><a href="#">Hall of Fame</a></li>
            <li><a href="#">Event Ranking</a></li>
          </ul>
        </li>
        <li><a href="#">Community</a>
          <ul className="submenu">
            <li><a href="#">Discord</a></li>
            <li><a href="#">Fansites</a></li>
          </ul>
        </li>
        <li><a href="#">Shop</a>
          <ul className="submenu">
            <li><a href="#">Item Shop</a></li>
            <li><a href="#">Top Up Wcoin</a></li>
            <li><a href="#">Transaction History</a></li>
          </ul>
        </li>
        <li><a href="#">Support</a>
          <ul className="submenu">
            <li><a href="#">Knowledge Base</a></li>
            <li><a href="#">Shop Guide</a></li>
            <li><a href="#">Redeem Coupon</a></li>
          </ul>
        </li>
        <li><a href="#" className="download">Download</a></li>
      </ul>
    </div>
  );
};

export default NavTop;
{
  /* <div>
<ul>
  <li>
    <a>
      <span>News</span>
    </a>
    <ul>
      <li>
        <a>
          <span>Notice</span>
        </a>
      </li>
      <li>
        <a>
          <span>events</span>
        </a>
      </li>
      <li>
        <a>
          <span>Update Roadmap</span>
        </a>
      </li>
    </ul>
  </li>
</ul>
</div> */
}
