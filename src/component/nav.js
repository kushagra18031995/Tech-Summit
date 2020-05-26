import React from "react";
import "../App.css";
import image1 from "../images/image1.png";
import { Link } from "react-router-dom";
function Nav() {
  const navStyle = {
    color: "yellow",
  };

  return (
    <nav className="nav-class">
      <img src={image1} alt="logo" className="image-logo"></img>
      <ul className="nav-length">
        <li>
          <Link style={navStyle} to="./Home">
            Home
          </Link>
        </li>
        <li>
          <Link style={navStyle} to="./About">
            About
          </Link>
        </li>
        <li>
          <Link style={navStyle} to="./Gallary">
            Gallary
          </Link>
        </li>
        <li>
          <Link to="./Guests" style={navStyle}>
            Guests
          </Link>
        </li>
        <li>
          <Link to="./Contact" style={navStyle}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
