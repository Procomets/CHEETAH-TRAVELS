import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { packagesData } from '../../data/packagesData';
import { PackageCardPlaceholder } from '../../components/modules/packages/PackageCardPlaceholder';

export const SafariPackagesPage = () => {
  const [filterDifficulty, setFilterDifficulty] = useState('All');

  const filteredPackages = filterDifficulty === 'All'
    ? packagesData
    : packagesData.filter(pkg => pkg.difficulty.toLowerCase().includes(filterDifficulty.toLowerCase()));

  return (
    <div>
      <PageHeader
        title="Yercaud Safari Packages"
        subtitle="Choose from scenic sunrise trails, extreme forest off-roading, or all-day heritage circuits."
      />

      <div className="container" style={{ paddingBottom: '4rem' }}>
        {/* Filter Bar */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {['All', 'Moderate', 'Adventurous', 'Easy'].map((diff) => (
            <button
              key={diff}
              onClick={() => setFilterDifficulty(diff)}
              className={`btn btn-sm ${filterDifficulty === diff ? 'btn-primary' : 'btn-secondary'}`}
            >
              {diff === 'All' ? 'All Packages' : `${diff} Difficulty`}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid-3">
          {filteredPackages.map((pkg) => (
            <PackageCardPlaceholder key={pkg.id} item={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
};
