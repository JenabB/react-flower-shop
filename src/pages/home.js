import React from "react";
import Carousel from "../components/home/Carousel";
import Header from "../components/home/Header";

import ItemList from "../components/home/itemList";
import "../components/home/home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-carousel">
        <Carousel />
      </div>
      <div className="home-item">
        <ItemList />
      </div>
    </div>
  );
};

export default Home;
