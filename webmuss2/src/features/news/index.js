import React, { useState } from 'react';

import "./news.scss" 

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const newsData = [
    {
      id: 1,
      category: 'Announcement',
      title: 'Reminder Announcement regarding Speed Server exclusive items - [SPEED]',
      description: 'Dear MUtizens, Please note that all Speed Server exclusive items will be unavailable for use after the ongoing Speed...',
      date: '4/16/2024'
    },
    {
      id: 2,
      category: 'Announcement',
      title: '[FAQ] Most Asked Questions on Event Speed Server',
      description: 'Thank you for playing MU ONLINE! We understand that our MUtizens have a lot of questions in mind regarding o...',
      date: '4/13/2023'
    },
    {
      id: 3,
      category: 'Patch Note',
      title: 'Patch Notes - July 30, 2024',
      description: 'Dear MUtizens, Please find the latest update details for MU Online on July 30th, 2024. 1. Event Closed 1) The Mast...',
      date: '7/30/2024'
    },
    {
      id: 4,
      category: 'Maintenance',
      title: 'Scheduled Maintenance on July 30th, 2024 (UTC)',
      description: 'Greetings, There will be scheduled maintenance performed on all servers on JULY 30th,2024(UTC). Please refer to t...',
      date: '7/29/2024'
    },
    {
      id: 5,
      category: 'Patch Note',
      title: 'Patch Notes - July 23, 2024',
      description: 'Dear MUtizens, Please find the latest update details for MU Online on July 23rd, 2024. 1. Events and Seasonal Impr...',
      date: '7/23/2024'
    },
    {
      id: 6,
      category: 'Announcement',
      title: `'Playtime & Giveaway' Rewards for Mastery&Mystery Event have been distributed`,
      description: 'Dear MUtizens! We would like to inform you that Playtime Giveaway rewards for Mastery Mystery Eventhave been distri...',
      date: '7/23/2024'
    },
  ];

  const categories = ['All', 'Announcement', 'Maintenance', 'Patch Note', 'Known Issues'];

  return (
    <div className="news-section">
      <h1 className="news-title">Notice</h1>
      <div className="news-nav">
        {categories.map(category => (
          <button
            key={category}
            className={`news-item ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by title"
            className="search-input"
          />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="news-list">
        {newsData
          .filter(news => selectedCategory === 'All' || news.category === selectedCategory)
          .map(news => (
            <div key={news.id} className="news-article">
              <div className="news-info">
                <span className="news-category">{news.category}</span>
                <span className="news-title">{news.title}</span>
                <span className="news-description">{news.description}</span>
              </div>
              <span className="news-date">{news.date}</span>
            </div>
          ))}
      </div>
      <p>jkashgdjsadsaaaaaaaaaaaaaaaaaaaaaaaaadjhsa</p>
    </div>
  );
};

export default News;
