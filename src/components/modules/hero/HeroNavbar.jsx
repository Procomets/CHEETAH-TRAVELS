import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroNavbar = () => {
  return (
    <header className="top-black-ribbon">
      <div className="container">
        <div className="ribbon-inner">
          {/* Logo on the left */}
          <Link to="/" className="ribbon-logo-link" aria-label="Cheetah Travels Home">
            <img
              src="/Cheetah Travels.svg"
              alt="Cheetah Travels"
              className="ribbon-logo-img"
            />
          </Link>
          {/* Phone call hyperlink on the right */}
          <a href="tel:+917538843075" className="ribbon-phone-link">
            <Phone size={16} color="#ffffff" className="ribbon-phone-icon" />
            <span>+91 75388 43075</span>
          </a>
        </div>
      </div>
    </header>
  );
};
