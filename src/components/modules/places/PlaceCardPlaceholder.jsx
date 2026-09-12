import React, { useState } from 'react';
import { Heart, ChevronRight } from 'lucide-react';
import '../../../styles/placeCard.css';

export const PlaceCardPlaceholder = ({ place }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="pc-card">
      {/* Full Background Image */}
      <img src={place.image} alt={place.name} className="pc-bg-image" />

      {/* Dark Scrim Overlay */}
      <div className="pc-scrim-overlay">
        {/* Top Right Heart Action Button */}
        <button 
          className={`pc-favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          aria-label="Save Place"
        >
          <Heart size={16} fill={isFavorite ? '#ef4444' : 'none'} color={isFavorite ? '#ef4444' : '#ffffff'} />
        </button>

        {/* Bottom Content Area */}
        <div className="pc-bottom-content">
          {/* Title & Category/Meta info */}
          <h3 className="pc-title">{place.name}</h3>
          <p className="pc-subtitle">
            {place.elevation ? `${place.elevation} • ` : ''}{place.category}
          </p>

          {/* Full Width Glass Capsule CTA Button */}
          <div className="pc-cta-glass-btn">
            <span>Explore Spot</span>
            <ChevronRight size={16} className="pc-cta-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};
