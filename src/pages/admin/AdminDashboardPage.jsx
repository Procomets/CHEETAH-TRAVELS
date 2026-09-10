import React from 'react';
import { CalendarCheck, DollarSign, Truck, Users, Clock, AlertCircle } from 'lucide-react';
import { bookingService } from '../../services/bookingService';
import { jeepsData } from '../../data/jeepsData';
import { packagesData } from '../../data/packagesData';
import { Card, CardHeader, CardBody } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { formatCurrency } from '../../utils/formatters';

export const AdminDashboardPage = () => {
  const bookings = bookingService.getAllBookings();
  const totalRevenue = bookings.reduce((sum, b) => sum + (b.totalAmount || 0), 0);
  const activeJeeps = jeepsData.filter(j => j.status === 'Active').length;

  return (
    <div>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 className="admin-topbar-title" style={{ fontSize: '1.75rem' }}>Dashboard Overview</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Real-time summary of safari operations, upcoming rides, and vehicle utilization.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="metric-grid">
        <div className="metric-card">
          <div className="metric-icon-box">
            <CalendarCheck size={24} />
          </div>
          <div>
            <div className="metric-value">{bookings.length}</div>
            <div className="metric-label">Total Bookings</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box" style={{ background: 'var(--status-success-bg)', color: 'var(--status-success)' }}>
            <DollarSign size={24} />
          </div>
          <div>
            <div className="metric-value">{formatCurrency(totalRevenue)}</div>
            <div className="metric-label">Gross Revenue</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box" style={{ background: 'var(--status-info-bg)', color: 'var(--status-info)' }}>
            <Truck size={24} />
          </div>
          <div>
            <div className="metric-value">{activeJeeps} / {jeepsData.length}</div>
            <div className="metric-label">Active 4x4 Jeeps</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box" style={{ background: 'var(--status-warning-bg)', color: 'var(--status-warning)' }}>
            <Users size={24} />
          </div>
          <div>
            <div className="metric-value">{packagesData.length}</div>
            <div className="metric-label">Active Packages</div>
          </div>
        </div>
      </div>

      {/* Recent Bookings & Dispatch Table */}
      <Card>
        <CardHeader
          title="Upcoming Safari Dispatches"
          subtitle="Latest confirmed bookings awaiting departure"
        />
        <CardBody>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Customer</th>
                  <th>Safari Package</th>
                  <th>Date & Slot</th>
                  <th>Assigned Driver</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id}>
                    <td><strong>{b.id}</strong></td>
                    <td>
                      <div>{b.customerName}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{b.customerPhone}</div>
                    </td>
                    <td>{b.packageName}</td>
                    <td>
                      <div>{b.safariDate}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{b.timeSlot?.split('(')[0]}</div>
                    </td>
                    <td>{b.driverName || 'Unassigned'}</td>
                    <td><strong>{formatCurrency(b.totalAmount)}</strong></td>
                    <td>
                      <Badge variant={b.bookingStatus === 'confirmed' ? 'success' : 'warning'}>
                        {b.bookingStatus}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
