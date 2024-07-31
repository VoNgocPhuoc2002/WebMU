import React from "react";
import "./styles.scss";

const MainLatest = () => {
  return (
    <div className="container">
      <div className="main-latest">
        <div className="latest-news">
          <h2>Latest News</h2>
          <ul>
            <li>
              <span className="tag patch-note">Patch Note</span>
              <a href="#">Patch Notes - June 25, 2024</a>
              <span className="date">6/25/2024</span>
            </li>
            <li>
              <span className="tag announcement">Announcement</span>
              <a href="#">Scheduled Maintenance on June 25, 2024...</a>
              <span className="date">6/24/2024</span>
            </li>
           
          </ul>
          <a href="#" className="more">
            More
          </a>
        </div>
        <div className="item-shop">
          <h2>Item Shop</h2>
          <div className="items">
            <div className="item">
              <img
                src="https://image.webzen.com/Global/Payment/FileUpload/PackProduct/pimg_l7186.gif"
                alt="Elemental Capsule"
              />
              <p>Elemental Capsule(Water)</p>
              <p className="price">100 Wcoin</p>
              <button>Buy Now</button>
            </div>
            <div className="item">
              <img
                src="https://image.webzen.com/Global/Payment/FileUpload/PackProduct/pimg_l7186.gif"
                alt="Bless of Light(Greater)"
              />
              <p>Bless of Light(Greater)X50+50</p>
              <p className="price">1900 Wcoin</p>
              <button>Buy Now</button>
            </div>
            <div className="item">
              <img
                src="https://image.webzen.com/Global/Payment/FileUpload/PackProduct/pimg_l7186.gif"
                alt="Bless of Light(Greater)"
              />
              <p>Bless of Light(Greater)X20+10</p>
              <p className="price">800 Wcoin</p>
              <button>Buy Now</button>
            </div>
          </div>
          <a href="#" className="more">
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainLatest;
