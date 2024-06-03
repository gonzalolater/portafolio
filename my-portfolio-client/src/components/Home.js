import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faTrophy,
  faLocationArrow,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel";

const Home = () => {
  const [showMessage, setShowMessage] = useState(true);

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
    const style = document.createElement("style");
    style.innerHTML = `body::-webkit-scrollbar {
        width: 0.5em;
        background-color: #f5f5f5;
      } body::-webkit-scrollbar-thumb {
        background-color: #000;
      }`;
    document.head.appendChild(style);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "110px",
        minHeight: "100vh",
      }}
    >
      <img
        src="https://i.ibb.co/Gn3fxfv/foto-perfil.jpg"
        alt="Foto de perfil"
        style={{
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <div>
        <h1
          style={{
            padding: "20px",
            textAlign: "center",
            border: "2px solid red",
            borderRadius: "10px",
            backgroundColor: "violet",
            color: "white",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            WebkitTextStroke: "1px red",
            WebkitTextFillColor: "white",
          }}
        >
          Gonzalo Daniel Aguilar
        </h1>
        <ul style={{ fontSize: "20px", fontWeight: "bold" }}>
          <li>Software Engineer, more than 10,000 hours of development.</li>
          <li>Full Stack Web 2 & 3 Developer.</li>
          <li>Oficial Alchemy Certified Ethereum Developer.</li>
          <li>Agile Coach - Project Manager - Scrum Master.</li>
          <li>Polygon, Algorand, Chainlink, Solana & DeFi Builder.</li>
          <li>Microsoft Cybersecurity.</li>
          <li>Microsoft Azure IA Developer With OpenAI.</li>
        </ul>

        {showMessage && (
          <div
            style={{
              position: "fixed",
              top: "40%",
              right: "20px",
              transform: "translateY(-50%)",
              backgroundColor: "#fff",
              padding: "10px",
              border: "2px solid #000",
              fontSize: "12px",
            }}
          >
            Scroll Down
            <br />
            <span style={{ fontSize: "24px" }}>↓</span>
          </div>
        )}

        {[
          {
            href: "https://www.linkedin.com/in/gonzalo-daniel-aguilar/",
            icon: faLinkedin,
            text: "LinkedIn",
          },
          {
            href: "https://github.com/gonzalolater",
            icon: faGithub,
            text: "GitHub",
          },
          {
            href: "https://lol.fandom.com/wiki/Dodging_Bullets",
            icon: faTrophy,
            text: "Leaguepedia",
          },
          {
            href: "https://fin.guru/u/gonzalo-daniel-aguilar",
            icon: faLocationArrow,
            text: "FinGurú",
          },
          {
            href: "https://www.freecodecamp.org/GonzaloDanielAguilar",
            icon: faFire,
            text: "FreeCodeCamp",
          },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              color: "red",
              fontSize: "1.2em",
              marginTop: "10px",
            }}
          >
            <FontAwesomeIcon icon={link.icon} style={{ marginRight: "5px" }} />
            {link.text}
          </a>
        ))}
      </div>
      <Carousel />
    </div>
  );
};

export default Home;