import React from 'react';

export const PageHeader = ({ title, subtitle, children }) => {
  return (
    <div className="page-header">
      <div className="container">
        <h1 className="page-header-title">{title}</h1>
        {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
        {children && <div style={{ marginTop: '1rem' }}>{children}</div>}
      </div>
    </div>
  );
};
