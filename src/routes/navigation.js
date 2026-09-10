import {
  Compass,
  MapPin,
  Route as RouteIcon,
  CalendarCheck,
  Image,
  MessageSquareQuote,
  PhoneCall,
  LayoutDashboard,
  Truck,
  BookmarkCheck,
  Settings,
  ShieldAlert
} from 'lucide-react';

export const publicNavLinks = [
  { path: '/', label: 'Home', exact: true },
  { path: '/packages', label: 'Safari Packages', icon: Compass },
  { path: '/places', label: 'Places to Visit', icon: MapPin },
  { path: '/routes', label: 'Safari Routes', icon: RouteIcon },
  { path: '/gallery', label: 'Gallery', icon: Image },
  { path: '/reviews', label: 'Reviews', icon: MessageSquareQuote },
  { path: '/contact', label: 'Contact', icon: PhoneCall },
  { path: '/my-bookings', label: 'My Bookings', icon: BookmarkCheck }
];

export const adminNavLinks = [
  { path: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { path: '/admin/bookings', label: 'Bookings Management', icon: CalendarCheck },
  { path: '/admin/packages', label: 'Safari Packages', icon: Compass },
  { path: '/admin/jeeps', label: 'Jeep Fleet & Drivers', icon: Truck },
  { path: '/admin/routes-places', label: 'Routes & Places', icon: RouteIcon },
  { path: '/admin/reviews', label: 'Customer Reviews', icon: MessageSquareQuote },
  { path: '/admin/settings', label: 'Settings', icon: Settings }
];
