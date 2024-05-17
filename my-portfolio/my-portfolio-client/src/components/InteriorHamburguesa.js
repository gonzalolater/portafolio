import React from 'react';
import React, { useState } from 'react';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <ul
          className="menu"
          style={{
            display: isOpen ? 'block' : 'none',
            listStyle: 'none',
            padding: '0',
            margin: '0',
            position: 'absolute',
            top: '100%',
            left: '0',
            backgroundColor: '#f0f0f0',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            zIndex: '200',
          }}
        >
          <li
            style={{
              padding: '10px',
            }}
          >
            Sobre mi
          </li>
           <li
            style={{
              padding: '10px',
            }}
          >
            Repositorio
          </li>
          <li
            style={{
              padding: '10px',
            }}
          >
            Mentorías
          </li>
          <li
            style={{
              padding: '10px',
            }}
          >
            Auditorías
          </li>
          <li
            style={{
              padding: '10px',
            }}
          >
            Entrevistas
          </li>
        </ul>
  );
};

export default App;