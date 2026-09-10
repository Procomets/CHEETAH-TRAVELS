import React, { useState } from 'react';
import { Plus, MapPin, Route as RouteIcon } from 'lucide-react';
import { routesData } from '../../data/routesData';
import { placesData } from '../../data/placesData';
import { Card, CardHeader, CardBody } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';

export const AdminRoutesPlacesPage = () => {
  const [tab, setTab] = useState('routes');

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h1 className="admin-topbar-title" style={{ fontSize: '1.75rem' }}>Routes & Sightseeing Manager</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Maintain trail checkpoints, viewpoint metadata, and off-road trail conditions.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => setTab('routes')}
            className={`btn btn-sm ${tab === 'routes' ? 'btn-primary' : 'btn-secondary'}`}
          >
            Safari Routes ({routesData.length})
          </button>
          <button
            onClick={() => setTab('places')}
            className={`btn btn-sm ${tab === 'places' ? 'btn-primary' : 'btn-secondary'}`}
          >
            Sightseeing Places ({placesData.length})
          </button>
        </div>
      </div>

      {tab === 'routes' ? (
        <div className="grid-2">
          {routesData.map((route) => (
            <Card key={route.id}>
              <CardBody>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <Badge variant="warning">{route.difficultyLevel}</Badge>
                  <strong style={{ fontSize: '0.85rem' }}>{route.distance} • {route.estimatedDuration}</strong>
                </div>
                <h3 style={{ fontSize: '1.15rem', margin: '0.25rem 0' }}>{route.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  {route.description}
                </p>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <strong>Checkpoints:</strong> {route.keyCheckpoints.map(c => c.name).join(' → ')}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid-2">
          {placesData.map((place) => (
            <Card key={place.id}>
              <CardBody>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <Badge variant="info">{place.category}</Badge>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{place.elevation}</span>
                </div>
                <h3 style={{ fontSize: '1.15rem', margin: '0.25rem 0' }}>{place.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  {place.description}
                </p>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-primary-700)' }}>
                  <strong>Jeep Access:</strong> {place.jeepAccess}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
