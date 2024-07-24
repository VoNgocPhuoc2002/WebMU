import React, { useState, useEffect, useRef } from "react";
import "./styles.scss";

const banners = [
  {
    title: "Elemental Capsule Ranking Event",
    date: "6/18/2024 ~ 7/9/2024",
    img: "https://uploadcdn.webzen.com/Files/Clara/WebzenGP/webmanager/SVR002/element240618main.jpg",
    thumb:
      "https://uploadcdn.webzen.com/Files/Clara/WebzenGP/webmanager/SVR002/element240618mainth.png",
  },
  {
    title: "EXP Boost Event",
    date: "6/20/2024 ~ 7/10/2024",
    img: "https://uploadcdn.webzen.com/Files/Clara/WebzenGP/webmanager/SVR002/expboost240618main.jpg",
    thumb:
      "https://uploadcdn.webzen.com/Files/Clara/WebzenGP/webmanager/SVR002/expboost240618mainth.png",
  },
  {
    title: "Long-Term Inactive Account Deletion Notice",
    date: "6/25/2024",
    img: "https://uploadcdn.webzen.com/Files/Clara/WebzenGP/webmanager/SVR002/catls20220628main.jpg",
    thumb:
      "https://uploadcdn.webzen.com/Files/Clara/WebzenGP/webmanager/SVR002/catls20220628mainth.png",
  },
  {
    title: "MU Online Game Guide Collection in TH",
    date: "6/28/2024",
    img: "https://uploadcdn.webzen.com/Files/Clara/WebzenGP/webmanager/SVR002/s1622upmain.jpg",
    thumb:
      "https://uploadcdn.webzen.com/Files/Clara/WebzenGP/webmanager/SVR002/s1622mainth.png",
  },
];

const MainBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    resetInterval();
  };

  const { title, date, img } = banners[currentIndex];

  return (
    <div className="mainbanner">
      <div
        className="mainbanner__slider"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="mainbanner__info">
          <h3 className="mainbanner__title">{title}</h3>
          <span className="mainbanner__date">{date}</span>
        </div>
      </div>
      <div className="thumbnails">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`thumbnail ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <div className="thumbnail__info">
              <span className="thumbnail__title">{banner.title}</span>
            </div>
            <img
              src={banner.thumb}
              alt={banner.title}
              className="thumbnail__image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainBanner;
