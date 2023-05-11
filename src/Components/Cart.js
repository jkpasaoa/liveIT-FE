import React, { useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (snack) => {
    setCartItems((prevCartItems) => [...prevCartItems, snack]);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cartItems.map((snack, index) => (
            <li key={index}>{snack.name}</li>
          ))}
        </ul>
      )}
      <button onClick={() => addToCart({ name: "Snack 1" })}>Add Snack 1</button>
      <button onClick={() => addToCart({ name: "Snack 2" })}>Add Snack 2</button>
      <button onClick={() => addToCart({ name: "Snack 3" })}>Add Snack 3</button>
    </div>
  );
}

export default Cart;
