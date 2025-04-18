import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTrophy, faLocationArrow, faFire } from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel";
import "./Home.css";

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowMessage(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      <div className="profile-section">
        <img
          src="https://i.ibb.co/Gn3fxfv/foto-perfil.jpg"
          alt="Foto de perfil"
          className="profile-photo"
        />
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
      {showMessage && (
        <div className="scroll-prompt">
          SCROLL DOWN<br />
          <span>↓</span>
        </div>
      )}
      <h2 className="social-links-title">Social Web Links</h2> {/* New heading with class */}
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