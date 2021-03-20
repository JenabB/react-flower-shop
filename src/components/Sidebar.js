import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

const SidebarLeft = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="sidebar">
      <Link to="/" className="menu-bar">
        =
      </Link>

      <div className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className="nav-menu-items" onClick={showSidebar}></div>
      </div>
    </div>
  );
};

export default SidebarLeft;
