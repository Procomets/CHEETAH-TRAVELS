import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { GalleryGridPlaceholder } from '../../components/modules/gallery/GalleryGridPlaceholder';

export const GalleryPage = () => {
  return (
    <div>
      <PageHeader
        title="Safari Photo & Moments Gallery"
        subtitle="Moments captured on the trail: off-road climbs, mist-covered valleys, coffee blooms, and sunset ridges."
      />

      <div className="container" style={{ paddingBottom: '4rem' }}>
        <GalleryGridPlaceholder />
      </div>
    </div>
  );
};
