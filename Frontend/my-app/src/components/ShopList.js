import React, { useState } from "react";

const ShopList = ({ shops, chooseShop }) => {
  return (
    <div className="shop-list">
      <div className="shop-block" onClick={() => chooseShop('')}>All</div>
      {shops.map((item) => {
        return <div key={item} className="shop-block" onClick={() => chooseShop(item)}>{item}</div>;
      })}
    </div>
  );
};

export default ShopList;
