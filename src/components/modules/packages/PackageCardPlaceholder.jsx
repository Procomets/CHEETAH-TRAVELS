import React from 'react';
import { Compass, Clock, Users, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardBody, CardFooter } from '../../common/Card';
import { Badge } from '../../common/Badge';
import { Button } from '../../common/Button';
import { formatCurrency } from '../../../utils/formatters';
import { getWhatsAppUrl } from '../../../utils/constants';

export const PackageCardPlaceholder = ({ item }) => {
  return (
    <Card>
      <CardHeader>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
          {item.badge ? (
            <Badge variant="success">{item.badge}</Badge>
          ) : (
            <Badge variant="neutral">{item.difficulty}</Badge>
          )}
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-600)' }}>
            {formatCurrency(item.price)}
          </span>
        </div>
        <h3 className="card-title">{item.title}</h3>
        <p className="card-subtitle">{item.subtitle}</p>
      </CardHeader>

      <CardBody>
        <div style={{ display: 'flex', gap: '1rem', margin: '0.75rem 0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Clock size={14} /> {item.duration}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Users size={14} /> {item.capacity}
          </span>
        </div>

        <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0', fontSize: '0.875rem' }}>
          {item.highlights?.slice(0, 3).map((h, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem', color: 'var(--text-main)' }}>
              <span style={{ color: 'var(--color-primary-600)', fontWeight: 'bold' }}>✓</span> {h}
            </li>
          ))}
        </ul>
      </CardBody>

      <CardFooter>
        <Button to={`/packages/${item.id}`} variant="secondary" size="sm">
          View Details
        </Button>
        <a
          href={getWhatsAppUrl(`Hello Cheetah Travels, I would like to book the "${item.title}" package (${item.duration}, ${formatCurrency(item.price)}).`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          <span>Book Now</span>
          <ArrowRight size={15} />
        </a>
      </CardFooter>
    </Card>
  );
};
