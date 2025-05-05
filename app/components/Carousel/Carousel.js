import React, { useState } from 'react';

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
        <img 
          src={images[currentIndex]} 
          alt={`Property image ${currentIndex + 1}`} 
          className="carousel-image"
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
          <img 
            key={index}
            src={image} 
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;