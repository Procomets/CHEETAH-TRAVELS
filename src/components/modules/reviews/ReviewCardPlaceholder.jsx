import React from 'react';
import { Star, CheckCircle, MapPin } from 'lucide-react';
import { Card, CardBody } from '../../common/Card';
import { formatDate } from '../../../utils/formatters';

export const ReviewCardPlaceholder = ({ review }) => {
  return (
    <Card>
      <CardBody>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <strong style={{ fontSize: '1rem', color: 'var(--text-main)' }}>{review.customerName}</strong>
              {review.verified && (
                <span title="Verified Safari Guest" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <CheckCircle size={14} color="var(--status-success)" />
                </span>
              )}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
              <MapPin size={12} /> {review.city} • {formatDate(review.date)}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2px', color: 'var(--color-accent-amber)' }}>
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>
        </div>

        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-primary-600)', marginBottom: '0.5rem' }}>
          Safari: {review.packageName}
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontStyle: 'italic', lineHeight: 1.5 }}>
          "{review.comment}"
        </p>
      </CardBody>
    </Card>
  );
};
