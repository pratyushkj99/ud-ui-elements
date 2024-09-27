// DashboardPage.js
import React from 'react';
import './App.css';
import BusinessInfo from './BusinessInfo';
import OnlinePresenceSetup from './OnlinePresenceSetup';

const DashboardPage = () => {
    return (
        <div className="app-container">
          <BusinessInfo />
          <OnlinePresenceSetup />
        </div>
      );
};

export default DashboardPage;
