import React from "react";
import "./navbar.css";
import logo from "../../assets/join.png"; // coloca tua logo na pasta assets

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo da marca" className="navbar-logo" />
    </nav>
  );
}