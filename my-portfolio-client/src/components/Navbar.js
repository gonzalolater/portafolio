import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Hamburguesa from './Hamburguesa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [showNavbarText, setShowNavbarText] = useState(false); // Estado para mostrar el texto animado
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

  // Muestra el texto animado después de 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbarText(true);
    }, 5000); // 5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <nav>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5px", // Reducido de 10px a 5px para hacer la navbar más fina
            background: "linear-gradient(to right, #FF91AF, #8a2be2)", // Gradiente aplicado
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
              position: "relative",
              display: "flex",
              alignItems: "center", // Asegura que el texto y las líneas estén alineados verticalmente
            }}
          >
            <Hamburguesa color={colors[colorIndex]} />
            {showNavbarText && (
              <span
                className="navbar-text"
                style={{
                  marginLeft: "40px", // Margen izquierdo de 40px
                  marginTop: "20px", // Margen superior de 20px
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "black",
                  position: "relative", // Asegura que el margen se aplique correctamente
                }}
              >
                ← NAVBAR
              </span>
            )}
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
              backgroundColor: "#FF91AF",
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
                color: location.pathname === "/" ? "gray" : "inherit", // Cambia el color a gris si estás en Home
                pointerEvents: location.pathname === "/" ? "none" : "auto", // Deshabilita el clic si estás en Home
                opacity: location.pathname === "/" ? "0.6" : "1", // Reduce la opacidad para indicar que está deshabilitado
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