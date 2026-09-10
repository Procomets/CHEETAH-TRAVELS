import { mockBookingsData } from '../data/mockBookingsData';
import { storageService } from './storageService';
import { generateBookingId } from '../utils/formatters';

const STORAGE_KEY = 'yercaud_safari_bookings';

export const bookingService = {
  // Get all bookings (combines initial mock data with local storage)
  getAllBookings: () => {
    const saved = storageService.getItem(STORAGE_KEY, null);
    if (!saved) {
      storageService.setItem(STORAGE_KEY, mockBookingsData);
      return mockBookingsData;
    }
    return saved;
  },

  // Get single booking by ID
  getBookingById: (bookingId) => {
    const all = bookingService.getAllBookings();
    return all.find((b) => b.id.toLowerCase() === bookingId.toLowerCase()) || null;
  },

  // Create a new booking
  createBooking: (bookingPayload) => {
    const all = bookingService.getAllBookings();
    const newBooking = {
      id: generateBookingId(),
      bookingStatus: "confirmed",
      paymentStatus: "Pending at Pickup",
      createdAt: new Date().toISOString(),
      ...bookingPayload
    };
    const updated = [newBooking, ...all];
    storageService.setItem(STORAGE_KEY, updated);
    return newBooking;
  },

  // Update booking status (for Admin)
  updateBookingStatus: (bookingId, status) => {
    const all = bookingService.getAllBookings();
    const updated = all.map((b) => (b.id === bookingId ? { ...b, bookingStatus: status } : b));
    storageService.setItem(STORAGE_KEY, updated);
    return updated;
  }
};
