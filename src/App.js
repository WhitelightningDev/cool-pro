// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';
import HomePage from './HomePage';
import UserProfilePage from './UserProfilePage';
import ShoppingPage from './ShoppingPage';
import LegalPage from './LegalPage';
import CartPage from './CartPage';
import InterestCalculator from './InterestCalculator'; // Import the InterestCalculator component

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    alert('Item has been added to the cart!');
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <Router>
      <div className="App">
        <NavigationMenu cartItems={cartItems.length} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/shopping" element={<ShoppingPage addToCart={addToCart} />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/interest-calculator" element={<InterestCalculator />} /> {/* Add the calculator route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
