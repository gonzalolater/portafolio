import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    'https://opensea.io/assets/matic/0x60576a64851c5b42e8c57e3e4a5cf3cf4eeb2ed6/15055',
    'https://platzi.com/p/gonzalo-daniel-aguilar/ruta/39-blockchain-criptomonedas/diploma/detalle/',
    'https://www.linkedin.com/in/gonzalo-daniel-aguilar/details/certifications/',
    'https://www.linkedin.com/in/gonzalo-daniel-aguilar/details/education/'
    
  ];

  const Gallery = () => {
    return (
      <Carousel showThumbs={false} showStatus={false} showIndicators={false} interval={3000} stopOnHover={false}>
        <div>
          <img src={images[0]} alt="Proyecto 1" />
        </div>
        <div>
          <img src={images[1]} alt="Proyecto 2" />
        </div>
        <div>
          <img src={images[2]} alt="Proyecto 3" />
        </div>
        {/* Agrega más elementos <div> según la cantidad de imágenes */}
      </Carousel>
    );
  };
  
  export default Gallery;