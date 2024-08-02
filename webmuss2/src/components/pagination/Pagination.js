import React from 'react';
import './styles.scss';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button 
        className="page-button" 
        onClick={() => onPageChange(1)} 
        disabled={currentPage === 1}
      >
        ««
      </button>
      <button 
        className="page-button" 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        «
      </button>
      {pageNumbers.map(number => (
        <span 
          key={number} 
          className={`page-number ${number === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </span>
      ))}
      <button 
        className="page-button" 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        »
      </button>
      <button 
        className="page-button" 
        onClick={() => onPageChange(totalPages)} 
        disabled={currentPage === totalPages}
      >
        »»
      </button>
    </div>
  );
};

export default Pagination;
