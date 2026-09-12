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
  Compass
} from 'lucide-react';
import '../../../styles/packagesTemplate.css';

// Jeep Safari images for the grid mapping
const pkgImages = [
  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
];

const pkgBadges = [
  { label: 'Guest Favourite', icon: null },
  { label: 'Prime Pick', icon: Star },
  { label: 'Top Safari', icon: Award },
  { label: 'Bestseller', icon: Star }
];

export const PackagesTemplateSection = () => {
  const timelineRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [durationFilter, setDurationFilter] = useState('Half Day');

  const filteredPackages = packagesData;

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight * 0.8;
      const end = windowHeight * 0.3;
      
      let p = (start - rect.top) / (start - end);
      p = Math.max(0, Math.min(1, p));
      setProgress(p * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
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
        <div className="pkg-grid">
          {filteredPackages.map((pkg) => {
            return (
              <div className="pkg-card" key={pkg.id}>
                {/* Image Container */}
                <div className="pkg-card-img-wrapper">
                  <img 
                    src={pkgImages[packagesData.findIndex(p => p.id === pkg.id) % pkgImages.length]} 
                    alt={pkg.title} 
                    className="pkg-card-img" 
                  />
                  
                  {/* Top Left Badge */}
                  <div className="pkg-pill-badge">
                    <Star size={13} className="pkg-badge-star" />
                    <span>{pkg.badge || 'Guest Favourite'}</span>
                  </div>

                  {/* Top Right Heart Action */}
                  <button className="pkg-favorite-btn" aria-label="Favorite Safari">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
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
      ) : (
        <div className="pkg-empty-state">
          <p>No safari packages currently available. Please try another duration filter.</p>
        </div>
      )}

      {/* 2. Timeline Section */}
      <div className="pkg-timeline-wrapper">
        <h2 className="pkg-timeline-title">A Smarter Way to Explore</h2>
        
        <div className="pkg-timeline" ref={timelineRef}>
          <div className="pkg-timeline-track">
            <div className="pkg-timeline-progress" style={{ width: `${progress}%` }}></div>
          </div>

          {/* Step 1 */}
          <div className={`pkg-step ${progress >= 0 ? 'active' : ''}`}>
            <div className="pkg-step-icon-outer">
              <div className="pkg-step-icon-inner">
                <Map size={28} />
              </div>
              <div className="pkg-step-number">1</div>
            </div>
            <h4 className="pkg-step-title">Plan</h4>
            <p className="pkg-step-desc">Pick a date and choose your preferred trail.</p>
          </div>

          {/* Step 2 */}
          <div className={`pkg-step ${progress >= 25 ? 'active' : ''}`}>
            <div className="pkg-step-icon-outer">
              <div className="pkg-step-icon-inner">
                <Car size={28} />
              </div>
              <div className="pkg-step-number">2</div>
            </div>
            <h4 className="pkg-step-title">Select</h4>
            <p className="pkg-step-desc">Select the jeep package that fits your group size.</p>
          </div>

          {/* Step 3 */}
          <div className={`pkg-step ${progress >= 50 ? 'active' : ''}`}>
            <div className="pkg-step-icon-outer">
              <div className="pkg-step-icon-inner">
                <CheckCircle size={28} />
              </div>
              <div className="pkg-step-number">3</div>
            </div>
            <h4 className="pkg-step-title">Confirm</h4>
            <p className="pkg-step-desc">Book easily via WhatsApp and receive details.</p>
          </div>

          {/* Step 4 */}
          <div className={`pkg-step ${progress >= 75 ? 'active' : ''}`}>
            <div className="pkg-step-icon-outer">
              <div className="pkg-step-icon-inner">
                <Play size={28} />
              </div>
              <div className="pkg-step-number">4</div>
            </div>
            <h4 className="pkg-step-title">Board</h4>
            <p className="pkg-step-desc">Hop into your private 4x4 from our hub or resort.</p>
          </div>

          {/* Step 5 */}
          <div className={`pkg-step ${progress >= 95 ? 'active' : ''}`}>
            <div className="pkg-step-icon-outer">
              <div className="pkg-step-icon-inner">
                <Camera size={28} />
              </div>
              <div className="pkg-step-number">5</div>
            </div>
            <h4 className="pkg-step-title">Enjoy</h4>
            <p className="pkg-step-desc">Experience breathtaking views and off-road thrills.</p>
          </div>
        </div>
      </div>

    </section>
  );
};
