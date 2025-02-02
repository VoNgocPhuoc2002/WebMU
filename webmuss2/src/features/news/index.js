import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';
import Pagination from '../../components/pagination/Pagination';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Define how many items you want per page
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      category: 'Announcement',
      title: 'Reminder Announcement regarding Speed Server exclusive items - [SPEED]',
      description: 'Dear MUtizens, Please note that all Speed Server exclusive items will be unavailable for use after the ongoing Speed...',
      date: '4/16/2024',
    },
    {
      id: 2,
      category: 'Announcement',
      title: '[FAQ] Most Asked Questions on Event Speed Server',
      description: 'Thank you for playing MU ONLINE! We understand that our MUtizens have a lot of questions in mind regarding o...',
      date: '4/13/2023',
    },
    {
      id: 3,
      category: 'Patch Note',
      title: 'Patch Notes - July 30, 2024',
      description: 'Dear MUtizens, Please find the latest update details for MU Online on July 30th, 2024. 1. Event Closed 1) The Mast...',
      date: '7/30/2024',
    },
    {
      id: 4,
      category: 'Maintenance',
      title: 'Scheduled Maintenance on July 30th, 2024 (UTC)',
      description: 'Greetings, There will be scheduled maintenance performed on all servers on JULY 30th,2024(UTC). Please refer to t...',
      date: '7/29/2024',
    },
    {
      id: 5,
      category: 'Patch Note',
      title: 'Patch Notes - July 23, 2024',
      description: 'Dear MUtizens, Please find the latest update details for MU Online on July 23rd, 2024. 1. Events and Seasonal Impr...',
      date: '7/23/2024',
    },
    {
      id: 6,
      category: 'Announcement',
      title: `'Playtime & Giveaway' Rewards for Mastery&Mystery Event have been distributed`,
      description: 'Dear MUtizens! We would like to inform you that Playtime Giveaway rewards for Mastery Mystery Eventhave been distri...',
      date: '7/23/2024',
    },
  ];

  const categories = ['All', 'Announcement', 'Maintenance', 'Patch Note', 'Known Issues'];

  const handleArticleClick = (news) => {
    navigate('/DetailNew', { state: { news } });
  };

  // Filter the data based on selected category
  const filteredData = selectedCategory === 'All'
    ? data
    : data.filter((news) => news.category === selectedCategory);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="news-section">
      <div className="header">
        <h1>Notice</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search by title" />
          <span className="search-icon">🔍</span>
        </div>
      </div>
      <div className="news-nav">
        {categories.map((category) => (
          <button
            key={category}
            className={`news-item ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="news-list">
        {currentItems.map((news) => (
          <div key={news.id} className="news-article" onClick={() => handleArticleClick(news)}>
            <div className="news-info">
              <span className="news-category">{news.category}</span>
              <span className="news-title">{news.title}</span>
              <span className="news-description">{news.description}</span>
            </div>
            <span className="news-date">{news.date}</span>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default News;
