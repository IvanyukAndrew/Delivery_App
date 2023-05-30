import "./App.css";
import { AppContext } from './context'
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { useState } from "react";

function App() {
  const [goodData, setGoodData] = useState(null);
  const shops = ["McDonald's", "The Kebab", "Doner"];

  const appData = {
    goodData,
    setGoodData,
    shops,
  };
  return (
    <AppContext.Provider value={appData}>
      <div className="App">
        <div className="header">
          <p className="shop-button">
            <Link to="/">Shop</Link>
          </p>{" "}
          <p className="stick">|</p>{" "}
          <p className="cart-button">
            <Link to="/cart">Shoping Cart</Link>
          </p>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
