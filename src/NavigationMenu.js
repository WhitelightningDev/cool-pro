import React from 'react';
import { Link } from 'react-router-dom';

function NavigationMenu({ cartItems }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Company Name</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">User Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shopping">Shopping</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/legal">Legal</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/interest-calculator">Interest Calculator</Link>
            </li>
          </ul>
          <div className="navbar-text m-2">
            <Link to="/cart">
              <i className="fa fa-shopping-cart"></i> {cartItems > 0 && <span className="badge badge-pill badge-primary">{cartItems}</span>}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationMenu;
