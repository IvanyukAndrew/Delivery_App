import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

function App() {
  return (
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
  );
}

export default App;
