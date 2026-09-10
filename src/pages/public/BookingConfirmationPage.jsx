import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Calendar, MapPin, Phone, ArrowRight, Download, Home } from 'lucide-react';
import { bookingService } from '../../services/bookingService';
import { Button } from '../../components/common/Button';
import { Card, CardBody } from '../../components/common/Card';
import { formatCurrency } from '../../utils/formatters';
import { CONTACT_INFO } from '../../utils/constants';

export const BookingConfirmationPage = () => {
  const [searchParams] = useSearchParams();
  const bookingId = searchParams.get('id') || 'YJS-782194';
  const booking = bookingService.getBookingById(bookingId) || {
    id: bookingId,
    packageName: "Sunrise Peak Expedition",
    safariDate: "2026-09-12",
    timeSlot: "06:00 AM - 09:00 AM (Sunrise)",
    guestsCount: 4,
    customerName: "Valued Guest",
    customerPhone: "+91 98765 43210",
    pickupLocation: "Yercaud Lake Roundabout",
    totalAmount: 2500,
    bookingStatus: "confirmed"
  };

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '700px' }}>
      <Card style={{ textAlign: 'center', padding: '2.5rem 1.5rem' }}>
        <CardBody>
          <CheckCircle size={64} color="var(--status-success)" style={{ margin: '0 auto 1.25rem' }} />
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Safari Booking Confirmed!</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Your 4x4 expedition is locked in. We have sent SMS & WhatsApp confirmation to {booking.customerPhone}.
          </p>

          <div style={{ background: 'var(--bg-surface-subtle)', borderRadius: 'var(--radius-md)', padding: '1.5rem', textAlign: 'left', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem', marginBottom: '0.75rem' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Booking Reference</span>
              <strong style={{ fontSize: '1rem', color: 'var(--color-primary-600)' }}>{booking.id}</strong>
            </div>

            <p style={{ margin: '0.4rem 0', fontSize: '0.9rem' }}><strong>Package:</strong> {booking.packageName}</p>
            <p style={{ margin: '0.4rem 0', fontSize: '0.9rem' }}><strong>Date & Slot:</strong> {booking.safariDate} ({booking.timeSlot})</p>
            <p style={{ margin: '0.4rem 0', fontSize: '0.9rem' }}><strong>Guests:</strong> {booking.guestsCount} Persons (Private Jeep)</p>
            <p style={{ margin: '0.4rem 0', fontSize: '0.9rem' }}><strong>Pickup Point:</strong> {booking.pickupLocation}</p>
            <p style={{ margin: '0.4rem 0', fontSize: '0.9rem' }}><strong>Total Payable at Pickup:</strong> {formatCurrency(booking.totalAmount)}</p>
          </div>

          <div style={{ background: 'var(--color-primary-50)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem', textAlign: 'left', color: 'var(--color-primary-800)', fontSize: '0.85rem' }}>
            <strong>Safari Day Instructions:</strong> Your assigned driver coordinator will call you 45 minutes before pickup. Please carry light jackets as morning mist in Yercaud hills can be cold.
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Button to="/" variant="secondary" icon={Home}>
              Back to Home
            </Button>
            <Button to="/my-bookings" variant="primary" icon={ArrowRight}>
              Track Booking
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
