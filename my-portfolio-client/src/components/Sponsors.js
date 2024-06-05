import React from 'react';

const Sponsors = () => {
  return (
    <div style={{
        marginTop: '110px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <h1>Sponsors</h1>
      <h2 style={{color: 'red', margin:'20px'}}>I would like to thank the following companies for their support in my professional training:</h2>
      <div className="sponsors" style={{ margin:'20px', display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "10px", marginBottom: '90px', justifyContent: "center"}}>
        <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer">
          <img src="https://i.ibb.co/bKsmcph/Microsoft.jpg" alt="Microsoft" style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "100%", height: "auto", objectFit: "cover" }}/>
        </a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <img src="https://i.ibb.co/PFZQTrN/Google.jpg" alt="Google" style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
        </a>
        <a href="https://www.alchemy.com/university" target="_blank" rel="noopener noreferrer">
        <img src="https://i.ibb.co/T0JkZXL/Alchemy-University.jpg" alt="Alchemy University" style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
        </a>
        <a href="https://www.platzi.com" target="_blank" rel="noopener noreferrer">
          <img src="https://i.ibb.co/3MZLFsY/Platzi.jpg" alt="Platzi" style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="https://i.ibb.co/ynyw105/Linkedin.jpg" alt="Linkedin" style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
        </a>
        <a href="https://www.freecodecamp.org" target="_blank" rel="noopener noreferrer">
          <img src="https://i.ibb.co/1fMfpML/Free-Code-Camp.jpg" alt="FreeCodeCamp" style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
        </a>
        <a href="https://www.calyptus.co/" target="_blank" rel="noopener noreferrer">
          <img src="https://i.ibb.co/D8m80VL/Calyptus.jpg" alt="Calyptus" style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "100%", height: "auto", objectFit: "cover" }}/>
        </a>
        <a href="https://www.fundaciontelefonica.com.ar/" target="_blank" rel="noopener noreferrer">
          <img src="https://i.ibb.co/DRxP1hj/Telefonica.jpg" alt="Telefonica" style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "100%", height: "auto", objectFit: "cover" }}/>
        </a>
        <a href="https://www.harvard.edu/" target="_blank" rel="noopener noreferrer">
          <img src="https://i.ibb.co/qW0vkdK/Harvard1.jpg" alt="Hardvard" style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
        </a>
        <a href="https://www.algorand.foundation/" target="_blank" rel="noopener noreferrer">
        <img src="https://i.ibb.co/Bw1vhpn/Algorand.jpg" alt="Algorand Fundations" style={{display: "block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
        </a>
        <a href="https://openai.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://i.ibb.co/fMf7tMr/OpenAI.jpg" alt="OpenAi" style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "100%", height: "auto", objectFit: "cover" }}/>
        </a>
        <a href="https://www.pmi.org/" target="_blank" rel="noopener noreferrer">
          <img src="https://i.ibb.co/tXX5v52/Project-Management-Institute.jpg" alt="Project Management Institute" style={{display: "block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
        </a>
        <a href="https://101blockchains.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://i.ibb.co/LPq5FtK/101-Block-Chains.jpg" alt="101 BlockChains" style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
        </a>
        <a href="https://mumuki.io/home/" target="_blank" rel="noopener noreferrer">
          <img src="https://i.ibb.co/bQqzgJH/Mumuki.jpg" alt="Mumuki" style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
        </a>
        <a href="https://azure.microsoft.com/en-us/" target="_blank" rel="noopener noreferrer">
          <img src="https://i.ibb.co/PM2RqSz/Microsoft-Azure.jpg" alt="Azure" style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "100%", height: "auto", objectFit: "cover" }}/>
        </a>
      </div>
    </div>
  );
}

export default Sponsors;