import React from "react";
import "./Navbar.css"; //external css for navbar
import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      {/* contact me button */}
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
}

export default Navbar;
