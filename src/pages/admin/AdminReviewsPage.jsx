import React from 'react';
import { Star, Check, Trash2 } from 'lucide-react';
import { reviewsData } from '../../data/reviewsData';
import { Card, CardBody } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';

export const AdminReviewsPage = () => {
  return (
    <div>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 className="admin-topbar-title" style={{ fontSize: '1.75rem' }}>Customer Reviews Moderation</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Approve, feature, or respond to guest testimonials submitted on the website.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {reviewsData.map((rev) => (
          <Card key={rev.id}>
            <CardBody>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <div>
                  <strong style={{ fontSize: '1rem' }}>{rev.customerName} ({rev.city})</strong>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Package: {rev.packageName} • {rev.date}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '2px', color: 'var(--color-accent-amber)' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontStyle: 'italic', marginBottom: '1rem' }}>
                "{rev.comment}"
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
                <Badge variant={rev.verified ? 'success' : 'neutral'}>
                  {rev.verified ? 'Verified Rider' : 'Unverified'}
                </Badge>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-sm btn-outline" onClick={() => alert('Marked as featured')}>
                    Feature on Homepage
                  </button>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};
