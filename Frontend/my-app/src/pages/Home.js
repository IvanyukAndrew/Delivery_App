import React, { useContext, useEffect, useState } from "react";
import ShopList from "../components/ShopList";
import GoodList from "../components/GoodList";
import axios from "axios";
import { AppContext } from "../context";

export const Home = () => {
  const [chooseShop, setChooseShop] = useState("");
  const { goodData, setGoodData, shops } = useContext(AppContext);

  const fetchData = async () => {
    const { data } = await axios.get(
      `http://localhost:5555/good/${chooseShop}`
    );

    setGoodData(data);
  };

  useEffect(() => {
    fetchData();
  }, [chooseShop]);

  return (
    <div className="container">
      <div className="shops-block">
        <p className="title">Shops:</p>

        <ShopList shops={shops} chooseShop={setChooseShop} />
      </div>
      <GoodList data={goodData} />
    </div>
  );
};
