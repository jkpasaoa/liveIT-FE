import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Cart({ snackName }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    setCartItems((prevCartItems) => [...prevCartItems, snackName]);
  };

  const deleteFromCart = () => {
    setCartItems((prevCartItems) => prevCartItems.filter((snack) => snack !== snackName));
  };

  return (
    <div className="cart-container">
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
        variant="success"
        className="cart-button"
        style={{ backgroundColor: "#4CAF50", color: "white", fontFamily: "Funk Gibson" }}
      >
        Add This Snack
      </Button>
      <Button
        onClick={deleteFromCart}
        variant="danger"
        className="cart-button"
        style={{ backgroundColor: "black", color: "white", fontFamily: "Funk Gibson" }}
      >
        Delete This Snack
      </Button>
    </div>
  );
}

export default Cart;
