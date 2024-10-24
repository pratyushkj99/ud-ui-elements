import React, { useState } from "react";
import "./SidebarMenu.scss";
import { Sidenav, Nav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import MoneyIcon from "@rsuite/icons/legacy/Money";
import CogIcon from "@rsuite/icons/legacy/Cog";
import navData from "./navData.json";
import turbifyLogo from "./turbify.PNG";
import { ChangeList } from "@rsuite/icons";

const iconMap = {
  DashboardIcon: <DashboardIcon />,
  GroupIcon: <GroupIcon />,
  MagicIcon: <MagicIcon />,
  MoneyIcon: <MoneyIcon/>,
  CogIcon: <CogIcon />
};

const App = () => {
  const [activeKey, setActiveKey] = useState("1");
  const [subItems, setSubItems] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const handleToggleMenu = (item) => {
    console.log(item,"ITEM");
    setOpenMenu(openMenu == item ? null : item);
    console.log(openMenu,"OPEN MENU");
  }
  const renderNavItem = (item) => {
    // console.log(item,"item check");
    if (item.isSubItems && item.subItems) {
      const isActiveMenu =
        item.eventKey === activeKey ||
        item.subItems.some((subItem) => subItem.eventKey === subItems);
      console.log(activeKey,"#####ACTIVEMENU#######");
      return (
        <Nav.Menu
          key={item.eventKey}
          eventKey={item.eventKey}
          title={item.title}
          icon={iconMap[item.icon]}
          active={isActiveMenu}
          open={openMenu==item.eventKey}
          onToggle={()=>handleToggleMenu(item.eventKey)}
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

  return (
    <div style={{ display: "flex" }}>
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
    </div>
  );
};

export default App;
