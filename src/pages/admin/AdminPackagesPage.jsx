import React from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { packagesData } from '../../data/packagesData';
import { Card, CardHeader, CardBody } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { formatCurrency } from '../../utils/formatters';

export const AdminPackagesPage = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h1 className="admin-topbar-title" style={{ fontSize: '1.75rem' }}>Safari Packages Management</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Configure tour packages, pricing per jeep, inclusions, and difficulty levels.
          </p>
        </div>
        <Button variant="primary" size="sm" icon={Plus} onClick={() => alert('Add package editor modal')}>
          Add New Package
        </Button>
      </div>

      <div className="grid-2">
        {packagesData.map((pkg) => (
          <Card key={pkg.id}>
            <CardBody>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div>
                  <Badge variant="success" style={{ marginBottom: '0.35rem' }}>{pkg.badge || 'Standard'}</Badge>
                  <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{pkg.title}</h3>
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-600)' }}>
                  {formatCurrency(pkg.price)}
                </div>
              </div>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                {pkg.subtitle}
              </p>

              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
                <span>⏱ Duration: <strong>{pkg.duration}</strong></span>
                <span>👥 Capacity: <strong>{pkg.capacity}</strong></span>
                <span>⚡ Difficulty: <strong>{pkg.difficulty}</strong></span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
                <Button variant="secondary" size="sm" icon={Edit} onClick={() => alert(`Edit ${pkg.title}`)}>
                  Edit Package
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};
