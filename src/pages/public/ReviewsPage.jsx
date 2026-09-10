import React from 'react';
import { Star, MessageSquarePlus } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { reviewsData } from '../../data/reviewsData';
import { ReviewCardPlaceholder } from '../../components/modules/reviews/ReviewCardPlaceholder';
import { Button } from '../../components/common/Button';
import { Card, CardBody } from '../../components/common/Card';

export const ReviewsPage = () => {
  return (
    <div>
      <PageHeader
        title="Guest Reviews & Experiences"
        subtitle="Read candid feedback from families, adventure groups, and solo travelers who explored Yercaud with us."
      />

      <div className="container" style={{ paddingBottom: '4rem' }}>
        {/* Rating Overview Summary Box */}
        <Card style={{ marginBottom: '2.5rem', background: 'var(--bg-surface-subtle)' }}>
          <CardBody>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-primary-600)', lineHeight: 1 }}>
                  4.9
                </div>
                <div>
                  <div style={{ display: 'flex', gap: '3px', color: 'var(--color-accent-amber)', marginBottom: '0.25rem' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Based on 450+ verified guest safari feedbacks
                  </p>
                </div>
              </div>

              <Button variant="primary" size="sm" icon={MessageSquarePlus} onClick={() => alert('Review submission form will open in interactive modal')}>
                Write a Review
              </Button>
            </div>
          </CardBody>
        </Card>

        {/* Reviews Grid */}
        <div className="grid-3">
          {reviewsData.map((rev) => (
            <ReviewCardPlaceholder key={rev.id} review={rev} />
          ))}
        </div>
      </div>
    </div>
  );
};
