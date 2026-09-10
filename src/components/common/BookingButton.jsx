import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { getWhatsAppUrl, CONTACT_INFO } from '../../utils/constants';
import { MessageCircle, Phone, X } from 'lucide-react';

export const BookingButton = ({ 
  children, 
  message = "Hello Cheetah Travels, I would like to book a Yercaud Jeep Safari.",
  className = "btn btn-primary",
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const handleCall = () => {
    // Make sure we just have numbers for the tel: link
    const phoneNum = CONTACT_INFO.phoneRaw || "919940625630";
    window.location.href = `tel:+${phoneNum}`;
    setIsOpen(false);
  };

  return (
    <>
      <button 
        className={className} 
        onClick={(e) => { 
          e.preventDefault(); 
          setIsOpen(true); 
        }} 
        {...props}
      >
        {children}
      </button>

      {isOpen && createPortal(
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 99999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(4px)'
        }} onClick={() => setIsOpen(false)}>
          <div style={{
            background: 'white', padding: '2rem', borderRadius: '16px',
            width: '90%', maxWidth: '350px', textAlign: 'center',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', position: 'relative'
          }} onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ 
                position: 'absolute', top: '15px', right: '15px', 
                background: 'rgba(0,0,0,0.05)', border: 'none', cursor: 'pointer', 
                color: '#64748b', borderRadius: '50%', width: '32px', height: '32px',
                display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center'
              }}
            >
              <X size={18} />
            </button>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '0.5rem', color: '#0f172a', fontFamily: 'var(--font-heading)' }}>Book Your Safari</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1.75rem' }}>How would you like to connect with us?</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button 
                onClick={handleWhatsApp}
                style={{ 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', 
                  background: '#25D366', color: 'white', padding: '1rem', borderRadius: '10px', 
                  border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.05rem',
                  boxShadow: '0 4px 10px rgba(37, 211, 102, 0.3)', transition: 'transform 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <MessageCircle size={22} /> WhatsApp Chat
              </button>
              <button 
                onClick={handleCall}
                style={{ 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', 
                  background: '#2563eb', color: 'white', padding: '1rem', borderRadius: '10px', 
                  border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.05rem',
                  boxShadow: '0 4px 10px rgba(37, 99, 235, 0.3)', transition: 'transform 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Phone size={22} /> Direct Call
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
