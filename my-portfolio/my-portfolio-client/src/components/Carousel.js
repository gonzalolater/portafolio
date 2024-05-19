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
      link: 'https://www.linkedin.com/in/gonzalo-daniel-aguilar/details/experience/urn:li:fsd_profilePosition:(ACoAACfSHlcBueqUQJz1OGpE1E-k79RqsnYORXo,2173630008)/treasury/',
      image: 'https://i.ibb.co/FD7YG4j/Web-3-Pionner.jpg',
      alt: 'Web-3-Pionner',
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
  const footerStyle = {
    background: 'violet',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: '1px',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
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
        <h1>Some Achievements</h1>
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
      <>
        <footer style={footerStyle}>
          <h2>My Portfolio</h2>
        </footer>
      </>
    </div>
  );
};

export default Carousel;