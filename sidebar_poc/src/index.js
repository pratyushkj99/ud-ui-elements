import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Sidenav, Nav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import MoneyIcon from "@rsuite/icons/legacy/Money";
import CogIcon from "@rsuite/icons/legacy/Cog";
import navData from "./navData.json";
import turbifyLogo from "./turbify.PNG";
import DashboardPage from "./DashboardPage"; 

const iconMap = {
  DashboardIcon: <DashboardIcon />,
  GroupIcon: <GroupIcon />,
  MagicIcon: <MagicIcon />,
  MoneyIcon: <MoneyIcon />,
  CogIcon: <CogIcon />
};

const App = () => {
  const [activeKey, setActiveKey] = useState("1"); 
  const [subItems, setSubItems] = useState(null);

  const renderNavItem = (item) => {
    if (item.isSubItems && item.subItems) {
      const isActiveMenu = item.eventKey === activeKey || item.subItems.some(subItem => subItem.eventKey === subItems);

      return (
        <Nav.Menu
          key={item.eventKey}
          eventKey={item.eventKey}
          title={item.title}
          icon={iconMap[item.icon]}
          active={isActiveMenu}
        >
          {item.subItems.map((subItem) => renderNavItem(subItem))}
        </Nav.Menu>
      );
    }

    return (
      <Nav.Item
        key={item.eventKey}
        eventKey={item.eventKey}
        icon={iconMap[item.icon]}
        active={item.eventKey === activeKey || item.eventKey === subItems}
        onSelect={() => {
          if (item.isSubItem) {
            setSubItems(item.eventKey);
            setActiveKey(item.parentKey);
          } else {
            setActiveKey(item.eventKey);
            setSubItems(null);
          }
        }}
      >
        {item.title}
        {item.soon && <span className="soon-badge">SOON</span>}
      </Nav.Item>
    );
  };

  const renderContent = () => {
    switch (activeKey) {
      case "1":
        return <DashboardPage />;
      default:
        return <div>Select an option from the menu</div>;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div style={{ width: 250 }}>
        <Sidenav>
          <Sidenav.Body>
            <Nav activeKey={activeKey} onSelect={setActiveKey}>
              {navData.sidenav.map((item) => renderNavItem(item))}
            </Nav>
          </Sidenav.Body>
          <div className="upgrade-section">
            <button className="upgrade-button">Upgrade</button>
          </div>
          <div className="logo-section">
            <img src={turbifyLogo} alt="Turbify Logo" className="turbify-logo" />
          </div>
        </Sidenav>
      </div>
      <div style={{ padding: "20px", width: "100%" }}>
        {renderContent()}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
