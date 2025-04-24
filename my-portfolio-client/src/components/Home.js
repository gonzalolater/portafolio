import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTrophy, faLocationArrow, faFire } from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel";
import "./Home.css";

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [zIndex, setZIndex] = useState(10); // Estado para manejar el z-index

  // Maneja la visibilidad del mensaje al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowMessage(false); // Oculta el mensaje si el usuario baja
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Muestra el mensaje después de 4 segundos y cambia el z-index después de 15 segundos
  useEffect(() => {
    const timerShow = setTimeout(() => {
      setShowMessage(true); // Muestra el mensaje después de 4 segundos
    }, 4000);

    const timerZIndex = setTimeout(() => {
      setZIndex(-10); // Cambia el z-index después de 15 segundos
    }, 15000); // Cambiado a 15 segundos

    return () => {
      clearTimeout(timerShow);
      clearTimeout(timerZIndex);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="profile-section">
        <img
          src="https://i.ibb.co/Gn3fxfv/foto-perfil.jpg"
          alt="Foto de perfil"
          className="profile-photo"
        />
        {showMessage && (
          <div
            className="scroll-prompt"
            style={{
              zIndex: zIndex, // Cambia dinámicamente el z-index
              position: "absolute", // Posición absoluta para colocarlo sobre la foto
              top: "60px", // Ajusta la posición vertical con un margen superior de 40px
              right: "20px", // Ajusta la posición horizontal con un margen derecho adicional de 10px
              backgroundColor: "rgba(255, 255, 255, 0.8)", // Fondo semitransparente para visibilidad
              padding: "10px",
              borderRadius: "50%", // Hace que el elemento sea circular
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              textAlign: "center", // Centra el texto dentro del círculo
              width: "60px", // Ancho del círculo
              height: "60px", // Alto del círculo
              display: "flex", // Para centrar el contenido
              alignItems: "center", // Centra verticalmente el contenido
              justifyContent: "center", // Centra horizontalmente el contenido
            }}
          >
            SCROLL DOWN <br />
            <span>↓</span>
          </div>
        )}
        <div className="info-section">
          <h2>Gonzalo Daniel Aguilar</h2>
          <p className="visitor-count">
            <h2>VISITOR COUNT</h2>
            <br />
            <img src="https://profile-counter.glitch.me/gonzalolater/count.svg" alt="Visitor Count" />
          </p>
          <ul className="skills-list">
            <li>Software Engineer, more than 10,000 hours of development.</li>
            <li>Full Stack Web 2 & 3 Developer.</li>
            <li>Oficial Alchemy Certified Ethereum Developer.</li>
            <li>Agile Coach - Project Manager - Scrum Master.</li>
            <li>Polygon, Algorand, Chainlink, Solana & DeFi Builder.</li>
            <li>Microsoft Cybersecurity.</li>
            <li>Microsoft Azure IA Developer With OpenAI.</li>
          </ul>
        </div>
      </div>
      <h2 className="social-links-title">Social Web Links</h2>
      <div className="social-links">
        {[
          { href: "https://www.linkedin.com/in/gonzalo-daniel-aguilar/", icon: faLinkedin, text: "LinkedIn" },
          { href: "https://github.com/gonzalolater", icon: faGithub, text: "GitHub" },
          { href: "https://lol.fandom.com/wiki/Dodging_Bullets", icon: faTrophy, text: "Leaguepedia" },
          { href: "https://fin.guru/u/gonzalo-daniel-aguilar", icon: faLocationArrow, text: "FinGurú" },
          { href: "https://www.freecodecamp.org/GonzaloDanielAguilar", icon: faFire, text: "FreeCodeCamp" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={link.icon} className="social-icon" />
            {link.text}
          </a>
        ))}
      </div>
      <Carousel />
    </div>
  );
};

export default Home;