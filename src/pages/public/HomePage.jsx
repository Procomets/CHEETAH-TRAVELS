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
      <section id="hero" className="hero-viewport" aria-label="Yercaud Jeep Safari Hero">
        {/* Top Fixed / Transparent Navigation */}
        <HeroNavbar />

        {/* Full-Screen Background Video with 35% Edge Blur on all 4 Edges */}
        <div className="hero-video-container">
          <video
            ref={videoRef}
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source
              src="https://res.cloudinary.com/dmu8jxozw/video/upload/Jeep_climbing_mountain_drone_view_202609081919.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 background video.
          </video>

          {/* Base dark cinematic gradient overlay */}
          <div className="hero-overlay" />

          {/* 35% Edge Border Radius Blur Frame on all 4 edges */}
          <div className="hero-edge-blur-frame" />
        </div>

        {/* Hero Center Content */}
        <div className="hero-content-wrapper">
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
            <div className="about-vertical-text">MAHINDRA 4X4 THAR <br/> <span style={{fontSize:'0.5em'}}>EXPLORER EDITION</span></div>
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
          <div className="about-bottom-grid">
            <div className="about-text-content">
              <h3 className="about-bottom-title">WHY WE EXPLORE</h3>
              <p className="about-bottom-desc">
                Yercaud Jeep Safari was born from a passion for the pristine, untamed wilderness of the Eastern Ghats. While typical tourists only see the crowded commercial spots, our custom 4x4 safaris lead you through hidden ridge lines, private 19th-century coffee estates, and ancient tribal forest corridors.
              </p>
              <p className="about-bottom-desc">
                Every drive is handled by certified native drivers who know every boulder, stream crossing, and misty cliff edge. Safety, environmental preservation, and raw mechanical adventure are our core promises.
              </p>
            </div>
            <div className="about-bottom-image-wrap">
              <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80" alt="Mud Splashing 4x4" className="about-bottom-img" />
            </div>
          </div>

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
          6. CONTACT & PICKUP DESK SECTION
          ========================================================================= */}
      <section id="contact" className="landing-section contact-section-creative">
        <div className="container">
          <div className="section-header-box">
            <h2 className="section-title-main">Contact Our Safari Hub</h2>
            <p className="section-subtitle-desc">
              Book private group safaris, customize your trail itinerary, or request direct pickup from your Yercaud resort.
            </p>
          </div>

          <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <Card className="contact-card-creative">
                <CardBody>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '1.25rem' }}>Safari Boarding & Operations Hub</h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', fontSize: '0.95rem' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <MapPin size={20} color="var(--color-primary-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong>Main Desk & Boarding Area:</strong>
                        <p style={{ color: 'var(--text-muted)', margin: 0 }}>{CONTACT_INFO.address}</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <CalendarCheck size={20} className="pulse-icon-creative" color="var(--color-primary-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong>Booking Hotline:</strong>
                        <p style={{ color: 'var(--text-muted)', margin: 0 }}>{CONTACT_INFO.phone} (Direct WhatsApp Support)</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <Clock size={20} color="var(--color-primary-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong>Safari Departure Timings:</strong>
                        <p style={{ color: 'var(--text-muted)', margin: 0 }}>{CONTACT_INFO.operatingHours}</p>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                    <BookingButton
                      message="Hello Cheetah Travels, I would like to book a Yercaud Jeep Safari."
                      className="btn btn-primary"
                      style={{ width: '100%' }}
                    >
                      <CalendarCheck size={18} />
                      <span>Book on WhatsApp (99406 25630)</span>
                    </BookingButton>
                  </div>
                </CardBody>
              </Card>

              {/* Quick Info Box */}
              <div className="quick-info-creative" style={{ background: 'var(--color-primary-50)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-primary-100)', color: 'var(--color-primary-900)' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Resort Pickup Available
                </h4>
                <p style={{ fontSize: '0.85rem', margin: 0, lineHeight: '1.5' }}>
                  Staying at Sterling, GRT Nature Trails, Grand Palace, or any local homestay in Yercaud? Our driver pilots can pick you up directly at your resort lobby.
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. FOOTER COMPONENT (Bottom of Page)
          ========================================================================= */}
      <Footer />
    </div>
  );
};
