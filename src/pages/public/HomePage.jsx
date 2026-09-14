import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarCheck,
  MapPin,
  ShieldCheck,
  Truck,
  Route as RouteIcon,
  CheckCircle,
  Star,
  Clock,
  Users,
  Award,
  ArrowRight,
  Sparkles,
  Mountain,
  Car,
  ChevronRight
} from 'lucide-react';
import ScrollExpand from '../../components/modules/hero/ScrollExpand';
import { packagesData } from '../../data/packagesData';
import { placesData } from '../../data/placesData';
import { reviewsData } from '../../data/reviewsData';
import { PackagesTemplateSection } from '../../components/modules/packages/PackagesTemplateSection';
import { PlaceCardPlaceholder } from '../../components/modules/places/PlaceCardPlaceholder';
import { GalleryGridPlaceholder } from '../../components/modules/gallery/GalleryGridPlaceholder';
import { ContactFormPlaceholder } from '../../components/modules/contact/ContactFormPlaceholder';
import { ReviewCardPlaceholder } from '../../components/modules/reviews/ReviewCardPlaceholder';
import { Card, CardBody } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { CONTACT_INFO, getWhatsAppUrl } from '../../utils/constants';
import { BookingButton } from '../../components/common/BookingButton';

export const HomePage = () => {
  const videoRef = useRef(null);

  const [placeCategory, setPlaceCategory] = useState('All');
  const [activePlaceId, setActivePlaceId] = useState(placesData[0]?.id || 'rose-garden');

  const filterSpots = (cat) => {
    return placesData.filter((p) => {
      if (cat === 'All') return true;
      const c = p.category.toLowerCase();
      if (cat === 'Viewpoints') return c.includes('cliff') || c.includes('view') || c.includes('seat') || c.includes('sunset');
      if (cat === 'Gardens') return c.includes('garden') || c.includes('eco') || c.includes('flora') || c.includes('farm');
      if (cat === 'Sacred') return c.includes('temple') || c.includes('sacred') || c.includes('peak');
      if (cat === 'Lakes & Falls') return c.includes('lake') || c.includes('falls') || c.includes('waterfall') || c.includes('drive');
      return true;
    });
  };

  const filteredPlaces = filterSpots(placeCategory);
  const activePlace = placesData.find((p) => p.id === activePlaceId) || filteredPlaces[0] || placesData[0];

  const handleCategoryChange = (cat) => {
    setPlaceCategory(cat);
    const matched = filterSpots(cat);
    if (matched.length > 0 && !matched.some(p => p.id === activePlaceId)) {
      setActivePlaceId(matched[0].id);
    }
  };

  // Ensure video autoplays reliably across all modern browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Video autoplay prevented or deferred:', err);
      });
    }
  }, []);

  const autoScrollTimeoutRef = useRef(null);

  const handleHeroAnimationComplete = () => {
    if (autoScrollTimeoutRef.current) return;

    autoScrollTimeoutRef.current = setTimeout(() => {
      const packagesSection = document.getElementById('packages');
      if (packagesSection) {
        packagesSection.scrollIntoView({ behavior: 'smooth' });
      }
      autoScrollTimeoutRef.current = null;
    }, 1000); // Waits 1 second after animation completes before moving to next section
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navbarOffset = 70;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="home-page-container">
      {/* =========================================================================
          1. HERO SECTION (Full-Screen Video Background with 35% Edge Blur)
          ========================================================================= */}
      <section id="hero" aria-label="Yercaud Jeep Safari Hero" style={{ position: 'relative', background: '#000000' }}>
        <ScrollExpand
          src="https://res.cloudinary.com/dmu8jxozw/video/upload/Jeep_climbing_mountain_drone_view_202609081919_gwr_video_mvp.mp4"
          mediaType="video"
          title="Welcome to Yercaud"
          useWindowScroll={true}
          startWidth={42}
          startHeight={58}
          startRadius={24}
          endRadius={0}
          mediaZoom={1.35}
          scrollDistance={3.0}
          holdDistance={0.35}
          smoothing={0.1}
          overlayScrim={0.45}
          enabled={true}
          onComplete={handleHeroAnimationComplete}
        >
          {/* Hero Center Content */}
          <div className="hero-content-inner">
            {/* Main Heading */}
            <h1 className="hero-main-title">
              <span className="welcome-line">CHEETAH TRAVELS</span>
              <span className="safari-line">YERCAUD JEEP SAFARI</span>
            </h1>

            {/* Supporting Text */}
            <p className="hero-supporting-text">
              Explore the unseen, experience Yercaud
            </p>

            {/* Action Buttons */}
            <div className="hero-actions-group">
              <BookingButton
                message="Hello Cheetah Travels, I would like to book a Yercaud Jeep Safari."
                className="btn-hero-primary"
              >
                <CalendarCheck size={18} />
                <span>BOOK YOUR SAFARI</span>
              </BookingButton>
            </div>
          </div>
        </ScrollExpand>

        {/* Mobile-only white fade at the bottom to blend seamlessly into the next section */}
        <div className="hero-mobile-fade-bottom"></div>
      </section>

      {/* =========================================================================
          2. SAFARI PACKAGES SECTION (TEMPLATE)
          ========================================================================= */}
      <PackagesTemplateSection />

      {/* =========================================================================
          3. PLACES TO VISIT SECTION
          ========================================================================= */}
      <section id="places" className="landing-section landing-section-alt places-section-wrap">
        <div className="container">
          <div className="section-header-box places-header-box">
            <div className="places-header-text">
              <h2 className="section-title-main">Top Places to Visit in Yercaud</h2>
              <p className="section-subtitle-desc">
                Explore panoramic cliff viewpoints, hidden streams, and sacred peak shrines accessible via our rugged 4x4 fleet.
              </p>
            </div>
          </div>

          {/* =========================================================
              MOBILE INTERACTIVE SPOTLIGHT SHOWCASE (<= 768px)
              ========================================================= */}
          <div className="places-mobile-spotlight">

            {/* 1. Large Hero Spotlight Card */}
            <div className="places-spotlight-card" key={activePlace.id}>
              <img 
                src={activePlace.image} 
                alt={activePlace.name} 
                className="places-spotlight-img" 
              />
              <div className="places-spotlight-overlay">
                {/* Top Badge Row */}
                <div className="places-spotlight-top">
                  <span className="places-spotlight-badge">
                    <Sparkles size={13} />
                    <span>{activePlace.category}</span>
                  </span>

                  <div className="places-spotlight-rating">
                    <Star size={13} fill="#fbbf24" color="#fbbf24" />
                    <span>{activePlace.rating}</span>
                    {activePlace.ratingCount && (
                      <span className="places-spotlight-count">({activePlace.ratingCount})</span>
                    )}
                  </div>
                </div>

                {/* Bottom Details & CTAs */}
                <div className="places-spotlight-bottom">
                  {activePlace.elevation && (
                    <div className="places-spotlight-elevation">
                      <Mountain size={13} />
                      <span>{activePlace.elevation}</span>
                    </div>
                  )}

                  <h3 className="places-spotlight-title">{activePlace.name}</h3>

                  <p className="places-spotlight-desc">
                    {activePlace.description}
                  </p>

                  <div className="places-spotlight-actions">
                    <BookingButton 
                      message={`Hello Cheetah Travels, I would like to book a jeep safari to visit "${activePlace.name}" (${activePlace.elevation ? activePlace.elevation : activePlace.category}). Please share details and pricing.`}
                      className="places-spotlight-book-btn"
                    >
                      <Car size={16} />
                      <span>Book Safari</span>
                    </BookingButton>

                    <Link to="/places" className="places-spotlight-info-btn">
                      <span>Explore</span>
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Mini Thumbnails Row */}
            <div className="places-thumbnails-header">
              <span className="places-thumbnails-title">Tap to switch destination ({filteredPlaces.length}):</span>
              <span className="places-thumbnails-counter">Active: {activePlace.name}</span>
            </div>

            <div className="places-thumbnails-scroll">
              {filteredPlaces.map((p, idx) => {
                const isSelected = p.id === activePlace.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActivePlaceId(p.id)}
                    className={`places-thumb-card ${isSelected ? 'active' : ''}`}
                    aria-label={`View ${p.name}`}
                  >
                    <img src={p.image} alt={p.name} className="places-thumb-img" loading="lazy" />
                    <div className="places-thumb-overlay">
                      <span className="places-thumb-num">#{idx + 1}</span>
                      <span className="places-thumb-name">{p.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <Link to="/places" className="places-mobile-view-all-btn">
              <span>View All {placesData.length} Destinations</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* =========================================================
              DESKTOP GRID (> 768px)
              ========================================================= */}
          <div className="places-desktop-container">

            <div className="places-grid">
              {filteredPlaces.map((place) => (
                <div className="places-card-col" key={place.id}>
                  <PlaceCardPlaceholder place={place} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. PHOTO GALLERY SECTION
          ========================================================================= */}
      <section id="gallery" className="landing-section gallery-section-wrap">
        <div className="container">
          <div className="section-header-box">
            <h2 className="section-title-main">Safari Moments & Photo Gallery</h2>
          </div>

          <GalleryGridPlaceholder />
        </div>
      </section>

      {/* =========================================================================
          5. ABOUT US SECTION (Preserved for future use)
          ========================================================================= */}
      {/*
      <section id="about" className="creative-about-section">
        <div className="about-hero-container">
          <div className="about-bg-mountain" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80')" }}></div>

          <div className="about-giant-text">JEEP</div>

          <div className="about-content-wrapper">
            <div className="about-history-text">HISTORY</div>
            <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80" alt="Jeep Safari Edition" className="about-jeep-img" />
            <div className="about-vertical-text">MAHINDRA 4X4 THAR <br /> <span style={{ fontSize: '0.5em' }}>EXPLORER EDITION</span></div>
          </div>

          <div className="about-divider"></div>
        </div>
      </section>
      */}

      {/* =========================================================================
          6. REVIEWS & TESTIMONIALS SECTION
          ========================================================================= */}
      <section id="reviews" className="landing-section landing-section-alt">
        <div className="container">
          <div className="section-header-box">
            <h2 className="section-title-main">What Travelers Say About Our Safaris</h2>
            <p className="section-subtitle-desc">
              Real stories and experiences from guests who explored Yercaud with Cheetah Travels.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '1.25rem' }}>
            {reviewsData.map((rev) => (
              <ReviewCardPlaceholder key={rev.id} review={rev} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
