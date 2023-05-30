import React from "react";

const GoodList = ({ data }) => {
  return (
    <div className="goods-block">
      <div className="goods-list">
        {data?.map((item) => (
          <div key={item._id} className="good-block">
            <img className="good-img" src={item.imageUrl} alt="Shaurma" />
            <p className="good-title">{item.name}</p>
            <button className="good-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoodList;
