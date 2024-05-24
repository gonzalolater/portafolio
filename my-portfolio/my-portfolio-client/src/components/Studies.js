import React from "react";
import "./Studies.css";

const Studies = () => {
  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const offset = section.offsetTop - 120;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  return (
    <div>
      <nav style={{ marginTop: "70px", marginLeft: "40px" }} id="navbar">
        <header style={{ textAlign: "center", color: "red" }}>
          Studies List - more than 10,000 hours PROGRAMMING and STUDY OF WEB
          SOFTWARE.
        </header>
        <ul>
          <li>
            <a
              className="nav-link"
              href="#9"
              onClick={(e) => handleNavLinkClick(e, "9")}
            >
              Responsive Web Design - 300 Hours
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#24"
              onClick={(e) => handleNavLinkClick(e, "24")}
            >
              Legacy JavaScript Algorithms and Data Structures - 300 Hours
            </a>
          </li>
          <li>
            {" "}
            <a
              className="nav-link"
              href="#12"
              onClick={(e) => handleNavLinkClick(e, "12")}
            >
              Developer 3.0 - 900 Hours
            </a>{" "}
          </li>
          <li>
            <a
              className="nav-link"
              href="#28"
              onClick={(e) => handleNavLinkClick(e, "28")}
            >
              Google Web Developer 1
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#27"
              onClick={(e) => handleNavLinkClick(e, "27")}
            >
              Google Web Developer 2
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#32"
              onClick={(e) => handleNavLinkClick(e, "32")}
            >
              FrontEnd Development Liberaries Certification - 300 Hours
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#34"
              onClick={(e) => handleNavLinkClick(e, "34")}
            >
              Blockchain and cryptocurrency school career - 500 Hours
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#35"
              onClick={(e) => handleNavLinkClick(e, "35")}
            >
              Ethereum Developer Program - 300 Hours
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#36"
              onClick={(e) => handleNavLinkClick(e, "36")}
            >
              Certificate Cybersecurity Awareness Cybersecurity Terminology
              Microsoft & Project Management Institute
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#39"
              onClick={(e) => handleNavLinkClick(e, "39")}
            >
              Alchemy Certified Ethereum Developer - 400 Hours
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#40"
              onClick={(e) => handleNavLinkClick(e, "39")}
            >
              Road To Web 3 - 500 Hours
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#1"
              onClick={(e) => handleNavLinkClick(e, "1")}
            >
              {" "}
              Visual Studio Code{" "}
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#2"
              onClick={(e) => handleNavLinkClick(e, "2")}
            >
              Time Management Mastery Do More Stress Less
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#3"
              onClick={(e) => handleNavLinkClick(e, "3")}
            >
              Time Management and Productivity Mastery
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#4"
              onClick={(e) => handleNavLinkClick(e, "4")}
            >
              Microsoft - The Cybersecurity Threat Landscape.
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#5"
              onClick={(e) => handleNavLinkClick(e, "5")}
            >
              Smart Tips Manager as Coach
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#6"
              onClick={(e) => handleNavLinkClick(e, "6")}
            >
              Smart Tips Leadership
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#7"
              onClick={(e) => handleNavLinkClick(e, "7")}
            >
              Smart Tips Communication
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#8"
              onClick={(e) => handleNavLinkClick(e, "8")}
            >
              Scrum Master Certification
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#10"
              onClick={(e) => handleNavLinkClick(e, "10")}
            >
              React.Js Webpack SASS
            </a>{" "}
          </li>
          <li>
            <a
              className="nav-link"
              href="#11"
              onClick={(e) => handleNavLinkClick(e, "11")}
            >
              React Hooks and Firebase and-Material Design Fullstack Extreme
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#13"
              onClick={(e) => handleNavLinkClick(e, "13")}
            >
              Javascript Developer
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#14"
              onClick={(e) => handleNavLinkClick(e, "14")}
            >
              Agile, Scrum, Kanban & XP
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#15"
              onClick={(e) => handleNavLinkClick(e, "15")}
            >
              Modern Javascript from the Beginning
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#16"
              onClick={(e) => handleNavLinkClick(e, "16")}
            >
              .Net Core Advance
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#17"
              onClick={(e) => handleNavLinkClick(e, "17")}
            >
              Modern HTML and CSS From the Beginning including Sass
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#18"
              onClick={(e) => handleNavLinkClick(e, "18")}
            >
              Microsoft SQL Server para Principiantes
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#19"
              onClick={(e) => handleNavLinkClick(e, "19")}
            >
              Master FullStack Web Development Node SQL React and More
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#20"
              onClick={(e) => handleNavLinkClick(e, "20")}
            >
              Master in Emotional Intelligence and Soft Skill YPD Youth
              Potential Development
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#21"
              onClick={(e) => handleNavLinkClick(e, "21")}
            >
              Leadership and Team Management Certified
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#22"
              onClick={(e) => handleNavLinkClick(e, "22")}
            >
              Leadership and Team Management Advanced Level 2021
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#23"
              onClick={(e) => handleNavLinkClick(e, "23")}
            >
              Leading Efficient Work Meetings
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#25"
              onClick={(e) => handleNavLinkClick(e, "25")}
            >
              Advanced JavaScript
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#26"
              onClick={(e) => handleNavLinkClick(e, "26")}
            >
              JavaScript esencial
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#29"
              onClick={(e) => handleNavLinkClick(e, "29")}
            >
              Fundamentals of Project Management Leadership by Project
              Management Institute
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#30"
              onClick={(e) => handleNavLinkClick(e, "30")}
            >
              Fundamentals of Project Management
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#31"
              onClick={(e) => handleNavLinkClick(e, "31")}
            >
              Software Engineering Fundamentals
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#33"
              onClick={(e) => handleNavLinkClick(e, "33")}
            >
              Training to Dynamize Innovation Systems from the Public Sector
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#37"
              onClick={(e) => handleNavLinkClick(e, "37")}
            >
              FullStack Web Developer
            </a>
          </li>
          <li>
            <a
              style={{ marginBottom: "10px" }}
              className="nav-link"
              href="#38"
              onClick={(e) => handleNavLinkClick(e, "38")}
            >
              FullStack Blockchain Developer
            </a>
          </li>
          <li></li>
        </ul>
      </nav>
      <main id="studies-List" style={{ marginTop: "200px" }}>
        <section className="main-section" id="1">
          <header>Visual Studio Code</header>
          <article>
            <a href="https://ibb.co/D8zkK8K">
              <img
                src="https://i.ibb.co/1d7K2d2/Visual-Studio-Code.jpg"
                alt="Visual-Studio-Code"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="2">
          <header>Time Management Mastery Do More Stress Less</header>
          <article>
            <a href="https://ibb.co/vq58zQq">
              <img
                src="https://i.ibb.co/fFR70nF/Time-Management-Mastery-Do-More-Stress-Less.jpg"
                alt="Time-Management-Mastery-Do-More-Stress-Less"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="3">
          <header>Time Management and Productivity Mastery</header>
          <article>
            <a href="https://ibb.co/7Jxq5Hk">
              <img
                src="https://i.ibb.co/VW0sZdw/Time-Management-and-Productivity-Mastery.jpg"
                alt="Time-Management-and-Productivity-Mastery"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="4">
          <header>The Cybersecurity Threat Landscape</header>
          <article>
            <a href="https://ibb.co/j59cnRr">
              <img
                src="https://i.ibb.co/6Zc3jBW/The-Cybersecurity-Threat-Landscape.jpg"
                alt="The-Cybersecurity-Threat-Landscape"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="5">
          <header>Smart Tips Manager as Coach</header>
          <article>
            <a href="https://ibb.co/5hj5dz5">
              <img
                src="https://i.ibb.co/fdNCbKC/Smart-Tips-Manager-as-Coach.jpg"
                alt="Smart-Tips-Manager-as-Coach"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="6">
          <header>Smart Tips Leadership</header>
          <article>
            <a href="https://ibb.co/Kzh3KQd">
              <img
                src="https://i.ibb.co/wrgxcbV/Smart-Tips-Leadership.jpg"
                alt="Smart-Tips-Leadership"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="7">
          <header>Smart Tips Communication</header>
          <article>
            <a href="https://ibb.co/ygHmWpZ">
              <img
                src="https://i.ibb.co/P1qswMP/Smart-Tips-Communication.jpg"
                alt="Smart-Tips-Communication"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="8">
          <header>Scrum Master Certification</header>
          <article>
            <a href="https://ibb.co/QPDJ5Wk">
              <img
                src="https://i.ibb.co/x1F24nY/Scrum-Master-Certification.jpg"
                alt="Scrum-Master-Certification"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="9">
          <header>Responsive Web Design - 300 Hours</header>
          <article>
            <a href="https://ibb.co/NjSMD4H">
              <img
                src="https://i.ibb.co/d2gRChz/Responsive-Web-Design.jpg"
                alt="Responsive-Web-Design"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="10">
          <header>React.Js Webpack SASS</header>
          <article>
            <a href="https://ibb.co/1Mqg2wt">
              <img
                src="https://i.ibb.co/m0qjzMV/React-Js-Webpack-SASS.jpg"
                alt="React-Js-Webpack-SASS"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="11">
          <header>
            React Hooks and Firebase and-Material Design Fullstack Extreme
          </header>
          <article>
            <a href="https://ibb.co/HCXZkHd">
              <img
                src="https://i.ibb.co/7Qbh614/React-Hooks-and-Firebase-and-Material-Design-Fullstack-Extremo.jpg"
                alt="React-Hooks-and-Firebase-and-Material-Design-Fullstack-Extremo"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="12">
          <header>Developer 3.0 - 900 Hours</header>
          <article>
            <a href="https://ibb.co/PgQCR7y">
              <img
                src="https://i.ibb.co/4pdNc6L/Developer3-0.jpg"
                alt="Developer3-0"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="13">
          <header>Javascript Developer</header>
          <article>
            <a href="https://ibb.co/8BHQyc8">
              <img
                src="https://i.ibb.co/ZJ0bQmT/Java-Script-Developer.jpg"
                alt="Java-Script-Developer"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="14">
          <header>Agile,Scrum,Kanban & XP</header>
          <article>
            <a href="https://ibb.co/BfZp0mt">
              <img
                src="https://i.ibb.co/4FTqhc7/Principios-para-entender-y-aplicar-Agile-Scrum-Kanban-y-XP.jpg"
                alt="Principios-para-entender-y-aplicar-Agile-Scrum-Kanban-y-XP"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="15">
          <header>Modern Javascript from the Beginning</header>
          <article>
            <a href="https://ibb.co/hFxynsW">
              <img
                src="https://i.ibb.co/pj6xs2z/Modern-Javascript-from-the-Beginning.jpg"
                alt="Modern-Javascript-from-the-Beginning"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="16">
          <header>.Net Core Advance</header>
          <article>
            <a href="https://ibb.co/Y74wXn2">
              <img
                src="https://i.ibb.co/tMwFzjB/net-core-advance.jpg"
                alt="net-core-advance"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="17">
          <header>Modern HTML and CSS From the Beginning including Sass</header>
          <article>
            <a href="https://ibb.co/s3xBT2m">
              <img
                src="https://i.ibb.co/bdwf4PW/Modern-HTML-and-CSS-From-the-Beginning-including-Sass.jpg"
                alt="Modern-HTML-and-CSS-From-the-Beginning-including-Sass"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="18">
          <header>Microsoft SQL Server para Principiantes</header>
          <article>
            <a href="https://ibb.co/jwVKW9F">
              <img
                src="https://i.ibb.co/ZgHsYRC/Microsoft-SQL-Server-para-Principiantes.jpg"
                alt="Microsoft-SQL-Server-para-Principiantes"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="19">
          <header>
            Master FullStack Web Development Node SQL React and More
          </header>
          <article>
            <a href="https://ibb.co/MMq6cs3">
              <img
                src="https://i.ibb.co/qkb5NdP/Master-Full-Stack-Web-Development-Node-SQL-React-and-More.jpg"
                alt="Master-Full-Stack-Web-Development-Node-SQL-React-and-More"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="20">
          <header>
            Master in Emotional Intelligence and Soft Skill YPD Youth Potential
            Development
          </header>
          <article>
            <a href="https://ibb.co/4dbM8mp">
              <img
                src="https://i.ibb.co/wsnCS04/Master-en-Inteligencia-Emocional-y-Soft-Skill-YPD-Young-Potential-Development.jpg"
                alt="Master-en-Inteligencia-Emocional-y-Soft-Skill-YPD-Young-Potential-Development"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="21">
          <header>Leadership and Team Management Certified</header>
          <article>
            <a href="https://ibb.co/sPM9Ffg">
              <img
                src="https://i.ibb.co/DbSf7J1/Liderazgo-y-Gestion-de-equipos-certificado.jpg"
                alt="Liderazgo-y-Gestion-de-equipos-certificado"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="22">
          <header>Leadership and Team Management Advanced Level 2021</header>
          <article>
            <a href="https://ibb.co/c86pQYS">
              <img
                src="https://i.ibb.co/1XrpTzt/Liderazgo-y-Gestion-de-equipos-Nivel-Avanzado-2021.jpg"
                alt="Liderazgo-y-Gestion-de-equipos-Nivel-Avanzado-2021"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="23">
          <header>Leading Efficient Work Meetings</header>
          <article>
            <a href="https://ibb.co/cx0WhRx">
              <img
                src="https://i.ibb.co/wYVnh8Y/Liderando-Reuniones-Laborales-Eficientes.jpg"
                alt="Liderando-Reuniones-Laborales-Eficientes"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="24">
          <header>
            Legacy JavaScript Algorithms and Data Structures - 300 Hours
          </header>
          <article>
            <a href="https://ibb.co/TWVTqc4">
              <img
                src="https://i.ibb.co/Sfhx7Nt/Legacy-Java-Script-Algorithms-and-Data-Structures.jpg"
                alt="Legacy-Java-Script-Algorithms-and-Data-Structures"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="25">
          <header>Advanced JavaScript</header>
          <article>
            <a href="https://ibb.co/347rNSt">
              <img
                src="https://i.ibb.co/YP3Rkfv/Learn-Advanced-Java-Script.jpg"
                alt="Learn-Advanced-Java-Script"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="26">
          <header>JavaScript Esencial</header>
          <article>
            <a href="https://ibb.co/bJVZfsN">
              <img
                src="https://i.ibb.co/X8Pgw7F/Java-Script-esencial.jpg"
                alt="Java-Script-esencial"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="27">
          <header>Google Web Developer 2</header>
          <article>
            <a href="https://ibb.co/pvpZf7f">
              <img
                src="https://i.ibb.co/gMCwS2S/Google-Web-Developer-2.jpg"
                alt="Google-Web-Developer-2"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="28">
          <header>Google Web Developer 1</header>
          <article>
            <a href="https://imgbb.com/">
              <img
                src="https://i.ibb.co/xSJ4Zhr/Google-Web-Developer-1.jpg"
                alt="Google-Web-Developer-1"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="29">
          <header>
            Fundamentals of Project Management Leadership by Project Management
            Institute
          </header>
          <article>
            <a href="https://ibb.co/sJ26RdW">
              <img
                src="https://i.ibb.co/FqK03LH/Fundamentos-de-la-Gestion-de-Proyectos-Liderazgo-por-Project-Management-Institute.jpg"
                alt="Fundamentos-de-la-Gestion-de-Proyectos-Liderazgo-por-Project-Management-Institute"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="30">
          <header>Fundamentals of Project Management</header>
          <article>
            <a href="https://ibb.co/J7P8qN4">
              <img
                src="https://i.ibb.co/YkGJX6M/Fundamentos-de-la-Gerencia-de-Proyectos.jpg"
                alt="Fundamentos-de-la-Gerencia-de-Proyectos"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="31">
          <header>Software Engineering Fundamentals</header>
          <article>
            <a href="https://ibb.co/8KrFQ1y">
              <img
                src="https://i.ibb.co/bWspGc4/Software-engineering-fundamentals.jpg"
                alt="Software-engineering-fundamentals"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="32">
          <header>
            FrontEnd Development Liberaries Certification - 300 Hours
          </header>
          <article>
            <a href="https://ibb.co/jrJqrmf">
              <img
                src="https://i.ibb.co/rwdqwY0/Front-End-Development-Liberaries.jpg"
                alt="Front-End-Development-Liberaries"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="33">
          <header>
            Training to Dynamize Innovation Systems from the Public Sector
          </header>
          <article>
            <a href="https://ibb.co/w049PZW">
              <img
                src="https://i.ibb.co/X2thKfs/Training-to-Dynamize-Innovation-Systems-from-the-Public-Sector.jpg"
                alt="Training-to-Dynamize-Innovation-Systems-from-the-Public-Sector"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="34">
          <header>
            Blockchain and cryptocurrency school career - 500 Hours
          </header>
          <article>
            <a href="https://ibb.co/7Y4LQL8">
              <img
                src="https://i.ibb.co/bWJDFDq/Blockchain-and-cryptocurrency-school-career-500-Hours.jpg"
                alt="Blockchain-and-cryptocurrency-school-career-500-Hours"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="35">
          <header>Ethereum Developer Program - 300 Hours</header>
          <article>
            <a href="https://app.poap.xyz/token/5615611">
              <img
                src="https://i.ibb.co/DYKJfrx/Ethereum-Developer-Program.jpg"
                alt="Ethereum Developer Program"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="36">
          <header>
            Certificate Cybersecurity Awareness Cybersecurity Terminology
            Microsoft & Project Management Institute
          </header>
          <article>
            <a href="https://ibb.co/3FD7c0F">
              <img
                src="https://i.ibb.co/t274Db2/Certificate-Cybersecurity-Awareness-Cybersecurity-Terminology-Microsoft.jpg"
                alt="Certificate-Cybersecurity-Awareness-Cybersecurity-Terminology-Microsoft"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="37">
          <header>FullStack Web Developer</header>
          <article>
            <a href="https://ibb.co/ZhsY4Zg">
              <img
                src="https://i.ibb.co/XzB30w5/Full-Stack-Web-Developer.jpg"
                alt="Full-Stack-Web-Developer"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="38">
          <header>FullStack Blockchain Developer</header>
          <article>
            <a href="https://ibb.co/cNFz5yG">
              <img
                src="https://i.ibb.co/4jTByF6/Full-Stack-Blockchain-Developer.jpg"
                alt="Full-Stack-Blockchain-Developer"
                border="0"
              />
            </a>
          </article>
        </section>
        <section className="main-section" id="39">
          <header>Alchemy Certified Ethereum Developer</header>
          <article>
            <img
              src="https://i.ibb.co/n1S2mH0/Ethereum-Developer-Bootcamp.jpg"
              alt="Full-Stack-Blockchain-Developer"
              border="0"
            />
          </article>
        </section>
        <section className="main-section" id="39">
          <header style={{ marginBottom: "10px" }}>
            Road To Web 3 - FullStack Ethereum Developer{" "}
          </header>
          <article>
            <a href="https://testnets.opensea.io/collection/alchemyuniversity">
              OpenSea Collection
            </a>
            <p style={{ marginBottom: "90px" }}>
              <a href="https://docs.alchemy.com/docs/welcome-to-the-road-to-web3">
                https://docs.alchemy.com/docs/welcome-to-the-road-to-web3
              </a>
            </p>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Studies;
