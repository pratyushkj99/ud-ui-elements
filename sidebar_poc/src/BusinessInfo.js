import React from 'react';
import Card1 from './Card1';
import data from './Card1.json';

const BusinessInfo = () => {
  const handleLinkClick = (title) => {
    alert(`Link clicked: ${title}`);
  };

  return (
    <div className="business-info">
      <h2 className="section-title">Business Info</h2>
      <div className="card-container">
      {data.map((item, index) => (
          <Card1
            key={index}
            title={item.title}
            link={item.link}
            description={item.description}
            buttonText={item.buttonText}
            onClick={() => handleLinkClick(item.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default BusinessInfo;