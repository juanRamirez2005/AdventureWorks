import React from "react";
import Cyclist from "../../assets/cyclist2.png";
import "../../styles/components/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-container">
          <li>
            <a href="/" className="logo">
              <img src={Cyclist} alt="logo" />
            </a>
          </li>
          <li>
            <a href="/" className="icon">
              <i className="fa-solid fa-house"></i>
              <span className="nav-item">Home</span>
            </a>
          </li>
          <li>
            <a href="/" className="icon">
              <i className="fa-solid fa-user"></i>
              <span className="nav-item">Profile</span>
            </a>
          </li>
          <li>
            <a href="" className="icon">
              <i className="fa-solid fa-wallet"></i>
              <span className="nav-item">Wallet</span>
            </a>
          </li>
          <li>
            <a href="/#/register-purchase" className="icon">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="nav-item">Purchase</span>
            </a>
          </li>
          <li>
            <a href="/#/sign-in" className="icon logout">
              <i className="fa-solid fa-right-to-bracket"></i>
              <span className="nav-item">Sign in</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { Navbar };
