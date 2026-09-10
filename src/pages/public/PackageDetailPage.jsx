import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Compass, Clock, Users, ArrowLeft, CalendarCheck, ShieldCheck, Check } from 'lucide-react';
import { packagesData } from '../../data/packagesData';
import { PageHeader } from '../../components/common/PageHeader';
import { Button } from '../../components/common/Button';
import { Card, CardBody } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { formatCurrency } from '../../utils/formatters';
import { getWhatsAppUrl, CONTACT_INFO } from '../../utils/constants';
import { BookingButton } from '../../components/common/BookingButton';

export const PackageDetailPage = () => {
  const { id } = useParams();
  const pkg = packagesData.find((p) => p.id === id) || packagesData[0];

  return (
    <div>
      <PageHeader
        title={pkg.title}
        subtitle={pkg.subtitle}
      >
        <Link to="/packages" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-primary-600)', textDecoration: 'none', fontWeight: 600 }}>
          <ArrowLeft size={16} /> Back to all packages
        </Link>
      </PageHeader>

      <div className="container" style={{ paddingBottom: '4rem' }}>
        <div className="grid-3">
          {/* Main Details (2 cols) */}
          <div style={{ gridColumn: 'span 2' }}>
            <Card style={{ marginBottom: '2rem' }}>
              <CardBody>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <Badge variant="success">{pkg.badge || pkg.difficulty}</Badge>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>⏱ {pkg.duration}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>👥 {pkg.capacity}</span>
                </div>

                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>Expedition Overview</h3>
                <p style={{ lineHeight: 1.7, marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                  {pkg.description}
                </p>

                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Highlights & Scenic Halts</h4>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  {pkg.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <Check size={18} color="var(--color-primary-600)" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Inclusions & Amenities</h4>
                <div className="grid-2">
                  {pkg.included.map((inc, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-surface-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
                      <ShieldCheck size={18} color="var(--color-primary-600)" />
                      <span style={{ fontSize: '0.9rem' }}>{inc}</span>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Booking Summary Card (1 col) */}
          <div>
            <Card style={{ position: 'sticky', top: '90px' }}>
              <CardBody>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Price per Jeep</span>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary-600)' }}>
                    {formatCurrency(pkg.price)}
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Max 6 passengers included</span>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    <strong>Best Suitable For:</strong> {pkg.suitableFor}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <strong>Flexible Cancellation:</strong> Free cancellation up to 24 hrs prior to departure.
                  </p>
                </div>

                <BookingButton
                  message={`Hello Cheetah Travels, I would like to book the "${pkg.title}" package (${pkg.duration}, ${formatCurrency(pkg.price)}).`}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <CalendarCheck size={18} />
                  <span>Book on WhatsApp (99406 25630)</span>
                </BookingButton>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
