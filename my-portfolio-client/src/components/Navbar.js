import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Hamburguesa from './Hamburguesa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [showNavbarText, setShowNavbarText] = useState(false);
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'];
  const location = useLocation();
  const navbarRef = useRef(null); // Referencia para la navbar

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu(); // Cierra la navbar si se hace clic fuera de ella
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 500);

    return () => clearInterval(intervalId);
  }, [colors.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbarText(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <nav ref={navbarRef}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '5px',
            background: 'linear-gradient(to right, #FF91AF, #8a2be2)',
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            zIndex: '100',
          }}
        >
          <div
            className="hamburger"
            onClick={toggleMenu}
            style={{
              cursor: 'pointer',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Hamburguesa color={colors[colorIndex]} />
            {showNavbarText && (
              <span
                className="navbar-text"
                style={{
                  marginLeft: '40px',
                  marginTop: '20px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: 'black',
                  position: 'relative',
                }}
              >
                ← NAVBAR
              </span>
            )}
          </div>
          <ul
            className="menu"
            style={{
              display: isOpen ? 'flex' : 'none',
              flexDirection: 'column',
              listStyle: 'none',
              padding: '10px',
              margin: '0 10px',
              position: 'absolute',
              top: '100%',
              left: '0',
              backgroundColor: '#FF91AF',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              zIndex: '200',
              justifyContent: 'flex-end',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <li
              style={{
                textDecoration: 'none',
                color: location.pathname === '/' ? 'gray' : 'inherit',
                pointerEvents: location.pathname === '/' ? 'none' : 'auto',
                opacity: location.pathname === '/' ? '0.6' : '1',
              }}
            >
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li style={{ textDecoration: 'none', color: 'inherit' }}>
              <Link to="/audits" onClick={toggleMenu}>
                Audits
              </Link>
            </li>
            <li style={{ textDecoration: 'none', color: 'inherit' }}>
              <Link to="/TechnicalChallenges" onClick={toggleMenu}>
                Technical Challenges
              </Link>
            </li>
            <li style={{ textDecoration: 'none', color: 'inherit' }}>
              <Link to="/studies" onClick={toggleMenu}>
                Studies
              </Link>
            </li>
            <li style={{ textDecoration: 'none', color: 'inherit' }}>
              <Link to="/sponsors" onClick={toggleMenu}>
                Sponsors
              </Link>
            </li>
            <li style={{ textDecoration: 'none', color: 'inherit' }}>
              <Link to="/AuditoriasOEntrevistas" onClick={toggleMenu}>
                Audits & Interviews
              </Link>
            </li>
            <li style={{ textDecoration: 'none', color: 'inherit' }}>
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