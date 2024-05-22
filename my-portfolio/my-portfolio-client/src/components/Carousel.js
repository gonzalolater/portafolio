import React, { useState } from 'react';

const Carousel = () => {
  const carouselImages = [
    {
      link: 'https://explorer.perawallet.app/asset/1224136065/',
      image: 'https://i.ibb.co/VWkS2qw/Algorand-Developer-Intermediate.jpg',
      alt: 'Algorand-Developer-Intermediate',
    },
    {
      link: 'https://github.com/gonzalolater/SLATs',
      image: 'https://i.ibb.co/cXsvdnq/Algorand-Hacker-House.jpg',
      alt: 'Algorand-Hacker-House',
    },
    {
      link: 'https://www.credential.net/a6ffc766-14a5-40ed-a577-2058c927d0e8#gs.91d9x9',
      image: 'https://i.ibb.co/6NxMQwr/De-Fi-Developer-Intermediate.jpg',
      alt: 'De-Fi-Developer-Intermediate',
    },
    {
      link: 'https://opensea.io/assets/matic/0x60576a64851c5b42e8c57e3e4a5cf3cf4eeb2ed6/15055',
      image: 'https://i.ibb.co/n1S2mH0/Ethereum-Developer-Bootcamp.jpg',
      alt: 'Ethereum-Developer-Bootcamp',
    },
    {
      link: 'https://app.poap.xyz/token/5615611 ',
      image: 'https://i.ibb.co/DYKJfrx/Ethereum-Developer-Program.jpg',
      alt: 'Ethereum-Developer-Program',
    },
    {
      link: 'https://www.credential.net/c2e73721-d285-4687-9b61-791c35721f84#gs.91ctka',
      image: 'https://i.ibb.co/FHcCTWL/Polygon-Developer-Advance.jpg',
      alt: 'Polygon-Developer-Advance',
    },
    {
      link: 'https://www.freecodecamp.org/GonzaloDanielAguilar',
      image: 'https://i.ibb.co/hV1Q79p/Responsive-Web-Design.jpg',
      alt: 'FreeCodeCamp.Org',
    },
    {
      link: 'https://www.freecodecamp.org/GonzaloDanielAguilar',
      image: 'https://i.ibb.co/3d3fqd2/Front-End-Development-Liberaries.jpg',
      alt: 'FreeCodeCamp.Org',
    },
    {
      link: 'https://www.freecodecamp.org/GonzaloDanielAguilar',
      image: 'https://i.ibb.co/DfkmHwJ/Legacy-Java-Script-Algorithms-and-Data-Structures.jpg',
      alt: 'FreeCodeCamp.Org',
    },
    {
      link: 'https://learndigital.withgoogle.com/link/1nur091p2ww',
      image: 'https://i.ibb.co/3Yz3PJJ/google-titulo.jpg',
      alt: 'Google Desarrollo Web 1',
    },
    {
      link: 'https://learndigital.withgoogle.com/link/1nur091p2ww',
      image: 'https://i.ibb.co/rZyKMmT/google-titulo-2.jpg',
      alt: 'Google Desarrollo Web 2',
    },
    {
      link: 'https://docs.alchemy.com/docs/welcome-to-the-road-to-web3',
      image: 'https://i.ibb.co/0nBYn7Z/Built-a-Decentralized-Application.jpg',
      alt: 'Built a Decentralized Application',
    },
    {
      link: 'https://docs.alchemy.com/docs/welcome-to-the-road-to-web3',
      image: 'https://i.ibb.co/dJ5vGcY/Developed-an-on-chain-turn-based-game.jpg',
      alt: 'Developed an on-chain turn-based game',
    },
    {
      link: 'https://docs.alchemy.com/docs/welcome-to-the-road-to-web3',
      image: 'https://i.ibb.co/XkfXjGM/Deployed-an-NFT-smart-contract.jpg',
      alt: 'Deployed an NFT smart contract',
    },
    {
      link: 'https://docs.alchemy.com/docs/welcome-to-the-road-to-web3',
      image: 'https://i.ibb.co/TtWQgK5/Deployed-a-Web-App-with-Lens-API.jpg',
      alt: 'Deployed a Web App with Lens API',
    },
    {
      link: 'https://docs.alchemy.com/docs/welcome-to-the-road-to-web3',
      image: 'https://i.ibb.co/fCKKLpd/Deployed-a-betting-game-on-Optimism-L2.jpg',
      alt: 'Deployed a betting game on Optimism L2',
    },
    {
      link: 'https://docs.alchemy.com/docs/welcome-to-the-road-to-web3',
      image: 'https://i.ibb.co/51KQpfD/Built-Smart-Contracts-using-Chainlink.jpg',
      alt: 'Built Smart Contracts using Chainlink',
    },
    {
      link: 'https://docs.alchemy.com/docs/welcome-to-the-road-to-web3',
      image: 'https://i.ibb.co/f9bVpmn/Built-complex-Blockchain-applications-using-Alchemy.jpg',
      alt: 'Built complex Blockchain applications using Alchemy',
    },
    {
      link: 'https://docs.alchemy.com/docs/welcome-to-the-road-to-web3',
      image: 'https://i.ibb.co/xDPqdPX/Built-an-ERC20-staking-application.jpg',
      alt: 'Built an ERC20 staking application',
    },
    {
      link: 'https://docs.alchemy.com/docs/welcome-to-the-road-to-web3',
      image: 'https://i.ibb.co/qyp4dz7/Built-a-Token-Swap-Dapp-with-0x-API.jpg',
      alt: 'Built a Token Swap Dapp with 0x API',
    },
    {
      link: 'https://docs.alchemy.com/docs/welcome-to-the-road-to-web3',
      image: 'https://i.ibb.co/c26MRVD/Built-a-full-stack-dapp-for-buying-selling-NFTs.jpg',
      alt: 'Built a full stack dapp for buying & selling NFTs',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    minHeight: '82vh',
    position: 'relative',
    marginTop: '30px',
  };

  const messageElementStyle = {
    width: '100%',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'violet',
    color: '#FFFFFF',
    fontSize: '10px',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const carouselStyle = {
    position: 'relative',
    width: '100%',
    height: '70vh',
    overflow: 'hidden',
    marginBottom: '20px',
  };

  const imageContainerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    display: 'block',
  };

  const galleryStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const thumbnailStyle = {
    width: '50px',
    height: '50px',
    margin: '0 5px',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  const buttonContainerStyle = {
    position: 'absolute',
    top: -1,
    right: 0,
    padding: '20px',
    display: 'flex',
    justifyContent: 'flex-end',
  };

  const buttonStyle = {
    marginTop: '-12px',
    background: 'violet',
    border: 'none',
    color: 'white',
    padding: '15px 16px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '0 10px',
    cursor: 'pointer',
    borderRadius: '5px'
    ,
  };

  const navigate = (direction) => {
    const newIndex = direction === 'next' ? currentImageIndex + 1 : currentImageIndex - 1;
    const adjustedIndex = (newIndex + carouselImages.length) % carouselImages.length;

    setCurrentImageIndex(adjustedIndex);
  };

  const changeImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleClickButton = () => {
    alert('CLICK IMAGE PLEASE !!!'); 
  };
  
  return (
    <div style={containerStyle}>
      <div style={messageElementStyle}>
        <h1>Some Achievements - Carousel </h1>
      </div>
      <div style={carouselStyle}>
        <div style={imageContainerStyle}>
          <a href={carouselImages[currentImageIndex].link}>
            <img
              src={carouselImages[currentImageIndex].image}
              alt={carouselImages[currentImageIndex].alt}
              style={imageStyle}
            />
          </a>
        </div>
        <div style={galleryStyle}>
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image.image}
              alt={image.alt}
              style={thumbnailStyle}
              onClick={() => changeImage(index)}
            />
          ))}
        </div>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={() => navigate('prev')}>
            previous
          </button>
          <button style={buttonStyle} onClick={() => navigate('next')}>
            next
          </button>
          <button style={buttonStyle} onClick={handleClickButton}>
            -click images-
            </button> 
        </div>
      </div>
    </div>
  );
};

export default Carousel;