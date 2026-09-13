import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Car
} from 'lucide-react';
import { galleryData } from '../../../data/galleryData';
import { BookingButton } from '../../common/BookingButton';
import '../../../styles/gallery.css';

const filterCategories = [
  { id: 'All', label: 'All Moments' },
  { id: 'Action', label: 'Off-Road Action' },
  { id: 'Viewpoint', label: 'Viewpoints' },
  { id: 'Nature', label: 'Waterfalls & Forest' },
  { id: 'Fleet', label: '4x4 Fleet' },
  { id: 'Trails', label: 'Private Trails' }
];

export const GalleryGridPlaceholder = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
  const [isLaptopView, setIsLaptopView] = useState(
    typeof window !== 'undefined' ? window.innerWidth > 900 : true
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLaptopView(window.innerWidth > 900);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const baseItems = isLaptopView 
    ? galleryData 
    : galleryData.filter((item) => !item.laptopOnly);

  const filteredItems = activeCategory === 'All'
    ? baseItems
    : baseItems.filter((item) => item.category === activeCategory);

  const currentPhoto = activePhotoIndex !== null ? filteredItems[activePhotoIndex] : null;

  const nextPhoto = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev + 1) % filteredItems.length);
  }, [activePhotoIndex, filteredItems.length]);

  const prevPhoto = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [activePhotoIndex, filteredItems.length]);

  const closeLightbox = useCallback(() => {
    setActivePhotoIndex(null);
  }, []);

  // Keyboard navigation & lock background scroll
  useEffect(() => {
    if (activePhotoIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activePhotoIndex, closeLightbox, nextPhoto, prevPhoto]);

  // Touch swipe support for mobile visiting
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextPhoto();
    } else if (diff < -45) {
      prevPhoto();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const getSpanClass = (spanClass) => {
    if (spanClass === 'bento-wide') return 'gallery-card-wide';
    if (spanClass === 'bento-tall') return 'gallery-card-tall';
    return 'gallery-card-square';
  };

  return (
    <div className="gallery-section-container">

      {/* Category Filter Chips */}
      <div className="gallery-filter-chips">
        {filterCategories.map((cat) => {
          const count = cat.id === 'All'
            ? baseItems.length
            : baseItems.filter((i) => i.category === cat.id).length;

          if (count === 0 && cat.id !== 'All') return null;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
                setActivePhotoIndex(null);
              }}
              className={`gallery-filter-chip ${activeCategory === cat.id ? 'active' : ''}`}
            >
              <span>{cat.label}</span>
              <span className="gallery-filter-count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredItems.map((item, index) => {
          return (
            <div
              key={item.id}
              className={`gallery-card ${getSpanClass(item.spanClass)} ${item.laptopOnly ? 'gallery-card-laptop-only' : ''}`}
              onClick={() => setActivePhotoIndex(index)}
              role="button"
              tabIndex={0}
              aria-label={`View photo: ${item.title}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="gallery-card-img" 
                loading="lazy" 
              />
              
              <div className="gallery-card-scrim">
                <div className="gallery-card-expand-icon" aria-hidden="true">
                  <Maximize2 size={18} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      {currentPhoto && (
        <div 
          className="gallery-lightbox-modal"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Lightbox Header */}
          <div className="gallery-lightbox-header" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-lightbox-meta">
              <span className="gallery-lightbox-counter">
                {activePhotoIndex + 1} / {filteredItems.length}
              </span>
              <span className="gallery-lightbox-tag">
                {currentPhoto.category}
              </span>
            </div>

            <button 
              type="button"
              onClick={closeLightbox} 
              className="gallery-lightbox-close-btn"
              aria-label="Close photo viewer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Lightbox Photo Stage */}
          <div className="gallery-lightbox-stage" onClick={(e) => e.stopPropagation()}>
            {filteredItems.length > 1 && (
              <button 
                type="button"
                onClick={prevPhoto} 
                className="gallery-lightbox-nav-btn gallery-lightbox-nav-prev"
                aria-label="Previous photo"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            <div className="gallery-lightbox-photo-wrap" key={currentPhoto.id}>
              <img 
                src={currentPhoto.image} 
                alt={currentPhoto.title} 
                className="gallery-lightbox-photo" 
              />
            </div>

            {filteredItems.length > 1 && (
              <button 
                type="button"
                onClick={nextPhoto} 
                className="gallery-lightbox-nav-btn gallery-lightbox-nav-next"
                aria-label="Next photo"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>

          {/* Lightbox Bottom Footer */}
          <div className="gallery-lightbox-footer" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-lightbox-details">
              <div className="gallery-lightbox-info">
                <h2 className="gallery-lightbox-title">{currentPhoto.title}</h2>
                <p className="gallery-lightbox-caption">{currentPhoto.caption}</p>
              </div>

              <BookingButton
                message={`Hello Cheetah Travels, I was viewing your photo gallery and fell in love with "${currentPhoto.title}" (${currentPhoto.caption}). Can you organize a safari to this location?`}
                className="gallery-lightbox-book-btn"
              >
                <Car size={16} />
                <span>Book Safari For This Spot</span>
              </BookingButton>
            </div>

            {/* Thumbnail Strip to Jump to Any Photo */}
            <div className="gallery-lightbox-strip">
              {filteredItems.map((thumb, idx) => (
                <button
                  key={thumb.id}
                  type="button"
                  onClick={() => setActivePhotoIndex(idx)}
                  className={`gallery-lightbox-thumb ${idx === activePhotoIndex ? 'active' : ''}`}
                  aria-label={`Jump to photo ${idx + 1}`}
                >
                  <img src={thumb.image} alt={thumb.title} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
