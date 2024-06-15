import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

const NavBar = () => {
return (
  <nav className="navbar">
    <div className="navbar-left">
      <Link to="/" className="logo">
        Barrel
      </Link>
    </div>
    <div className="navbar-center">
      <ul className="nav-links">
        <li>
          <Link to="/gallery">gallery</Link>
        </li>
        <li>
          <Link to="/member">member</Link>
        </li>
      </ul>
    </div>
    {/* <div className="navbar-right">
    <a href="/cart" className="cart-icon">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-count">0</span>
    </a>
    <a href="/account" className="user-icon">
      <i className="fas fa-user"></i>
    </a>
  </div> */}
  </nav>
);
};


export default NavBar;