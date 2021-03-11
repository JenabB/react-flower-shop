import React, { useState } from "react";
import searchicon from "../../assets/icons/search.svg";
import microphone from "../../assets/icons/microphone.svg";
import hamburger from "../../assets/icons/hamburger.svg";
import notif from "../../assets/icons/notif.svg";

const Header = () => {
  const [search, setSearch] = useState("");
  const handleSearch = () => {};
  return (
    <div className="header-container">
      <div className="header-top-container">
        <img src={hamburger} alt="hamburger" />
        <h1>Hallo! Ziva</h1>
        <img src={notif} alt="notif" />
      </div>

      <form className="search-container">
        <input type="search" placeholder="search your flower" />
        <img src={microphone} alt="microphone" />
      </form>
    </div>
  );
};

export default Header;
