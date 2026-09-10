import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Compass, Shield, CalendarCheck } from 'lucide-react';
import { publicNavLinks } from '../../routes/navigation';
import { Button } from '../common/Button';

export const Navbar = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="navbar-inner">
          <Link to="/" className="nav-brand">
            <Compass size={28} />
            <span>Yercaud Safari</span>
          </Link>

          <nav>
            <ul className="nav-links">
              {publicNavLinks.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                    end={item.exact}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <Button to="/booking" variant="primary" size="sm" icon={CalendarCheck}>
              Book Safari
            </Button>
            <Button to="/admin" variant="secondary" size="sm" icon={Shield}>
              Admin
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
