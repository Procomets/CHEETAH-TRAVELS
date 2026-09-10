import React from 'react';
import { ShieldCheck, Bell, UserCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AdminNavbar = () => {
  const { currentUser } = useAuth();

  return (
    <header className="admin-topbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <ShieldCheck size={20} color="var(--color-primary-600)" />
        <span style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>
          Operations & Fleet Management Console
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <button
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center'
          }}
          title="Notifications"
        >
          <Bell size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <UserCircle size={28} color="var(--color-primary-600)" />
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>
              {currentUser?.name || 'Administrator'}
            </p>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>
              {currentUser?.email || 'admin@yercaudjeepsafari.com'}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
