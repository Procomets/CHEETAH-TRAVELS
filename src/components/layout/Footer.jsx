import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../../utils/constants';
import { BookingButton } from '../common/BookingButton';

export const Footer = () => {
  return (
    <footer className="site-footer">
      {/* Mountain Landscape Image on top */}
      <div className="footer-banner-wrapper">
        <img 
          src="/footer-bg.jpg" 
          alt="Yercaud Safari Mountain Landscape" 
          className="footer-banner-img" 
        />
      </div>

      {/* Plain Dark Content Area for text */}
      <div className="footer-content-area">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: Quick Links */}
            <div className="footer-column">
              <h4 className="footer-column-title">Quick Links</h4>
              <div className="footer-title-underline"></div>
              <ul className="footer-links">
                <li><Link to="/packages" className="footer-link">Safari Packages</Link></li>
                <li><Link to="/places" className="footer-link">Places to Visit</Link></li>
                <li><Link to="/routes" className="footer-link">Off-Road Routes</Link></li>
                <li><Link to="/gallery" className="footer-link">Photo Gallery</Link></li>
                <li><Link to="/reviews" className="footer-link">Customer Reviews</Link></li>
              </ul>
            </div>

            {/* Column 2: Popular Safaris */}
            <div className="footer-column">
              <h4 className="footer-column-title">Popular Safaris</h4>
              <div className="footer-title-underline"></div>
              <ul className="footer-links">
                <li>
                  <BookingButton
                    message="Hello Cheetah Travels, I want to inquire about Full Day Explorer Safari."
                    className="footer-link-btn"
                  >
                    Full Mountain Explorer
                  </BookingButton>
                </li>
                <li>
                  <BookingButton
                    message="Hello Cheetah Travels, I want to inquire about Sunrise Peak Safari."
                    className="footer-link-btn"
                  >
                    Sunrise Peak 4x4
                  </BookingButton>
                </li>
                <li>
                  <BookingButton
                    message="Hello Cheetah Travels, I want to inquire about Hidden Waterfalls Trail."
                    className="footer-link-btn"
                  >
                    Hidden Falls & Creek
                  </BookingButton>
                </li>
                <li>
                  <BookingButton
                    message="Hello Cheetah Travels, I want to inquire about Coffee Plantation Trail."
                    className="footer-link-btn"
                  >
                    Coffee Estate Canopy
                  </BookingButton>
                </li>
                <li>
                  <BookingButton
                    message="Hello Cheetah Travels, I want to inquire about Night Safari Adventure."
                    className="footer-link-btn"
                  >
                    Night Trail Experience
                  </BookingButton>
                </li>
              </ul>
            </div>

            {/* Column 3: Guest Services */}
            <div className="footer-column">
              <h4 className="footer-column-title">Guest Services</h4>
              <div className="footer-title-underline"></div>
              <ul className="footer-links">
                <li><Link to="/my-bookings" className="footer-link">Check Booking Status</Link></li>
                <li><Link to="/contact" className="footer-link">Pickup Points & Help</Link></li>
                <li><Link to="/admin" className="footer-link">Operator / Admin Login</Link></li>
                <li><span className="footer-link-text">Forest Permits Included</span></li>
                <li><span className="footer-link-text">12+ Years Local Expertise</span></li>
              </ul>
            </div>

            {/* Column 4: Contact & Social Hub */}
            <div className="footer-column footer-contact-col">
              <div className="footer-contact-details">
                <img 
                  src="/Cheetah Travels.svg" 
                  alt="Cheetah Travels Logo" 
                  className="footer-logo-img"
                  style={{ height: '32px', width: 'auto', maxWidth: '220px', marginBottom: '0.85rem', display: 'block' }}
                />
                <p className="contact-line">
                  <MapPin size={15} className="contact-icon" />
                  <span>{CONTACT_INFO.address}</span>
                </p>
                <p className="contact-line">
                  <Phone size={15} className="contact-icon" />
                  <span>tel: {CONTACT_INFO.phone}</span>
                </p>
                <p className="contact-line">
                  <Mail size={15} className="contact-icon" />
                  <span>email: {CONTACT_INFO.email}</span>
                </p>
                <p className="contact-line">
                  <Clock size={15} className="contact-icon" />
                  <span>hours: {CONTACT_INFO.operatingHours}</span>
                </p>
              </div>

              {/* Social Circle Icons */}
              <div className="footer-social-row">
                <a href={`mailto:${CONTACT_INFO.email}`} className="social-circle-btn" aria-label="Email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
                <a href={getWhatsAppUrl("Hello Cheetah Travels, I have a question about Yercaud Jeep Safari.")} target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="WhatsApp / Chat">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div className="footer-bottom">
            <div className="footer-bottom-brand">
              <img 
                src="/Cheetah Travels.svg" 
                alt="Cheetah Travels" 
                style={{ height: '24px', width: 'auto', maxWidth: '180px', display: 'block' }}
              />
            </div>

            <div className="footer-bottom-links">
              <span>Terms & Conditions</span>
              <span className="dot-sep">•</span>
              <span>Privacy Policy</span>
              <span className="dot-sep">•</span>
              <span>Forest Dept Approved</span>
            </div>

            <div className="footer-bottom-payment">
              <span className="trust-badge">GPay / PhonePe / Cash Accepted</span>
            </div>

            <div className="footer-bottom-right">
              <span className="copyright-text">© {new Date().getFullYear()} Cheetah Travels. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
