import React from 'react';
import { Compass, Home } from 'lucide-react';
import { Button } from '../../components/common/Button';

export const NotFoundPage = () => {
  return (
    <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
      <Compass size={64} color="var(--color-primary-600)" style={{ margin: '0 auto 1.5rem' }} />
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Off The Trail!</h2>
      <p style={{ color: 'var(--text-muted)', maxWidth: '450px', margin: '0 auto 2rem' }}>
        The page you are looking for has navigated off the map or doesn't exist.
      </p>
      <Button to="/" variant="primary" icon={Home}>
        Return to Home Trail
      </Button>
    </div>
  );
};
