import React from "react";
import CarouselItem from "../components/home/CarouselItem";
import Header from "../components/home/Header";

import ItemList from "../components/home/itemList";
import "../components/home/home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-carousel">
        <CarouselItem />
      </div>
      <div className="home-item">
        <ItemList />
      </div>
    </div>
  );
};

export default Home;
