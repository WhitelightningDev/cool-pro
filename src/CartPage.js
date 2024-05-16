// CartPage.js
import React from 'react';

function CartPage({ cartItems, removeFromCart }) {
  console.log('cartItems:', cartItems); // Log the value of cartItems

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map(item => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              {item && item.name ? item.name : 'Item Name Unavailable'}
              <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
