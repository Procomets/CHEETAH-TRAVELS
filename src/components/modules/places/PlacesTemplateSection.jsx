import React from 'react';
import { Route, Users, ArrowRight, ArrowUp, Star } from 'lucide-react';
import '../../../styles/placesTemplate.css';

export const PlacesTemplateSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="places" className="places-template-section">
      <div className="places-template-container">
        
        {/* Left Column - Content */}
        <div className="pt-content-col">
          {/* Decorative Balloons (SVGs) */}
          <div className="pt-balloons">
             {/* Creating Hot Air Balloon SVG outlines */}
             <svg className="pt-balloon-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2c-4.42 0-8 3.58-8 8 0 5.4 7 12 8 12s8-6.6 8-12c0-4.42-3.58-8-8-8z"/>
                <path d="M9 21h6"/>
                <path d="M12 2v20"/>
                <path d="M6 10h12"/>
             </svg>
             <svg className="pt-balloon-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2c-4.42 0-8 3.58-8 8 0 5.4 7 12 8 12s8-6.6 8-12c0-4.42-3.58-8-8-8z"/>
                <path d="M9 21h6"/>
             </svg>
             <svg className="pt-balloon-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2c-4.42 0-8 3.58-8 8 0 5.4 7 12 8 12s8-6.6 8-12c0-4.42-3.58-8-8-8z"/>
                <path d="M9 21h6"/>
             </svg>
          </div>

          <div className="pt-eyebrow">Let's Go Together</div>
          <h2 className="pt-heading">
            <span>Plan Your Trip</span>
            <span>With us</span>
          </h2>
          <p className="pt-description">
            Explore the breathtaking views and highest peak points in Yercaud with Cheetah Travels Jeep Safari. An adventure through rugged mountain paths, lush greenery, and mesmerizing sunrise points. Book your unforgettable journey today!
          </p>

          <div className="pt-features">
            <div className="pt-feature-item">
              <div className="pt-feature-icon">
                <Route size={28} />
              </div>
              <div className="pt-feature-text">
                <h4>Exclusive Trip...</h4>
                <p>Experience a private and personalized adventure designed just for you!</p>
              </div>
            </div>

            <div className="pt-feature-item">
              <div className="pt-feature-icon">
                <Users size={28} />
              </div>
              <div className="pt-feature-text">
                <h4>Professional Guide</h4>
                <p>Our friendly and knowledgeable guides make your journey truly special.</p>
              </div>
            </div>
          </div>

          <a href="#packages" className="pt-btn-view-more">
            View More <ArrowRight size={18} />
          </a>
        </div>

        {/* Right Column - Images Collage */}
        <div className="pt-image-col">
          <div className="pt-images-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80" 
              alt="Mountain Peaks" 
              className="pt-img-1" 
            />
            <div className="pt-right-imgs">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80" 
                alt="Sunrise Hand" 
                className="pt-img-2" 
              />
              <img 
                src="https://images.unsplash.com/photo-1544413660-299165566b1d?auto=format&fit=crop&q=80" 
                alt="Valley Mist" 
                className="pt-img-3" 
              />
            </div>
          </div>

          {/* Floating Elements */}
          <div className="pt-rating-badge">
            <Star size={16} fill="currentColor" className="star" />
            <span className="score">4.9k</span>
          </div>

          <button onClick={scrollToTop} className="pt-scroll-btn" aria-label="Scroll to top">
            <ArrowUp size={24} />
          </button>
        </div>

      </div>
    </section>
  );
};
