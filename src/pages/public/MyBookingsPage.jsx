import React, { useState } from 'react';
import { Search, Calendar, MapPin, CheckCircle, Clock } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { bookingService } from '../../services/bookingService';
import { Button } from '../../components/common/Button';
import { Card, CardBody } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { formatCurrency } from '../../utils/formatters';

export const MyBookingsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedBooking, setSearchedBooking] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setHasSearched(true);
    if (!searchQuery.trim()) return;
    const found = bookingService.getBookingById(searchQuery.trim());
    setSearchedBooking(found);
  };

  const sampleRecentBookings = bookingService.getAllBookings().slice(0, 3);

  return (
    <div>
      <PageHeader
        title="Check My Booking"
        subtitle="Lookup your safari status, pickup timings, assigned driver, or download booking voucher."
      />

      <div className="container" style={{ maxWidth: '800px', paddingBottom: '4rem' }}>
        {/* Search Bar */}
        <Card style={{ marginBottom: '2.5rem' }}>
          <CardBody>
            <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.75rem' }}>
              <input
                type="text"
                className="form-input"
                placeholder="Enter Booking ID (e.g. YJS-782194)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ flex: 1 }}
              />
              <Button type="submit" variant="primary" icon={Search}>
                Find Booking
              </Button>
            </form>
          </CardBody>
        </Card>

        {/* Search Result */}
        {hasSearched && (
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Search Result</h3>
            {searchedBooking ? (
              <Card>
                <CardBody>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Booking ID:</span>
                      <strong style={{ fontSize: '1.1rem', color: 'var(--color-primary-600)', marginLeft: '0.35rem' }}>
                        {searchedBooking.id}
                      </strong>
                    </div>
                    <Badge variant={searchedBooking.bookingStatus === 'confirmed' ? 'success' : 'warning'}>
                      {searchedBooking.bookingStatus}
                    </Badge>
                  </div>

                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{searchedBooking.packageName}</h4>
                  <div className="grid-2" style={{ gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    <div>📅 Date: <strong>{searchedBooking.safariDate}</strong></div>
                    <div>⏱ Slot: <strong>{searchedBooking.timeSlot}</strong></div>
                    <div>👤 Guest: <strong>{searchedBooking.customerName}</strong></div>
                    <div>📍 Pickup: <strong>{searchedBooking.pickupLocation}</strong></div>
                  </div>

                  <div style={{ background: 'var(--bg-surface-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>Total Amount: <strong>{formatCurrency(searchedBooking.totalAmount)}</strong></span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Status: {searchedBooking.paymentStatus}</span>
                  </div>
                </CardBody>
              </Card>
            ) : (
              <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '1.5rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                No booking found with ID "{searchQuery}". Please check your confirmation SMS or enter a valid reference.
              </p>
            )}
          </div>
        )}

        {/* Recent Sample Bookings list */}
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Demo Active Bookings in System</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {sampleRecentBookings.map((b) => (
              <Card key={b.id}>
                <CardBody>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong style={{ color: 'var(--color-primary-600)' }}>{b.id}</strong>
                      <h4 style={{ fontSize: '1rem', margin: '0.25rem 0' }}>{b.packageName}</h4>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {b.safariDate} • {b.customerName} ({b.guestsCount} Guests)
                      </span>
                    </div>
                    <Badge variant={b.bookingStatus === 'confirmed' ? 'success' : 'warning'}>
                      {b.bookingStatus}
                    </Badge>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
