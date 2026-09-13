import React, { useEffect, useState, useRef } from 'react';
import { getWhatsAppUrl } from '../../../utils/constants';
import { BookingButton } from '../../common/BookingButton';
import { packagesData } from '../../../data/packagesData';
import { 
  ArrowRight, 
  Map, 
  Car, 
  CheckCircle, 
  Play, 
  Camera, 
  Clock, 
  Award, 
  ShieldCheck, 
  Leaf,
  Users,
  Check,
  Star,
  Sun,
  Compass,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Heart
} from 'lucide-react';
import '../../../styles/packagesTemplate.css';

// Distinct Jeep Safari image sets for Half Day vs Full Day
const halfDayImages = [
  "/pkg-auto.jpg",
  "/pkg-car.jpg",
  "/pkg-jeep.jpg",
  "/pkg-big-jeep.jpg"
];

const fullDayImages = [
  "/pkg-auto.jpg",
  "/pkg-car.jpg",
  "/pkg-jeep.jpg",
  "/pkg-big-jeep.jpg"
];

const pkgBadges = [
  { label: 'Guest Favourite', icon: null },
  { label: 'Prime Pick', icon: Star },
  { label: 'Top Safari', icon: Award },
  { label: 'Bestseller', icon: Star }
];

const safariSteps = [
  {
    step: 1,
    tag: 'Step 01',
    title: 'Plan',
    desc: 'Pick a date and choose your preferred trail through scenic mountain passes.',
    icon: Map,
    progressReq: 0,
    mobileReq: 0
  },
  {
    step: 2,
    tag: 'Step 02',
    title: 'Select',
    desc: 'Select the jeep package that fits your group size and desired terrain.',
    icon: Car,
    progressReq: 25,
    mobileReq: 20
  },
  {
    step: 3,
    tag: 'Step 03',
    title: 'Confirm',
    desc: 'Book easily via WhatsApp and receive instant dispatch and driver details.',
    icon: CheckCircle,
    progressReq: 50,
    mobileReq: 45
  },
  {
    step: 4,
    tag: 'Step 04',
    title: 'Board',
    desc: 'Hop into your private 4x4 Thar or Gypsy from our hub or resort pickup.',
    icon: Play,
    progressReq: 75,
    mobileReq: 70
  },
  {
    step: 5,
    tag: 'Step 05',
    title: 'Enjoy',
    desc: 'Experience breathtaking 360° views, rocky trails, and authentic thrills.',
    icon: Camera,
    progressReq: 95,
    mobileReq: 88
  }
];

