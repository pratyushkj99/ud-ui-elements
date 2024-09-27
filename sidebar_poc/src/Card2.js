import React from 'react';

const Card2 = ({ title, image, description, buttonText, onClick }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body2">
        <img src={image} alt={title} className="card-img" />
        <p className="card-text">{description}</p>
        <button className="btn btn-primary" onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card2;