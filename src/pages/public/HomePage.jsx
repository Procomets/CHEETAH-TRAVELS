import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarCheck,
  Compass,
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
import { HeroNavbar } from '../../components/modules/hero/HeroNavbar';
import ScrollExpand from '../../components/modules/hero/ScrollExpand';
import GlowCursor from '../../components/modules/interactive/GlowCursor';
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
import { Footer } from '../../components/layout/Footer';
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
        {/* Top Fixed / Transparent Navigation */}
        <HeroNavbar />

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
          <div className="hero-content-wrapper" style={{ position: 'relative', zIndex: 10 }}>
            {/* Main Heading */}
            <h1 className="hero-main-title">
              <span className="highlight-line">CHEETAH</span>
              <span className="safari-line">TRAVELS</span>
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

              <button
                type="button"
                onClick={() => scrollToSection('packages')}
                className="btn-hero-secondary"
              >
                <Compass size={18} />
                <span>EXPLORE YERCAUD</span>
              </button>
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

          <div className="grid-3" style={{ gap: '1.5rem' }}>
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
          ANIMATED MARQUEE DIVIDER
          ========================================================================= */}
      <div className="animated-gap-marquee">
        <div className="marquee-content">
          <span>EXPERIENCE YERCAUD OFF-ROAD</span>
          <span>BOOK YOUR SAFARI TODAY</span>
          <span>12 YEARS MOUNTAIN EXPERTISE</span>
          <span>CONQUER THE HIDDEN TRAILS</span>
          <span>EXPERIENCE YERCAUD OFF-ROAD</span>
          <span>BOOK YOUR SAFARI TODAY</span>
          <span>12 YEARS MOUNTAIN EXPERTISE</span>
          <span>CONQUER THE HIDDEN TRAILS</span>
        </div>
      </div>

      {/* =========================================================================
          5. ABOUT US SECTION
          ========================================================================= */}
      <section id="about" className="creative-about-section">
        <div className="about-hero-container">
          <div className="about-bg-mountain" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80')" }}></div>

          <div className="about-giant-text">JEEP</div>

          <div className="about-content-wrapper">
            <div className="about-history-text">HISTORY</div>
            <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80" alt="Jeep Safari Edition" className="about-jeep-img" />
            <div className="about-vertical-text">MAHINDRA 4X4 THAR <br /> <span style={{ fontSize: '0.5em' }}>EXPLORER EDITION</span></div>
          </div>

          <div className="about-sub-badge">12 YR MOUNTAIN EXPERTISE</div>
          <div className="about-cta">
            <BookingButton
              message="Hello Cheetah Travels, I would like to book a Yercaud Jeep Safari."
              className="btn btn-primary"
            >
              TAKE THE RIDE
            </BookingButton>
          </div>

          <div className="about-divider"></div>
        </div>

        <div className="about-content-bottom container">

          {/* Testimonials within About */}
          <div style={{ marginTop: '5rem' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>
              What Travelers Say About Our Safaris
            </h3>
            <div className="grid-3" style={{ gap: '1.25rem' }}>
              {reviewsData.map((rev) => (
                <ReviewCardPlaceholder key={rev.id} review={rev} />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          INTERACTIVE GAP (Glow Cursor)
          ========================================================================= */}
      <div style={{ position: 'relative', width: '100%', height: '400px', background: '#070d0a', overflow: 'hidden' }}>
        <GlowCursor
          color="#F97316"
          secondaryColor="#000000"
          trailLength={29}
          trailWidth={8}
          trailTaper={0.7}
          followSpeed={0.4}
          glowIntensity={1.9}
          glowSpread={1.2}
          hotspot={0.47}
          brightness={1.25}
          opacity={1}
          pulseSpeed={2.2}
          noiseStrength={0.035}
          idleFade={false}
          idleTimeout={700}
          fadeDuration={1200}
          blendMode="screen"
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', zIndex: 10, position: 'relative' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '1rem', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '2px' }}>
              REVEAL THE UNSEEN TRAILS
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>
              Hover over the darkness to explore.
            </p>
          </div>
        </GlowCursor>
      </div>

      {/* =========================================================================
          7. FOOTER COMPONENT (Bottom of Page)
          ========================================================================= */}
      <Footer />
    </div>
  );
};
