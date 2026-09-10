import React from 'react';
import { Plus, Truck, Phone, UserCheck, Wrench } from 'lucide-react';
import { jeepsData } from '../../data/jeepsData';
import { Card, CardHeader, CardBody } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';

export const AdminJeepsPage = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h1 className="admin-topbar-title" style={{ fontSize: '1.75rem' }}>Jeep Fleet & Driver Roster</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Manage registered 4x4 vehicles, maintenance status, and assigned local driver pilots.
          </p>
        </div>
        <Button variant="primary" size="sm" icon={Plus} onClick={() => alert('Register new 4x4 Jeep')}>
          Register New Jeep
        </Button>
      </div>

      <div className="grid-2">
        {jeepsData.map((jeep) => (
          <Card key={jeep.id}>
            <CardBody>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <Truck size={20} color="var(--color-primary-600)" />
                    <h3 style={{ fontSize: '1.15rem', margin: 0 }}>{jeep.model}</h3>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>{jeep.regNumber}</span>
                </div>
                <Badge variant={jeep.status === 'Active' ? 'success' : 'warning'}>
                  {jeep.status}
                </Badge>
              </div>

              <div style={{ background: 'var(--bg-surface-subtle)', padding: '0.85rem', borderRadius: 'var(--radius-md)', margin: '0.75rem 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                  <UserCheck size={16} color="var(--color-primary-600)" /> Pilot: {jeep.driverName}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Phone: {jeep.driverPhone} • {jeep.driverExp}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '0.75rem 0' }}>
                {jeep.features.map((f, i) => (
                  <span key={i} style={{ fontSize: '0.75rem', background: 'var(--bg-page)', border: '1px solid var(--border-subtle)', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>
                    {f}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
                <Button variant="secondary" size="sm" icon={Wrench} onClick={() => alert(`Service Log for ${jeep.regNumber}`)}>
                  Vehicle Log
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};
