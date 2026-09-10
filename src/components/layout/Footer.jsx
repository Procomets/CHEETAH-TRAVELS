import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../../utils/constants';
import { BookingButton } from '../common/BookingButton';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-column">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Compass size={28} color="#4ade80" />
              <h3 style={{ fontSize: '1.35rem', letterSpacing: '0.05em' }}>
                <span style={{ color: '#ffffff' }}>CHEETAH</span>{' '}
                <span style={{ color: '#f97316' }}>TRAVELS</span>
              </h3>
            </div>
            <p style={{ color: 'var(--text-inverse-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Specialized 4x4 Jeep Safaris across the serene Shevaroy hills, misty peaks, hidden waterfalls, and private coffee plantations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/packages" className="footer-link">Safari Packages</Link></li>
              <li><Link to="/places" className="footer-link">Places to Visit</Link></li>
              <li><Link to="/routes" className="footer-link">Safari Routes</Link></li>
              <li><Link to="/gallery" className="footer-link">Photo Gallery</Link></li>
              <li><Link to="/reviews" className="footer-link">Customer Reviews</Link></li>
            </ul>
          </div>

          {/* Guest Services */}
          <div className="footer-column">
            <h4>Guest Portal</h4>
            <ul className="footer-links">
              <li>
                <BookingButton 
                  message="Hello Cheetah Travels, I would like to book a Yercaud Jeep Safari." 
                  className="footer-link" 
                  style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer', textAlign: 'left' }}
                >
                  Book Safari (99406 25630)
                </BookingButton>
              </li>
              <li><Link to="/my-bookings" className="footer-link">Check Booking Status</Link></li>
              <li><Link to="/contact" className="footer-link">Pickup Points & Help</Link></li>
              <li><Link to="/admin" className="footer-link">Operator / Admin Login</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-column">
            <h4>Contact Safari Hub</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <MapPin size={18} color="#4ade80" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Phone size={18} color="#4ade80" style={{ flexShrink: 0 }} />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Mail size={18} color="#4ade80" style={{ flexShrink: 0 }} />
                <span>{CONTACT_INFO.email}</span>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Clock size={18} color="#4ade80" style={{ flexShrink: 0 }} />
                <span>{CONTACT_INFO.operatingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Yercaud Jeep Safari. All rights reserved.</p>
          <p style={{ color: 'var(--text-inverse-muted)' }}>Safe & Certified Forest Trails • Government Approved Operations</p>
        </div>
      </div>
    </footer>
  );
};
