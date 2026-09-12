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
  Check
} from 'lucide-react';
import '../../../styles/packagesTemplate.css';

// Jeep Safari images for the grid mapping
const pkgImages = [
  "https://5.imimg.com/data5/SELLER/Default/2026/2/584527915/KF/EX/JG/1698931/greaves-auto-rickshaw-500x500.png", // Auto
  "/pkg-car.jpg", // Car
  "/pkg-jeep.jpg", // Jeep
  "/pkg-big-jeep.jpg"  // Big Jeep
];

const pkgIcons = [Camera, Car, Map, Clock];

export const PackagesTemplateSection = () => {
  const timelineRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const [durationFilter, setDurationFilter] = useState('Half Day');

  // Currently displaying all 4 packages under both tabs as requested
  const filteredPackages = packagesData;

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start animation when timeline is in lower half of screen
      const start = windowHeight * 0.8;
      // End animation when timeline reaches upper third of screen
      const end = windowHeight * 0.3;
      
      let p = (start - rect.top) / (start - end);
      p = Math.max(0, Math.min(1, p));
      setProgress(p * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="packages" className="pkg-template-section">
      {/* 1. Grid Section */}
      <div className="pkg-header">
        <h2 className="pkg-title">JEEP SAFARI PACKAGES</h2>
      </div>

      <div className="pkg-filters">
        <div className="pkg-filter-group">
          <button 
            className={`pkg-filter-btn ${durationFilter === 'Half Day' ? 'active' : ''}`}
            onClick={() => setDurationFilter('Half Day')}
          >
            Half Day
          </button>
          <button 
            className={`pkg-filter-btn ${durationFilter === 'Full Day' ? 'active' : ''}`}
            onClick={() => setDurationFilter('Full Day')}
          >
            Full Day
          </button>
        </div>
      </div>

      {filteredPackages.length > 0 ? (
        <div className="pkg-grid">
          {filteredPackages.map((pkg, index) => {
            const Icon = pkgIcons[index % pkgIcons.length];
            return (
              <div className="pkg-card" key={pkg.id}>
                <div className="pkg-card-img-wrapper">
                  <img 
                    src={pkgImages[packagesData.findIndex(p => p.id === pkg.id) % pkgImages.length]} 
                    alt={pkg.title} 
                    className="pkg-card-img" 
                  />
                  <div className="pkg-card-icon">
                    <Icon size={20} />
                  </div>
                </div>
                <div className="pkg-card-content">
                  <div className="pkg-card-meta-header">
                    <span className="pkg-price">₹{pkg.prices[durationFilter].toLocaleString()}</span>
                  </div>
                  <h3 className="pkg-card-title">{pkg.title}</h3>
                  <p className="pkg-card-desc">{pkg.subtitle}</p>
                  
                  <div className="pkg-meta-row">
                    <span className="pkg-meta-item"><Car size={14} /> {pkg.vehicle}</span>
                    <span className="pkg-meta-item"><Clock size={14} /> {pkg.duration}</span>
                    <span className="pkg-meta-item"><Users size={14} /> {pkg.capacity}</span>
                  </div>

                  <ul className="pkg-highlights-list">
                    {pkg.highlights.slice(0, 3).map((hl, i) => (
                      <li key={i}><Check size={14} className="pkg-check-icon" /> {hl}</li>
                    ))}
                  </ul>

                  <BookingButton 
                    message={`Hello, I'm interested in the ${pkg.title} package.`}
                    className="pkg-card-link"
                  >
                    Book Now <ArrowRight size={16} />
                  </BookingButton>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="pkg-empty-state">
          <p>No safari packages currently available for {timeFilter} - {durationFilter}. Please try another combination.</p>
        </div>
      )}

      {/* 2. Timeline Section */}
      <div className="pkg-timeline-wrapper">
        <span className="pkg-timeline-eyebrow">How It Works</span>
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
