import React, { useState } from 'react';
import Image from 'next/image';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  if (!images || images.length === 0) {
    return <div className="carousel-placeholder">No images available</div>;
  }
  
  return (
    <div className="carousel">
      <div className="carousel-container">
        <Image 
          src={images[currentIndex]} 
          alt={`Property image ${currentIndex + 1}`} 
          className="carousel-image"
          width={500}
          height={300}
        />
        
        <button className="carousel-button prev" onClick={handlePrev}>❮</button>
        <button className="carousel-button next" onClick={handleNext}>❯</button>
        
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <span 
              key={index} 
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
      
      <div className="carousel-thumbnails">
        {images.map((image, index) => (
          <Image 
            key={index}
            src={image} 
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            width={100}
            height={60}
            onClick={() => setCurrentIndex(index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;