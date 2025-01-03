import React from 'react';

const Studies = () => {
  const courses = [
    { id: "39", title: "Alchemy Certified Ethereum Developer - 400 Hours", imgSrc: "https://i.ibb.co/n1S2mH0/Ethereum-Developer-Bootcamp.jpg", link: ""},
    { id: "9", title: "Responsive Web Design - 300 Hours", imgSrc: "https://i.ibb.co/d2gRChz/Responsive-Web-Design.jpg", link: "https://ibb.co/NjSMD4H" },
    { id: "35", title: "Ethereum Developer Program - 300 Hours", imgSrc: "https://i.ibb.co/DYKJfrx/Ethereum-Developer-Program.jpg", link: "https://app.poap.xyz/token/5615611" },
    { id: "40", title: "Road to Web 3 - 500 hours", imgSrc:"https://i.ibb.co/NsLkmFW/road-to-web-3.png", link:"https://docs.alchemy.com/docs/welcome-to-the-road-to-web3"},
    { id: "20", title: "Master in Emotional Intelligence and Soft Skill YPD Youth Potential Development", imgSrc: "https://i.ibb.co/wsnCS04/Master-en-Inteligencia-Emocional-y-Soft-Skill-YPD-Young-Potential-Development.jpg", link: "https://ibb.co/4dbM8mp" },
    { id: "12", title: "Developer 3.0 - 900 Hours", imgSrc: "https://i.ibb.co/4pdNc6L/Developer3-0.jpg", link: "https://ibb.co/PgQCR7y" },
    { id: "1", title: "Visual Studio Code", imgSrc: "https://i.ibb.co/1d7K2d2/Visual-Studio-Code.jpg", link: "https://ibb.co/D8zkK8K" },
    { id: "2", title: "Time Management Mastery Do More Stress Less", imgSrc: "https://i.ibb.co/fFR70nF/Time-Management-Mastery-Do-More-Stress-Less.jpg", link: "https://ibb.co/vq58zQq" },
    { id: "3", title: "Time Management and Productivity Mastery", imgSrc: "https://i.ibb.co/VW0sZdw/Time-Management-and-Productivity-Mastery.jpg", link: "https://ibb.co/7Jxq5Hk" },
    { id: "4", title: "Microsoft - The Cybersecurity Threat Landscape.", imgSrc: "https://i.ibb.co/6Zc3jBW/The-Cybersecurity-Threat-Landscape.jpg", link: "https://ibb.co/j59cnRr" },
    { id: "5", title: "Smart Tips Manager as Coach", imgSrc: "https://i.ibb.co/fdNCbKC/Smart-Tips-Manager-as-Coach.jpg", link: "https://ibb.co/5hj5dz5" },
    { id: "6", title: "Smart Tips Leadership", imgSrc: "https://i.ibb.co/wrgxcbV/Smart-Tips-Leadership.jpg", link: "https://ibb.co/Kzh3KQd" },
    { id: "7", title: "Smart Tips Communication", imgSrc: "https://i.ibb.co/P1qswMP/Smart-Tips-Communication.jpg", link: "https://ibb.co/ygHmWpZ" },
    { id: "8", title: "Scrum Master Certification", imgSrc: "https://i.ibb.co/x1F24nY/Scrum-Master-Certification.jpg", link: "https://ibb.co/QPDJ5Wk" },
    { id: "10", title: "React.Js Webpack SASS", imgSrc: "https://i.ibb.co/m0qjzMV/React-Js-Webpack-SASS.jpg", link: "https://ibb.co/1Mqg2wt" },
    { id: "11", title: "React Hooks and Firebase and-Material Design Fullstack Extreme", imgSrc: "https://i.ibb.co/7Qbh614/React-Hooks-and-Firebase-and-Material-Design-Fullstack-Extremo.jpg", link: "https://ibb.co/HCXZkHd" },
    { id: "13", title: "Javascript Developer", imgSrc: "https://i.ibb.co/ZJ0bQmT/Java-Script-Developer.jpg", link: "https://ibb.co/8BHQyc8" },
    { id: "14", title: "Agile, Scrum, Kanban & XP", imgSrc: "https://i.ibb.co/4FTqhc7/Principios-para-entender-y-aplicar-Agile-Scrum-Kanban-y-XP.jpg", link: "https://ibb.co/BfZp0mt" },
    { id: "15", title: "Modern Javascript from the Beginning", imgSrc: "https://i.ibb.co/pj6xs2z/Modern-Javascript-from-the-Beginning.jpg", link: "https://ibb.co/hFxynsW" },
    { id: "16", title: ".Net Core Advance", imgSrc: "https://i.ibb.co/tMwFzjB/net-core-advance.jpg", link: "https://ibb.co/Y74wXn2" },
    { id: "17", title: "Modern HTML and CSS From the Beginning including Sass", imgSrc: "https://i.ibb.co/bdwf4PW/Modern-HTML-and-CSS-From-the-Beginning-including-Sass.jpg", link: "https://ibb.co/s3xBT2m" },
    { id: "18", title: "Microsoft SQL Server para Principiantes", imgSrc: "https://i.ibb.co/ZgHsYRC/Microsoft-SQL-Server-para-Principiantes.jpg", link: "https://ibb.co/jwVKW9F" },
    { id: "19", title: "Master FullStack Web Development Node SQL React and More", imgSrc: "https://i.ibb.co/qkb5NdP/Master-Full-Stack-Web-Development-Node-SQL-React-and-More.jpg", link: "https://ibb.co/MMq6cs3" },
    { id: "21", title: "Leadership and Team Management Certified", imgSrc: "https://i.ibb.co/DbSf7J1/Liderazgo-y-Gestion-de-equipos-certificado.jpg", link: "https://ibb.co/sPM9Ffg" },
    { id: "22", title: "Leadership and Team Management Advanced Level 2021", imgSrc: "https://i.ibb.co/1XrpTzt/Liderazgo-y-Gestion-de-equipos-Nivel-Avanzado-2021.jpg", link: "https://ibb.co/c86pQYS" },
    { id: "23", title: "Leading Efficient Work Meetings", imgSrc: "https://i.ibb.co/wYVnh8Y/Liderando-Reuniones-Laborales-Eficientes.jpg", link: "https://ibb.co/cx0WhRx" },
    { id: "24", title: "Legacy JavaScript Algorithms and Data Structures - 300 Hours", imgSrc: "https://i.ibb.co/Sfhx7Nt/Legacy-Java-Script-Algorithms-and-Data-Structures.jpg", link: "https://ibb.co/TWVTqc4" },
    { id: "25", title: "Advanced JavaScript", imgSrc: "https://i.ibb.co/YP3Rkfv/Learn-Advanced-Java-Script.jpg", link: "https://ibb.co/347rNSt" },
    { id: "26", title: "JavaScript Esencial", imgSrc: "https://i.ibb.co/X8Pgw7F/Java-Script-esencial.jpg", link: "https://ibb.co/bJVZfsN" },
    { id: "27", title: "Google Web Developer 2", imgSrc: "https://i.ibb.co/gMCwS2S/Google-Web-Developer-2.jpg", link: "https://ibb.co/pvpZf7f" },
    { id: "28", title: "Google Web Developer 1", imgSrc: "https://i.ibb.co/xSJ4Zhr/Google-Web-Developer-1.jpg", link: "https://imgbb.com/" },
    { id: "29", title: "Fundamentals of Project Management Leadership by Project Management Institute", imgSrc: "https://i.ibb.co/FqK03LH/Fundamentos-de-la-Gestion-de-Proyectos-Liderazgo-por-Project-Management-Institute.jpg", link: "https://ibb.co/sJ26RdW" },
    { id: "30", title: "Fundamentals of Project Management", imgSrc: "https://i.ibb.co/YkGJX6M/Fundamentos-de-la-Gerencia-de-Proyectos.jpg", link: "https://ibb.co/J7P8qN4" },
    { id: "31", title: "Software Engineering Fundamentals", imgSrc: "https://i.ibb.co/bWspGc4/Software-engineering-fundamentals.jpg", link: "https://ibb.co/8KrFQ1y" },
    { id: "32", title: "FrontEnd Development Liberaries Certification - 300 Hours", imgSrc: "https://i.ibb.co/rwdqwY0/Front-End-Development-Liberaries.jpg", link: "https://ibb.co/jrJqrmf" },
    { id: "34", title: "Blockchain and cryptocurrency school career - 500 Hours", imgSrc: "https://i.ibb.co/bWJDFDq/Blockchain-and-cryptocurrency-school-career-500-Hours.jpg", link: "https://ibb.co/7Y4LQL8" },
    { id: "36", title: "Certificate Cybersecurity Awareness Cybersecurity Terminology Microsoft & Project Management Institute", imgSrc: "https://i.ibb.co/t274Db2/Certificate-Cybersecurity-Awareness-Cybersecurity-Terminology-Microsoft.jpg", link: "https://ibb.co/3FD7c0F" },
    { id: "37", title: "FullStack Web Developer", imgSrc: "https://i.ibb.co/XzB30w5/Full-Stack-Web-Developer.jpg", link: "https://ibb.co/ZhsY4Zg" },
    { id: "38", title: "FullStack Blockchain Developer", imgSrc: "https://i.ibb.co/4jTByF6/Full-Stack-Blockchain-Developer.jpg", link: "https://ibb.co/cNFz5yG" },
    { id: "33", title: "Training to Dynamize Innovation Systems from the Public Sector", imgSrc: "https://i.ibb.co/X2thKfs/Training-to-Dynamize-Innovation-Systems-from-the-Public-Sector.jpg", link: "https://ibb.co/w049PZW" },
  ];
  
  const renderContent = (item) => {
    if (item.imgSrc) {
      return (
        <img
        style={{ display: 'block', margin: '0 auto' }}
        src={item.imgSrc}
          alt={item.title}
          border="0"
        />
      );
    } else if (item.link) {
      // Wrap the link in a span and apply inline styles for centering
      return (
        <span style={{ display: 'block', textAlign: 'center' }}>
          <a href={item.link}>{item.title}</a>
        </span>
      );
    } else {
      return null;
    }
  };

  return (
    <main id="studies-List" style={{ marginTop: "50px" }}>
      {courses.map((item) => (
        <section className="main-section" id={item.id} key={item.id}>
          <header style={{ textAlign: 'center' }}>
            <h2>{item.title}</h2>
          </header>
          <article>{renderContent(item)}</article>
        </section>
      ))}
    </main>
  );
};

export default Studies;