import React, { useState } from 'react';
import './GalleryCarousel.css';
import carouselImage1 from "./Images/carousel1.png";
import carouselImage2 from "./Images/carousel2.png";

function GalleryCarousel() {
  const images = [
    carouselImage1, carouselImage2
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel-image-container">
        <img src={images[currentIndex]} alt={`carousel-${currentIndex}`} className="carousel-image" />
      </div>

      <button className="carousel-control prev" onClick={handlePrev}>
        &#10094; 
      </button>
      <button className="carousel-control next" onClick={handleNext}>
        &#10095; 
      </button>
    </div>
  );
}

export default GalleryCarousel;
