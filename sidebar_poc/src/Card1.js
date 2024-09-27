import React from 'react';

const Card1 = ({ title, link, onClick }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body1" onClick={onClick}>
        <a href="#" className="card-link" >
          {link}
        </a>
        <i className="fas fa-arrow-right image1"></i>
      </div>
    </div>
  );
};

export default Card1;