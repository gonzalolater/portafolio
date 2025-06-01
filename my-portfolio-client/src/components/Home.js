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
              zIndex: zIndex,
              position: "absolute",
              top: "60px",
              right: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              padding: "10px",
              borderRadius: "50%",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
            <li>1) Software Engineer, more than 15,000 hours of development.</li>
            <li>2) Full Stack Web 2 & 3 Developer.</li>
            <li>3) Oficial Alchemy Certified Ethereum Developer.</li>
            <li>4) Agile Coach - Project Manager - Scrum Master.</li>
            <li>5) Polygon, Algorand, Chainlink, Solana & DeFi Builder.</li>
            <li>6) Microsoft Cybersecurity.</li>
            <li>7) Microsoft Azure IA Developer With OpenAI.</li>
          </ul>
        </div>
      </div>

      {/* Botón Architecture entre el nombre y Social Web Links */}
      <div style={{ display: "flex", justifyContent: "flex-end", margin: "0 10px 20px 0" }}>
        <a
          href="https://deepwiki.com/gonzalolater/portafolio/1-overview"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button
            className="architecture-btn"
            style={{
              background: "linear-gradient(135deg, #b983ff 60%, #8f5cff 100%)",
              color: "#111",
              border: "1px solid #111",
              borderRadius: "50%",
              width: "110px",
              height: "110px",
              boxShadow: "0 6px 24px rgba(140, 60, 255, 0.4)",
              fontWeight: "bold",
              fontSize: "0.95rem",
              cursor: "pointer",
              transition: "transform 0.2s",
              outline: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              letterSpacing: "0.5px",
              animation: "spin-horizontal 2s linear infinite"
            }}
            onMouseOver={e => (e.currentTarget.style.transform = "scale(1.08)")}
            onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            Architecture
          </button>
        </a>
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