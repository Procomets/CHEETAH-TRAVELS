import React, { useState } from 'react';
import { Clock, Users, Car, Star, Heart, ArrowRight } from 'lucide-react';
import { BookingButton } from '../../common/BookingButton';
import '../../../styles/packagesTemplate.css';

const defaultImages = {
  'sunrise-peak': "/pkg-auto.jpg",
  'deep-forest-adventure': "/pkg-car.jpg",
  'yercaud-grand-circuit': "/pkg-jeep.jpg",
  'sunset-night-trail': "/pkg-big-jeep.jpg"
};

export const PackageCardPlaceholder = ({ item }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const imgUrl = item.image || defaultImages[item.id] || "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80";
  const displayPrice = typeof item.price === 'number' 
    ? item.price 
    : (item.prices?.['Half Day'] || item.prices?.['Full Day'] || 1500);

  return (
    <div className="pkg-card">
      {/* Image Container */}
      <div className="pkg-card-img-wrapper">
        <img src={imgUrl} alt={item.title} className="pkg-card-img" />
        
        {/* Top Left Badge */}
        <div className="pkg-pill-badge">
          <Star size={13} className="pkg-badge-star" />
          <span>{item.badge || 'Guest Favourite'}</span>
        </div>

        {/* Top Right Heart Action */}
        <button 
          type="button"
          className={`pkg-favorite-btn ${isFavorited ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorited(!isFavorited);
          }}
          aria-label="Favorite Safari"
        >
          <Heart 
            size={16} 
            fill={isFavorited ? '#ef4444' : 'none'} 
            color={isFavorited ? '#ef4444' : '#64748b'} 
            strokeWidth={2.4} 
          />
        </button>
      </div>

      {/* Content Details */}
      <div className="pkg-card-content">
        <div className="pkg-card-header-row">
          <h3 className="pkg-card-title">{item.title}</h3>
          <div className="pkg-price-box">
            <span className="pkg-price-amount">₹{displayPrice.toLocaleString()}</span>
            <span className="pkg-price-unit">/ safari</span>
          </div>
        </div>

        <p className="pkg-card-desc">{item.subtitle}</p>

        {/* Specs Bar (divided into 3 columns) */}
        <div className="pkg-specs-bar">
          <div className="pkg-spec-col">
            <Clock size={14} />
            <span>{item.duration}</span>
          </div>
          <div className="pkg-spec-divider"></div>
          <div className="pkg-spec-col">
            <Users size={14} />
            <span>{item.capacity}</span>
          </div>
          <div className="pkg-spec-divider"></div>
          <div className="pkg-spec-col">
            <Car size={14} />
            <span>{item.vehicle || 'Jeep'}</span>
          </div>
        </div>

        {/* Highlight Tags Row */}
        <div className="pkg-tags-row">
          {item.highlights?.slice(0, 2).map((hl, i) => (
            <span className="pkg-pill-tag" key={i}>{hl}</span>
          ))}
          {item.highlights?.length > 2 && (
            <span className="pkg-pill-tag tag-more">+{item.highlights.length - 2}</span>
          )}
        </div>

        {/* Full Width CTA Pill Button */}
        <BookingButton 
          message={`Hello Cheetah Travels, I would like to book the "${item.title}" package. Please confirm availability and details.`}
          className="pkg-card-cta-btn"
        >
          <span>Book Safari</span>
          <ArrowRight size={16} />
        </BookingButton>
      </div>
    </div>
  );
};

