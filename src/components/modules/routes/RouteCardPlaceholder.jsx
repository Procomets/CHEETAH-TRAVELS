import React from 'react';
import { Route as RouteIcon, Clock, Gauge, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../../common/Card';
import { Badge } from '../../common/Badge';

export const RouteCardPlaceholder = ({ route }) => {
  return (
    <Card>
      <CardHeader>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <Badge variant="warning">{route.difficultyLevel}</Badge>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>
            {route.distance}
          </span>
        </div>
        <h3 className="card-title" style={{ fontSize: '1.2rem' }}>{route.name}</h3>
        <p className="card-subtitle">{route.description}</p>
      </CardHeader>

      <CardBody>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Clock size={14} /> {route.estimatedDuration}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <TrendingUp size={14} /> {route.elevationGain}
          </span>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
            Key Checkpoints & Halts:
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {route.keyCheckpoints.map((cp) => (
              <div key={cp.step} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                <CheckCircle2 size={14} color="var(--color-primary-600)" />
                <span style={{ fontWeight: 600 }}>{cp.name}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>({cp.type})</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'var(--bg-surface-subtle)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <strong>Vehicle:</strong> {route.recommendedVehicle}
        </div>
      </CardBody>
    </Card>
  );
};
