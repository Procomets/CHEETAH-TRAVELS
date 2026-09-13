import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { placesData } from '../../data/placesData';
import { PlaceCardPlaceholder } from '../../components/modules/places/PlaceCardPlaceholder';

export const PlacesToVisitPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Cliff Viewpoint', 'Sacred Shrine', 'Botanical & Gardens', 'Waterfalls & Forest', 'Parks & Aviary'];

  const filteredPlaces = activeCategory === 'All'
    ? placesData
    : placesData.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div>
      <PageHeader
        title="Places to Visit in Yercaud"
        subtitle="Discover breathtaking viewpoints, hidden waterfalls, and misty peaks accessible via 4x4 Jeep Safari."
        showBack={true}
        backTo="/"
        backLabel="Back to Home"
      />

      <div className="container" style={{ paddingBottom: '4rem' }}>
        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn btn-sm ${activeCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Places Grid */}
        <div className="grid-4">
          {filteredPlaces.map((place) => (
            <PlaceCardPlaceholder key={place.id} place={place} />
          ))}
        </div>
      </div>
    </div>
  );
};
