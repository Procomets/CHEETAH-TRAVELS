import React from 'react';

export const PlaceholderBox = ({
  title,
  description,
  icon: Icon,
  actionText,
  onAction,
  className = '',
  children
}) => {
  return (
    <div className={`placeholder-box ${className}`.trim()}>
      {Icon && <Icon className="placeholder-box-icon" />}
      {title && <h3 className="placeholder-box-title">{title}</h3>}
      {description && <p className="placeholder-box-desc">{description}</p>}
      {children}
      {actionText && onAction && (
        <button className="btn btn-secondary btn-sm" onClick={onAction} style={{ marginTop: '0.5rem' }}>
          {actionText}
        </button>
      )}
    </div>
  );
};
