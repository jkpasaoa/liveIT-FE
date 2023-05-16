import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import ThemeContext from "../Components/ThemeContext";

function Cart({ snackName }) {
  const { darkMode } = useContext(ThemeContext);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    setCartItems((prevCartItems) => [...prevCartItems, snackName]);
  };

  const deleteFromCart = () => {
    setCartItems((prevCartItems) => prevCartItems.filter((snack) => snack !== snackName));
  };

  const themeMode = darkMode ? "dark" : "light";
  const buttonColor = darkMode ? "#333" : "#4CAF50";
  const buttonTextColor = darkMode ? "#FFF" : "#000";

  return (
    <div className={`cart-container ${themeMode}`}>
      <h2>Shopping List</h2>
      {cartItems.length === 0 ? (
        <p>No items on your List</p>
      ) : (
        <ul>
          {cartItems.map((snack, index) => (
            <li key={index}>{snack}</li>
          ))}
        </ul>
      )}
      <Button
        onClick={addToCart}
        variant={themeMode === "light" ? "success" : "dark"}
        className="cart-button"
        style={{ backgroundColor: buttonColor, color: buttonTextColor, fontFamily: "Funk Gibson" }}
      >
        Add Snack 🛒
      </Button>
      <Button
        onClick={deleteFromCart}
        variant={themeMode === "light" ? "danger" : "dark"}
        className="cart-button"
        style={{ backgroundColor: "black", color: "white", fontFamily: "Funk Gibson" }}
      >
        Trash Snack 🗑️
      </Button>
    </div>
  );
}

export default Cart;
