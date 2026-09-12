import React from 'react';
import { getWhatsAppUrl } from '../../utils/constants';

export const BookingButton = ({ 
  children, 
  message = "Hello Cheetah Travels, I would like to book a Yercaud Jeep Safari.",
  className = "btn btn-primary",
  ...props 
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <button 
      className={className} 
      onClick={handleClick} 
      {...props}
    >
      {children}
    </button>
  );
};
