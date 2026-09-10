import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { routesData } from '../../data/routesData';
import { RouteCardPlaceholder } from '../../components/modules/routes/RouteCardPlaceholder';
import { PlaceholderBox } from '../../components/common/PlaceholderBox';
import { Map, ShieldAlert } from 'lucide-react';

export const SafariRoutesPage = () => {
  return (
    <div>
      <PageHeader
        title="Yercaud Safari Routes & Trails"
        subtitle="Detailed terrain maps, elevation checkpoints, and off-road trail itineraries across the Shevaroy mountain range."
      />

      <div className="container" style={{ paddingBottom: '4rem' }}>
        {/* Interactive Map Visual Placeholder */}
        <PlaceholderBox
          title="Interactive Trail Map View"
          description="GPS-tracked route profiles with elevation curves, live trail conditions, and viewpoints are mapped here."
          icon={Map}
          style={{ marginBottom: '2.5rem' }}
        />

        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Active Safari Route Profiles</h2>
        
        {/* Routes Grid */}
        <div className="grid-3">
          {routesData.map((route) => (
            <RouteCardPlaceholder key={route.id} route={route} />
          ))}
        </div>
      </div>
    </div>
  );
};
