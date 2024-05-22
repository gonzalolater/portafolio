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
              padding: '0',
              margin: '0 10px',
              position: 'absolute',
              top: '100%',
              left: '0',
              backgroundColor: 'violet',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              zIndex: '200',
              justifyContent: 'flex-end',
            }}
          >
            <li>
              <Link to="/audits" onClick={closeMenu}>
                Audits
              </Link>
            </li>
            <li>
               <Link to="/TechnicalChallenges" onClick={closeMenu}>
                Technical Challenges
              </Link>
            </li>
            <li>
               <Link to="/interviews" onClick={closeMenu}>
                Interviews
              </Link>
            </li>
            <li>
              <Link to="/technical-interviews" onClick={closeMenu}>
                Technical interviews
              </Link>
            </li>
            <li>
              <Link to="/studies" onClick={closeMenu}>
                Studies
              </Link>
            </li>
            <li>
              <Link to="/mentorships" onClick={closeMenu}>
                Mentorships
              </Link>
            </li>
            <li>
              <Link to="/sponsors" onClick={closeMenu}>
                Sponsors
              </Link>
            </li>
            <li>
              <Link to="/" onClick={closeMenu}>
                Principal Page
              </Link>
            </li>
            </ul>
            </div>
      </nav>
    </>
  );
};

export default Navbar;
