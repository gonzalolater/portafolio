import React, { useState } from 'react';
import Boton from './Boton';
import './Navbar.css';
import Hamburguesa from './Hamburguesa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
              margin: '0',
              position: 'absolute',
              top: '100%',
              left: '0',
              backgroundColor: 'violet',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              zIndex: '200',
            }}
          >
            <li>Mentorías</li>
            <li>Auditorías</li>
            <li>Entrevistas</li>
            <li>Entrevistas técnicas</li>
            <li>Estudios</li>

          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;