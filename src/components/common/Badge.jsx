import React from 'react';

export const Badge = ({
  children,
  variant = 'neutral',
  className = '',
  icon: Icon
}) => {
  return (
    <span className={`badge badge-${variant} ${className}`.trim()}>
      {Icon && <Icon size={12} />}
      {children}
    </span>
  );
};
