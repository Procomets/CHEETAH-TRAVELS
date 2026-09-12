import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Menu, X, CalendarCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../../../utils/constants';
import { BookingButton } from '../../common/BookingButton';

export const HeroNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Home', targetId: 'hero' },
    { label: 'Safari Packages', targetId: 'packages' },
    { label: 'Places to Visit', targetId: 'places' },
    { label: 'Gallery', targetId: 'gallery' },
    { label: 'About Us', targetId: 'about' },
    { label: 'Contact', targetId: 'contact' }
  ];

  // Detect scroll to style the navbar and highlight active section
  useEffect(() => {
    const handleScroll = () => {
      // Toggle dark blur background when scrolled past 60px
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for link indicator
      const scrollPos = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.targetId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.targetId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarOffset,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    } else {
      window.location.href = `/#${targetId}`;
    }
  };

  return (
    <nav className={`hero-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="hero-navbar-inner">
          {/* Left Brand */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="hero-brand"
          >

            <span className="hero-brand-text">
              <span className="brand-cheetah">CHEETAH</span>
              <span className="brand-travels">TRAVELS</span>
            </span>
          </a>

          {/* Desktop Navigation Links (Smooth Scroll on Same Page) */}
          <ul className="hero-nav-links">
            {navItems.map((item) => (
              <li key={item.targetId}>
                <a
                  href={`#${item.targetId}`}
                  onClick={(e) => scrollToSection(e, item.targetId)}
                  className={`hero-nav-link ${
                    activeSection === item.targetId ? 'active' : ''
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Main CTA -> WhatsApp */}
          <div className="hero-nav-cta">
            <BookingButton
              message="Hello Cheetah Travels, I would like to book a Yercaud Jeep Safari."
              className="btn-hero-cta"
            >
              <CalendarCheck size={16} />
              <span>BOOK NOW</span>
            </BookingButton>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="hero-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`hero-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="hero-mobile-links">
          {navItems.map((item) => (
            <li key={item.targetId}>
              <a
                href={`#${item.targetId}`}
                className={`hero-mobile-link ${
                  activeSection === item.targetId ? 'active' : ''
                }`}
                onClick={(e) => scrollToSection(e, item.targetId)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <BookingButton
          message="Hello Cheetah Travels, I would like to book a Yercaud Jeep Safari."
          className="btn-hero-cta"
          style={{ width: '220px', fontSize: '1rem', padding: '0.9rem' }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <CalendarCheck size={18} />
          <span>BOOK NOW</span>
        </BookingButton>
      </div>
    </nav>
  );
};
