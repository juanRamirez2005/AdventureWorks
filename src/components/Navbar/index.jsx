import React from "react";
import Cyclist from "../../assets/cyclist2.png";
import "../../styles/components/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <img className="logo" src={Cyclist} alt="Logo" />
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="menu-hamburguer">
        <i className="fas fa-bars"></i>
      </label>

      <div className="links-container">
        <ul>
          <li>
            <a className="active" href="/">
              <i className="fa-solid fa-house"></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa-solid fa-user"></i>
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a href="/register-purchase">
              <i className="fa-solid fa-cart-shopping"></i>
              <span>Purchase</span>
            </a>
          </li>
          <li>
            <a href="/sign-in">
              <i className="fa-solid fa-right-to-bracket"></i>
              <span>Sign In</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
