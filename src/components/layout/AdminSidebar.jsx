import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Compass, ExternalLink } from 'lucide-react';
import { adminNavLinks } from '../../routes/navigation';

export const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-header">
        <Compass size={24} color="#4ade80" />
        <span>Safari Admin</span>
      </div>

      <nav className="admin-nav">
        {adminNavLinks.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'admin-nav-item active' : 'admin-nav-item'
              }
              end={item.exact}
            >
              {Icon && <Icon size={18} />}
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="admin-sidebar-footer">
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--text-inverse-muted)',
            fontSize: '0.85rem',
            textDecoration: 'none'
          }}
        >
          <ExternalLink size={16} />
          <span>Back to Main Site</span>
        </Link>
      </div>
    </aside>
  );
};
