import React from "react";
import ShopList from "../components/ShopList";

export const Home = () => {
  return (
    <div className="container">
      <div className="shops-block">
        <p className="title">Shops:</p>

        <ShopList />
      </div>
    </div>
  );
};
