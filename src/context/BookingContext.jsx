import React, { createContext, useContext, useState } from 'react';
import { bookingService } from '../services/bookingService';

const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
  const [draftBooking, setDraftBooking] = useState({
    packageId: '',
    packageName: '',
    safariDate: '',
    timeSlot: '',
    guestsCount: 2,
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    pickupLocation: '',
    specialRequests: '',
    totalAmount: 0
  });

  const [lastCreatedBooking, setLastCreatedBooking] = useState(null);

  const updateDraft = (fields) => {
    setDraftBooking((prev) => ({ ...prev, ...fields }));
  };

  const resetDraft = () => {
    setDraftBooking({
      packageId: '',
      packageName: '',
      safariDate: '',
      timeSlot: '',
      guestsCount: 2,
      customerName: '',
      customerPhone: '',
      customerEmail: '',
      pickupLocation: '',
      specialRequests: '',
      totalAmount: 0
    });
  };

  const submitBooking = (payload = draftBooking) => {
    const created = bookingService.createBooking(payload);
    setLastCreatedBooking(created);
    resetDraft();
    return created;
  };

  return (
    <BookingContext.Provider
      value={{
        draftBooking,
        updateDraft,
        resetDraft,
        submitBooking,
        lastCreatedBooking
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
