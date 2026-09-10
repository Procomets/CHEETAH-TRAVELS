import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { BookingWizardPlaceholder } from '../../components/modules/booking/BookingWizardPlaceholder';

export const BookingPage = () => {
  return (
    <div>
      <PageHeader
        title="Book Your Jeep Safari"
        subtitle="Reserve your private 4x4 Thar or Gypsy safari in 3 simple steps. Pay securely at pickup."
      />

      <div className="container" style={{ paddingBottom: '4rem' }}>
        <BookingWizardPlaceholder />
      </div>
    </div>
  );
};
