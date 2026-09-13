import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const PageHeader = ({ 
  title, 
  subtitle, 
  children, 
  showBack = true, 
  backTo = "/", 
  backLabel = "Back to Home" 
}) => {
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    if (backTo) {
      navigate(backTo);
    } else if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="page-header">
      <div className="container">
        {showBack && (
          <Link 
            to={backTo || "/"} 
            onClick={handleBack} 
            className="page-header-back-btn"
            aria-label={backLabel}
          >
            <div className="page-header-back-icon">
              <ArrowLeft size={16} />
            </div>
            <span>{backLabel}</span>
          </Link>
        )}
        <h1 className="page-header-title">{title}</h1>
        {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
        {children && <div style={{ marginTop: '1rem' }}>{children}</div>}
      </div>
    </div>
  );
};
