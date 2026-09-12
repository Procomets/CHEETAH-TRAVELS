import React, { useRef, useEffect } from 'react';
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
  Award
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

  // Ensure video autoplays reliably across all modern browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Video autoplay prevented or deferred:', err);
      });
    }
  }, []);

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
      <section id="hero" aria-label="Yercaud Jeep Safari Hero" style={{ position: 'relative', background: '#070d0a' }}>
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
      </section>

      {/* =========================================================================
          2. SAFARI PACKAGES SECTION (TEMPLATE)
          ========================================================================= */}
      <PackagesTemplateSection />

      {/* =========================================================================
          3. PLACES TO VISIT SECTION
          ========================================================================= */}
      <section id="places" className="landing-section landing-section-alt">
        <div className="container">
          <div className="section-header-box">
            <h2 className="section-title-main">Top Places to Visit in Yercaud</h2>
            <p className="section-subtitle-desc">
              Explore panoramic cliff viewpoints, hidden streams, and sacred peak shrines accessible via our rugged 4x4 fleet.
            </p>
          </div>

          <div className="grid-4" style={{ gap: '1.5rem' }}>
            {placesData.map((place) => (
              <PlaceCardPlaceholder key={place.id} place={place} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. PHOTO GALLERY SECTION
          ========================================================================= */}
      <section id="gallery" className="landing-section">
        <div className="container">
          <div className="section-header-box">
            <h2 className="section-title-main">Safari Moments & Photo Gallery</h2>
            <p className="section-subtitle-desc">
              Glimpses of raw off-road action, winding mountain hairpin curves, dense coffee canopy corridors, and sunset cliffs.
            </p>
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
