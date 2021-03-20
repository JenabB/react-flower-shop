import React, { useState } from "react";
import microphone from "../../assets/icons/microphone.svg";
import hamburger from "../../assets/icons/hamburger.svg";
import notif from "../../assets/icons/notif.svg";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="header-container">
      <div className="header-top-container">
        <img src={hamburger} alt="hamburger" />
        <h1>Flower Shop</h1>
        <img src={notif} alt="notif" onClick={showSidebar} />
      </div>

      <form className="search-container">
        <input type="search" placeholder="search your flower" />
        <img src={microphone} alt="microphone" />
      </form>
    </div>
  );
};

export default Header;
