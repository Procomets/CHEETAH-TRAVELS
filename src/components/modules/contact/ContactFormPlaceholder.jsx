import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../../common/Card';
import { Button } from '../../common/Button';

export const ContactFormPlaceholder = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Custom Jeep Safari Group',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Card>
      <CardHeader
        title="Send a Safari Inquiry"
        subtitle="Have special group requirements, corporate trips, or custom trails? Reach out to our operators."
      />
      <CardBody>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <CheckCircle size={48} color="var(--status-success)" style={{ margin: '0 auto 1rem' }} />
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Inquiry Received!</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Our Yercaud safari coordinator will call or WhatsApp you within 30 minutes.
            </p>
            <Button variant="secondary" size="sm" onClick={() => setSubmitted(false)}>
              Send Another Inquiry
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                required
                className="form-input"
                placeholder="e.g. Anand Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">Mobile Number (WhatsApp preferred)</label>
                <input
                  type="tel"
                  required
                  className="form-input"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="anand@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Safari Interest</label>
              <select
                className="form-select"
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              >
                <option value="Auto Safari">Auto Safari</option>
                <option value="Car Safari">Car Safari</option>
                <option value="Jeep Safari">Jeep Safari</option>
                <option value="Night Jeep Safari">Night Jeep Safari</option>
                <option value="Corporate / Large Group Custom Trail">Corporate / Large Group Custom Trail</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Message / Details</label>
              <textarea
                className="form-textarea"
                rows="4"
                placeholder="Preferred dates, number of guests, special pickup location..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <Button type="submit" variant="primary" icon={Send} style={{ width: '100%' }}>
              Submit Inquiry
            </Button>
          </form>
        )}
      </CardBody>
    </Card>
  );
};
