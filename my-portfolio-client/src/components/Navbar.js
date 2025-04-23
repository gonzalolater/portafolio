import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Hamburguesa from './Hamburguesa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'];

  const location = useLocation(); // Hook para obtener la ruta actual

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 500);

    return () => clearInterval(intervalId);
  }, [colors.length]);

  return (
    <>
      <nav>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            backgroundColor: "violet",
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            zIndex: "100",
          }}
        >
          <div
            className="hamburger"
            onClick={toggleMenu}
            style={{
              cursor: "pointer",
            }}
          >
            <Hamburguesa color={colors[colorIndex]} />
          </div>
          <ul
            className="menu"
            style={{
              display: isOpen ? "flex" : "none",
              flexDirection: "column",
              listStyle: "none",
              padding: "10px",
              margin: "0 10px",
              position: "absolute",
              top: "100%",
              left: "0",
              backgroundColor: "violet",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              zIndex: "200",
              justifyContent: "flex-end",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <li
              style={{
                textDecoration: "none",
                color: location.pathname === "/" ? "gray" : "inherit", // Cambia el color si estás en Home
                pointerEvents: location.pathname === "/" ? "none" : "auto", // Deshabilita el clic si estás en Home
              }}
            >
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li style={{ textDecoration: "none", color: "inherit" }}>
              <Link to="/audits" onClick={toggleMenu}>
                Audits
              </Link>
            </li>
            <li style={{ textDecoration: "none", color: "inherit" }}>
              <Link to="/TechnicalChallenges" onClick={toggleMenu}>
                Technical Challenges
              </Link>
            </li>
            <li style={{ textDecoration: "none", color: "inherit" }}>
              <Link to="/studies" onClick={toggleMenu}>
                Studies
              </Link>
            </li>
            <li style={{ textDecoration: "none", color: "inherit" }}>
              <Link to="/sponsors" onClick={toggleMenu}>
                Sponsors
              </Link>
            </li>
            <li style={{ textDecoration: "none", color: "inherit" }}>
              <Link to="/AuditoriasOEntrevistas" onClick={toggleMenu}>
                Audits & Interviews
              </Link>
            </li>
            <li style={{ textDecoration: "none", color: "inherit" }}>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;