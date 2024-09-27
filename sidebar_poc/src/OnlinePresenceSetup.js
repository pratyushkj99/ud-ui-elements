import React from 'react';
import Card2 from './Card2';
import data from './Card2.json';

const OnlinePresenceSetup = () => {
  const handleButtonClick = (buttonText) => {
    alert(`Button clicked: ${buttonText}`);
  };

  return (
    <div className="online-presence-setup">
      <h2 className="section-title">Online Presence Setup</h2>
      <div className="card-container">
        {data.map((item, index) => (
          <Card2
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
            buttonText={item.buttonText}
            onClick={() => handleButtonClick(item.buttonText)}
          />
        ))}
      </div>
    </div>
  );
};

export default OnlinePresenceSetup;