import React, { useState } from 'react';
import { Save, Building, Clock, DollarSign, Bell } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { CONTACT_INFO } from '../../utils/constants';

export const AdminSettingsPage = () => {
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "Yercaud Jeep Safari",
    phone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    address: CONTACT_INFO.address,
    operatingHours: CONTACT_INFO.operatingHours,
    advanceDepositPercent: 20,
    smsNotifications: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 className="admin-topbar-title" style={{ fontSize: '1.75rem' }}>Business & Operational Settings</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Configure safari hub details, booking lead times, deposit rules, and automated notifications.
        </p>
      </div>

      <div style={{ maxWidth: '800px' }}>
        <Card>
          <CardBody>
            {saved && (
              <div style={{ background: 'var(--status-success-bg)', color: 'var(--status-success)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontWeight: 600, fontSize: '0.9rem' }}>
                ✓ Settings updated successfully!
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Building size={18} color="var(--color-primary-600)" /> Business Information
              </h3>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Operator Title</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Helpline Phone</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Email Support</label>
                  <input
                    type="email"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Operating Schedule</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.operatingHours}
                    onChange={(e) => setFormData({ ...formData, operatingHours: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label className="form-label">Hub Address & Boarding Desk</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <DollarSign size={18} color="var(--color-primary-600)" /> Booking & Deposit Rules
              </h3>

              <div className="grid-2" style={{ marginBottom: '2rem' }}>
                <div className="form-group">
                  <label className="form-label">Advance Booking Deposit (%)</label>
                  <input
                    type="number"
                    className="form-input"
                    value={formData.advanceDepositPercent}
                    onChange={(e) => setFormData({ ...formData, advanceDepositPercent: Number(e.target.value) })}
                  />
                </div>

                <div className="form-group" style={{ justifyContent: 'center' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', marginTop: '1.5rem', fontSize: '0.9rem' }}>
                    <input
                      type="checkbox"
                      checked={formData.smsNotifications}
                      onChange={(e) => setFormData({ ...formData, smsNotifications: e.target.checked })}
                    />
                    Enable Instant WhatsApp & SMS Notifications
                  </label>
                </div>
              </div>

              <Button type="submit" variant="primary" icon={Save}>
                Save Configuration
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
