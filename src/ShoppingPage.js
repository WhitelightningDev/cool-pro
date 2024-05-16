// ShoppingPage.js
import React from 'react';

function Product({ id, name, price, addToCart }) {
  const handleAddToCart = () => {
    addToCart();
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">${price}</p>
          <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

function ShoppingPage({ addToCart }) {
  // Dummy product data
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
  ];

  return (
    <div className="container">
      <h2>Shop</h2>
      <div className="row">
        {products.map(product => (
          <Product key={product.id} id={product.id} name={product.name} price={product.price} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ShoppingPage;
