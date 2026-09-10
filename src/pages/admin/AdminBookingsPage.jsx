import React, { useState } from 'react';
import { Search, Filter, CheckCircle, XCircle, Clock } from 'lucide-react';
import { bookingService } from '../../services/bookingService';
import { Card, CardHeader, CardBody } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { formatCurrency } from '../../utils/formatters';

export const AdminBookingsPage = () => {
  const [bookings, setBookings] = useState(bookingService.getAllBookings());
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const handleStatusChange = (id, newStatus) => {
    const updated = bookingService.updateBookingStatus(id, newStatus);
    setBookings(updated);
  };

  const filteredBookings = bookings.filter((b) => {
    const matchesFilter = filter === 'all' || b.bookingStatus === filter;
    const matchesSearch =
      b.id.toLowerCase().includes(search.toLowerCase()) ||
      b.customerName.toLowerCase().includes(search.toLowerCase()) ||
      b.customerPhone.includes(search);
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="admin-topbar-title" style={{ fontSize: '1.75rem' }}>Bookings Management</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Review, confirm, or modify safari bookings and customer allocations.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <Card style={{ marginBottom: '1.5rem' }}>
        <CardBody>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <input
                type="text"
                className="form-input"
                placeholder="Search by ID, guest name, or phone..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {['all', 'confirmed', 'pending', 'cancelled'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`btn btn-sm ${filter === status ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ textTransform: 'capitalize' }}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Bookings Table */}
      <Card>
        <CardBody>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Customer Info</th>
                  <th>Safari Package</th>
                  <th>Date & Slot</th>
                  <th>Pickup Point</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.length > 0 ? (
                  filteredBookings.map((b) => (
                    <tr key={b.id}>
                      <td><strong>{b.id}</strong></td>
                      <td>
                        <div style={{ fontWeight: 600 }}>{b.customerName}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{b.customerPhone}</div>
                      </td>
                      <td>{b.packageName}</td>
                      <td>
                        <div>{b.safariDate}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{b.timeSlot}</div>
                      </td>
                      <td style={{ maxWidth: '150px' }}>{b.pickupLocation}</td>
                      <td><strong>{formatCurrency(b.totalAmount)}</strong></td>
                      <td>
                        <Badge variant={b.bookingStatus === 'confirmed' ? 'success' : b.bookingStatus === 'pending' ? 'warning' : 'danger'}>
                          {b.bookingStatus}
                        </Badge>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '0.35rem' }}>
                          {b.bookingStatus !== 'confirmed' && (
                            <button
                              className="btn btn-sm btn-outline"
                              onClick={() => handleStatusChange(b.id, 'confirmed')}
                              title="Confirm"
                            >
                              ✓
                            </button>
                          )}
                          {b.bookingStatus !== 'cancelled' && (
                            <button
                              className="btn btn-sm btn-secondary"
                              onClick={() => handleStatusChange(b.id, 'cancelled')}
                              title="Cancel"
                            >
                              ✕
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                      No bookings matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
