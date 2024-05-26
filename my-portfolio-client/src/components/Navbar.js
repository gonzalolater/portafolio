import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Boton from './Boton';
import './Navbar.css';
import Hamburguesa from './Hamburguesa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px',
            backgroundColor: 'violet',
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
            }}
          >
            <Hamburguesa />
          </div>
          <Boton />
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
              backgroundColor: 'violet',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              zIndex: '200',
              justifyContent: 'flex-end',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <li style={{ textDecoration: 'none', color: 'inherit' }}>
              <Link to="/audits" onClick={closeMenu}>
                Audits
              </Link>
            </li>
            <li style={{ textDecoration: 'none', color: 'inherit' }}>
               <Link to="/TechnicalChallenges" onClick={closeMenu}>
                Technical Challenges
              </Link>
            </li>
            <li style={{ textDecoration: 'none', color: 'inherit' }}>
               <Link to="/interviews" onClick={closeMenu}>
                Interviews
              </Link>
            </li>
            <li style={{ textDecoration: 'none', color: 'inherit' }}>
              <Link to="/technical-interviews" onClick={closeMenu}>
                Technical interviews
              </Link>
            </li>
            <li style={{ textDecoration: 'none', color: 'inherit' }}>
              <Link to="/studies" onClick={closeMenu}>
                Studies
              </Link>
            </li>
            <li style={{ textDecoration: 'none', color: 'inherit' }}>
              <Link to="/mentorships" onClick={closeMenu}>
                Mentorships
              </Link>
            </li>
            <li style={{ textDecoration: 'none', color: 'inherit' }}>
              <Link to="/sponsors" onClick={closeMenu}>
                Sponsors
              </Link>
            </li>
            <li style={{ textDecoration: 'none', color: 'inherit' }}>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            </ul>
            </div>
      </nav>
    </>
  );
};

export default Navbar;
