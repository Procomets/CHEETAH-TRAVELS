import React from 'react';
import { Heart, ArrowLeft, ArrowRight } from 'lucide-react';
import { placesData } from '../../../data/placesData';
import '../../../styles/placeCard.css';

export const PlaceCardPlaceholder = ({ place }) => {
  const index = placesData.findIndex(p => p.id === place.id) + 1;
  
  // Generating dots for rating
  const renderDots = () => {
    const dots = [];
    for (let i = 1; i <= 5; i++) {
      dots.push(
        <span key={i} className={`pc-dot ${i <= Math.round(place.rating) ? 'filled' : ''}`}>●</span>
      );
    }
    return dots;
  };

  return (
    <div className="pc-card">
      <div className="pc-image-wrapper">
        <img src={place.image} alt={place.name} className="pc-image" />
        <button className="pc-heart-btn" aria-label="Save">
          <Heart size={18} />
        </button>
        <div className="pc-carousel-arrows">
          <button className="pc-arrow"><ArrowLeft size={16} /></button>
          <button className="pc-arrow"><ArrowRight size={16} /></button>
        </div>
        <div className="pc-carousel-dots">
          <span className="pc-carousel-dot active"></span>
          <span className="pc-carousel-dot"></span>
          <span className="pc-carousel-dot"></span>
          <span className="pc-carousel-dot"></span>
        </div>
      </div>
      
      <div className="pc-content">
        <h3 className="pc-title">{index}. {place.name}</h3>
        
        <div className="pc-rating-row">
          <span className="pc-rating-score">{place.rating}</span>
          <div className="pc-rating-dots">{renderDots()}</div>
          <span className="pc-rating-count">({place.ratingCount})</span>
        </div>
        
        <div className="pc-category">{place.category}</div>
        
        <div className="pc-divider"></div>
        
        <div className="pc-review">
          <img src={place.reviewAvatar} alt={place.reviewAuthor} className="pc-review-avatar" />
          <div className="pc-review-content">
            <span className="pc-review-author">By {place.reviewAuthor}</span>
            <p className="pc-review-text">{place.reviewText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
