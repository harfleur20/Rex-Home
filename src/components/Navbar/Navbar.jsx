import React from 'react'
import './Navbar.scss'
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="laptop">
        <h2 className="logo">
          Rex-Home
        </h2>
        <div className="navigation">
          <ul className="links-conteneur">
            <li className="link">Réservation</li>
            <li className="link">Nos valeurs</li>
            <li className="link">Contact</li>
            <li className="link">C'est Parti</li>
            <li className="link">Louer</li>
          </ul>
          <FiMenu className="menu-icon" />
        </div>
      </div>
      <div className="mobile"></div>
    </div>
  );
};

export default Navbar
