import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { CONTACT_INFO } from '../../utils/constants';
import { ContactFormPlaceholder } from '../../components/modules/contact/ContactFormPlaceholder';
import { Card, CardBody } from '../../components/common/Card';
import { PlaceholderBox } from '../../components/common/PlaceholderBox';

export const ContactPage = () => {
  return (
    <div>
      <PageHeader
        title="Contact Safari Office"
        subtitle="Need help with safari bookings, private group expeditions, or local pickups in Yercaud? Talk to our team."
      />

      <div className="container" style={{ paddingBottom: '4rem' }}>
        <div className="grid-2" style={{ alignItems: 'flex-start' }}>
          {/* Left Column: Form */}
          <ContactFormPlaceholder />

          {/* Right Column: Contact info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Card>
              <CardBody>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Operating Hub & Pickup Desk</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <MapPin size={20} color="var(--color-primary-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong>Main Desk:</strong>
                      <p style={{ color: 'var(--text-muted)', margin: 0 }}>{CONTACT_INFO.address}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <Phone size={20} color="var(--color-primary-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong>Booking Helpline:</strong>
                      <p style={{ color: 'var(--text-muted)', margin: 0 }}>{CONTACT_INFO.phone} (WhatsApp available)</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <Mail size={20} color="var(--color-primary-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong>Email Support:</strong>
                      <p style={{ color: 'var(--text-muted)', margin: 0 }}>{CONTACT_INFO.email}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <Clock size={20} color="var(--color-primary-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong>Hours:</strong>
                      <p style={{ color: 'var(--text-muted)', margin: 0 }}>{CONTACT_INFO.operatingHours}</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            <PlaceholderBox
              title="Location Map"
              description="Interactive Google Maps embed for Safari Boarding Station & Pickup Parking."
              icon={MapPin}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