export const PackagesTemplateSection = () => {
  const timelineRef = useRef(null);
  const mobileTimelineRef = useRef(null);
  const pkgGridRef = useRef(null);
  const firstNodeRef = useRef(null);
  const lastNodeRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [mobileProgress, setMobileProgress] = useState(0);
  const [trackStyle, setTrackStyle] = useState({ top: 22, height: 440 });
  const [durationFilter, setDurationFilter] = useState('Half Day');
  const [activePackageIndex, setActivePackageIndex] = useState(0);
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePkgScroll = () => {
    if (!pkgGridRef.current) return;
    const { scrollLeft, offsetWidth } = pkgGridRef.current;
    const card = pkgGridRef.current.querySelector('.pkg-card');
    const cardWidth = card ? card.offsetWidth + 18 : offsetWidth * 0.85;
    const index = Math.round(scrollLeft / cardWidth);
    setActivePackageIndex(Math.max(0, Math.min(index, packagesData.length - 1)));
  };

  const scrollToPackage = (idx) => {
    if (!pkgGridRef.current) return;
    const cards = pkgGridRef.current.querySelectorAll('.pkg-card');
    if (cards[idx]) {
      cards[idx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActivePackageIndex(idx);
    }
  };

  const filteredPackages = packagesData;

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // Desktop horizontal progress
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const start = windowHeight * 0.8;
        const end = windowHeight * 0.3;
        let p = (start - rect.top) / (start - end);
        p = Math.max(0, Math.min(1, p));
        setProgress(p * 100);
      }

      // Mobile moving green line: strictly moves from Circle 1 to Circle 5
      if (firstNodeRef.current && lastNodeRef.current && mobileTimelineRef.current) {
        const containerRect = mobileTimelineRef.current.getBoundingClientRect();
        const firstRect = firstNodeRef.current.getBoundingClientRect();
        const lastRect = lastNodeRef.current.getBoundingClientRect();

        // Exact center of circle 1 and circle 5
        const startY = (firstRect.top - containerRect.top) + Math.round(firstRect.height / 2);
        const endY = (lastRect.top - containerRect.top) + Math.round(lastRect.height / 2);
        const totalDistance = Math.max(0, endY - startY);

        setTrackStyle((prev) => {
          const newTop = Math.round(startY);
          const newHeight = Math.round(totalDistance);
          if (prev.top === newTop && prev.height === newHeight) return prev;
          return { top: newTop, height: newHeight };
        });

        // Trigger boundaries: starts when Circle 1 enters 75% of screen;
        // reaches 100% (touches circle 5) when Circle 5 enters 80% of screen.
        const startTrigger = windowHeight * 0.75;
        const endTrigger = windowHeight * 0.80;

        let p = 0;
        if (totalDistance > 0) {
          if (lastRect.top <= endTrigger) {
            // Circle 5 is in view, green line touches Circle 5 directly!
            p = 1;
          } else if (firstRect.top >= startTrigger) {
            // Above the timeline
            p = 0;
          } else {
            // Smoothly move the green line down from 1 to 5 as you scroll down!
            const scrollRange = Math.max(1, totalDistance - (endTrigger - startTrigger));
            const scrolled = startTrigger - firstRect.top;
            p = scrolled / scrollRange;
          }
        }
        p = Math.max(0, Math.min(1, p));
        setMobileProgress(Math.round(p * 100));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();
    const t = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <section id="packages" className="pkg-template-section">
      {/* 1. Grid Section */}
      <div className="pkg-header">
        <h2 className="pkg-title">Jeep Safari Packages</h2>
        <p className="pkg-subtitle">
          Choose from curated half-day mountain loops to comprehensive full-day off-road circuits across Yercaud's private forest trails.
        </p>
      </div>

      <div className="pkg-filters">
        <div className="pkg-filter-group">
          <button 
            className={`pkg-filter-btn ${durationFilter === 'Half Day' ? 'active' : ''}`}
            onClick={() => setDurationFilter('Half Day')}
          >
            <Sun size={15} />
            <span>Half Day Trails</span>
          </button>
          <button 
            className={`pkg-filter-btn ${durationFilter === 'Full Day' ? 'active' : ''}`}
            onClick={() => setDurationFilter('Full Day')}
          >
            <Compass size={15} />
            <span>Full Day Expeditions</span>
          </button>
        </div>
      </div>

      {filteredPackages.length > 0 ? (
        <div className="pkg-carousel-wrapper">
          <div 
            className="pkg-grid" 
            ref={pkgGridRef} 
            onScroll={handlePkgScroll}
          >
            {filteredPackages.map((pkg) => {
              const isFavorited = !!favorites[pkg.id];
              const activeImages = durationFilter === 'Full Day' ? fullDayImages : halfDayImages;
              const pkgIndex = packagesData.findIndex(p => p.id === pkg.id);
              const cardImg = activeImages[pkgIndex % activeImages.length];

              return (
                <div className="pkg-card" key={pkg.id}>
                  {/* Image Container */}
                  <div className="pkg-card-img-wrapper">
                    <img 
                      src={cardImg} 
                      alt={pkg.title} 
                      className="pkg-card-img" 
                    />
                    
                    {/* Top Left Badge */}
                    <div className="pkg-pill-badge">
                      <Star size={13} className="pkg-badge-star" />
                      <span>{pkg.badge || 'Guest Favourite'}</span>
                    </div>

                    {/* Top Right Heart Action */}
                    <button 
                      type="button"
                      className={`pkg-favorite-btn ${isFavorited ? 'active' : ''}`} 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(pkg.id);
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
                      <h3 className="pkg-card-title">{pkg.title}</h3>
                      <div className="pkg-price-box">
                        <span className="pkg-price-amount">₹{pkg.prices[durationFilter].toLocaleString()}</span>
                        <span className="pkg-price-unit">/ safari</span>
                      </div>
                    </div>

                    <p className="pkg-card-desc">{pkg.subtitle}</p>

                    {/* Specs Bar (divided into 3 columns like reference image) */}
                    <div className="pkg-specs-bar">
                      <div className="pkg-spec-col">
                        <Clock size={14} />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="pkg-spec-divider"></div>
                      <div className="pkg-spec-col">
                        <Users size={14} />
                        <span>{pkg.capacity}</span>
                      </div>
                      <div className="pkg-spec-divider"></div>
                      <div className="pkg-spec-col">
                        <Car size={14} />
                        <span>{pkg.vehicle}</span>
                      </div>
                    </div>

                    {/* Highlight Tags Row */}
                    <div className="pkg-tags-row">
                      {pkg.highlights.slice(0, 2).map((hl, i) => (
                        <span className="pkg-pill-tag" key={i}>{hl}</span>
                      ))}
                      {pkg.highlights.length > 2 && (
                        <span className="pkg-pill-tag tag-more">+{pkg.highlights.length - 2}</span>
                      )}
                    </div>

                    {/* Full Width CTA Pill Button */}
                    <BookingButton 
                      message={`Hello Cheetah Travels, I would like to book the "${pkg.title}" package (${durationFilter}: ₹${pkg.prices[durationFilter]?.toLocaleString()} per jeep). Please confirm availability and details.`}
                      className="pkg-card-cta-btn"
                    >
                      <span>Book Safari</span>
                      <ArrowRight size={16} />
                    </BookingButton>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Carousel Indicators */}
          <div className="pkg-mobile-carousel-footer">
            <div className="pkg-carousel-dots">
              {filteredPackages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`pkg-carousel-dot ${idx === activePackageIndex ? 'active' : ''}`}
                  onClick={() => scrollToPackage(idx)}
                  aria-label={`View package ${idx + 1}`}
                />
              ))}
            </div>
            <span className="pkg-carousel-hint">Swipe to explore packages →</span>
          </div>
        </div>
      ) : (
        <div className="pkg-empty-state">
          <p>No safari packages currently available. Please try another duration filter.</p>
        </div>
      )}

      {/* 2. Timeline Section */}
      <div className="pkg-timeline-wrapper">
        <h2 className="pkg-timeline-title">A Smarter Way to Explore</h2>
        
        {/* =========================================================
            DESKTOP 5-STEP TIMELINE (> 768px)
            ========================================================= */}
        <div className="pkg-timeline pkg-desktop-timeline" ref={timelineRef}>
          <div className="pkg-timeline-track">
            <div 
              className="pkg-timeline-progress" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {safariSteps.map((s) => {
            const Icon = s.icon;
            const isActive = progress >= s.progressReq;
            return (
              <div className={`pkg-step ${isActive ? 'active' : ''}`} key={s.step}>
                <div className="pkg-step-icon-outer">
                  <div className="pkg-step-icon-inner">
                    <Icon size={24} />
                  </div>
                  <div className="pkg-step-number">{s.step}</div>
                </div>
                <div className="pkg-step-content">
                  <span className="pkg-step-num-pill">{s.tag}</span>
                  <h4 className="pkg-step-title">{s.title}</h4>
                  <p className="pkg-step-desc">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================
            MOBILE POINT-TO-POINT TIMELINE WITH SCROLLING LINE (<= 768px)
            ========================================================= */}
        <div className="pkg-mobile-timeline" ref={mobileTimelineRef}>
          {/* Vertical Background Track & Moving Green Line */}
          <div 
            className="pkg-m-track-line"
            style={{
              top: `${trackStyle.top}px`,
              height: `${trackStyle.height}px`
            }}
          >
            <div 
              className="pkg-m-progress-line" 
              style={{ height: `${mobileProgress}%` }}
            >
              {mobileProgress > 0 && mobileProgress < 98 && (
                <div className="pkg-m-pulse-dot" />
              )}
            </div>
          </div>

          <div className="pkg-m-steps-list">
            {safariSteps.map((s, idx) => {
              const Icon = s.icon;

              return (
                <div 
                  key={s.step} 
                  className="pkg-m-step-item"
                >
                  {/* Point / Milestone Node */}
                  <div className="pkg-m-node-wrap">
                    <div 
                      ref={idx === 0 ? firstNodeRef : idx === safariSteps.length - 1 ? lastNodeRef : null}
                      className="pkg-m-node"
                    >
                      <span className="pkg-m-num">{s.step}</span>
                    </div>
                  </div>

                  {/* Step Card */}
                  <div className="pkg-m-card">
                    <div className="pkg-m-card-header">
                      <span className="pkg-m-tag">{s.tag}</span>
                      <div className="pkg-m-icon-mini">
                        <Icon size={16} />
                      </div>
                    </div>
                    <h4 className="pkg-m-title">{s.title}</h4>
                    <p className="pkg-m-desc">{s.desc}</p>

                    {idx === 4 && (
                      <div className="pkg-m-action-wrap">
                        <BookingButton
                          message="Hello Cheetah Travels, I'm ready to book my Yercaud jeep safari! Please share availability and details."
                          className="pkg-m-cta-btn"
                        >
                          <span>Book Safari on WhatsApp</span>
                          <ArrowRight size={14} />
                        </BookingButton>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};
