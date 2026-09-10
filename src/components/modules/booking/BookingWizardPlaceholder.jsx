import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Compass, Calendar, Users, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';
import { packagesData } from '../../../data/packagesData';
import { TIME_SLOTS } from '../../../utils/constants';
import { formatCurrency } from '../../../utils/formatters';
import { useBooking } from '../../../context/BookingContext';
import { Button } from '../../common/Button';
import { Card, CardHeader, CardBody } from '../../common/Card';
import { Badge } from '../../common/Badge';

export const BookingWizardPlaceholder = () => {
  const [searchParams] = useSearchParams();
  const initialPackageId = searchParams.get('package') || packagesData[0].id;
  const navigate = useNavigate();
  const { draftBooking, updateDraft, submitBooking } = useBooking();

  const [step, setStep] = useState(1);
  const [selectedPkgId, setSelectedPkgId] = useState(initialPackageId);
  const [date, setDate] = useState('2026-09-12');
  const [slot, setSlot] = useState(TIME_SLOTS[0]);
  const [guests, setGuests] = useState(4);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pickup, setPickup] = useState('Yercaud Lake Roundabout');
  const [notes, setNotes] = useState('');

  const activePackage = packagesData.find((p) => p.id === selectedPkgId) || packagesData[0];

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Final confirmation
      const newBooking = submitBooking({
        packageId: activePackage.id,
        packageName: activePackage.title,
        safariDate: date,
        timeSlot: slot,
        guestsCount: guests,
        customerName: name || 'Guest Explorer',
        customerPhone: phone || '+91 98765 00000',
        customerEmail: email || 'guest@example.com',
        pickupLocation: pickup,
        specialRequests: notes,
        totalAmount: activePackage.price
      });
      navigate(`/booking/confirmed?id=${newBooking.id}`);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Wizard Step Indicators */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', position: 'relative' }}>
        <div style={{ textAlign: 'center', flex: 1 }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              margin: '0 auto 0.5rem',
              background: step >= 1 ? 'var(--color-primary-600)' : 'var(--bg-surface-subtle)',
              color: step >= 1 ? '#ffffff' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700
            }}
          >
            1
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: step === 1 ? 700 : 500 }}>Select Safari</span>
        </div>

        <div style={{ textAlign: 'center', flex: 1 }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              margin: '0 auto 0.5rem',
              background: step >= 2 ? 'var(--color-primary-600)' : 'var(--bg-surface-subtle)',
              color: step >= 2 ? '#ffffff' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700
            }}
          >
            2
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: step === 2 ? 700 : 500 }}>Date & Pickup</span>
        </div>

        <div style={{ textAlign: 'center', flex: 1 }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              margin: '0 auto 0.5rem',
              background: step >= 3 ? 'var(--color-primary-600)' : 'var(--bg-surface-subtle)',
              color: step >= 3 ? '#ffffff' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700
            }}
          >
            3
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: step === 3 ? 700 : 500 }}>Guest Details & Confirm</span>
        </div>
      </div>

      {/* Wizard Body */}
      <Card>
        <CardBody>
          <form onSubmit={handleNextStep}>
            {step === 1 && (
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Choose Your Safari Package</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                  {packagesData.map((pkg) => (
                    <label
                      key={pkg.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1rem',
                        borderRadius: 'var(--radius-md)',
                        border: selectedPkgId === pkg.id ? '2px solid var(--color-primary-600)' : '1px solid var(--border-subtle)',
                        background: selectedPkgId === pkg.id ? 'var(--color-primary-50)' : 'transparent',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <input
                          type="radio"
                          name="selectedPackage"
                          value={pkg.id}
                          checked={selectedPkgId === pkg.id}
                          onChange={() => setSelectedPkgId(pkg.id)}
                        />
                        <div>
                          <strong style={{ display: 'block', fontSize: '1rem' }}>{pkg.title}</strong>
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{pkg.duration} • {pkg.capacity}</span>
                        </div>
                      </div>
                      <span style={{ fontWeight: 800, color: 'var(--color-primary-600)' }}>
                        {formatCurrency(pkg.price)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Select Date & Preferred Slot</h3>
                <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
                  <div className="form-group">
                    <label className="form-label">Safari Date</label>
                    <input
                      type="date"
                      required
                      className="form-input"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Number of Guests</label>
                    <select
                      className="form-select"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                    >
                      <option value="1">1 Person (Private Jeep)</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="5">5 Persons</option>
                      <option value="6">6 Persons (Full Jeep)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label">Time Slot</label>
                  <select
                    className="form-select"
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                  >
                    {TIME_SLOTS.map((s, idx) => (
                      <option key={idx} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label">Pickup Point in Yercaud</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Yercaud Lake Roundabout or Resort Name"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Guest Information & Summary</h3>
                <div className="grid-2" style={{ marginBottom: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Primary Guest Name</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="e.g. Vikram Chandran"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">WhatsApp Contact Number</label>
                    <input
                      type="tel"
                      required
                      className="form-input"
                      placeholder="+91 98401 23456"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="vikram@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label">Special Requests (Optional)</label>
                  <textarea
                    className="form-textarea"
                    rows="2"
                    placeholder="Senior citizens, camera permits, etc."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                {/* Summary Box */}
                <div style={{ background: 'var(--bg-surface-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>Booking Summary</h4>
                  <p style={{ margin: '0.25rem 0', fontSize: '0.85rem' }}><strong>Package:</strong> {activePackage.title}</p>
                  <p style={{ margin: '0.25rem 0', fontSize: '0.85rem' }}><strong>Date & Slot:</strong> {date} ({slot})</p>
                  <p style={{ margin: '0.25rem 0', fontSize: '0.85rem' }}><strong>Pickup:</strong> {pickup}</p>
                  <p style={{ margin: '0.5rem 0 0', fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-primary-600)' }}>
                    Total Payable at Pickup: {formatCurrency(activePackage.price)}
                  </p>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
              {step > 1 ? (
                <Button variant="secondary" onClick={() => setStep(step - 1)}>
                  Back
                </Button>
              ) : <div />}

              <Button type="submit" variant="primary">
                {step === 3 ? 'Confirm Safari Booking' : 'Continue'}
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};
