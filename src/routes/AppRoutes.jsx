import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import { PublicLayout } from '../components/layout/PublicLayout';
import { AdminLayout } from '../components/layout/AdminLayout';

// Public Pages
import { HomePage } from '../pages/public/HomePage';
import { SafariPackagesPage } from '../pages/public/SafariPackagesPage';
import { PackageDetailPage } from '../pages/public/PackageDetailPage';
import { PlacesToVisitPage } from '../pages/public/PlacesToVisitPage';
import { SafariRoutesPage } from '../pages/public/SafariRoutesPage';
import { BookingPage } from '../pages/public/BookingPage';
import { BookingConfirmationPage } from '../pages/public/BookingConfirmationPage';
import { MyBookingsPage } from '../pages/public/MyBookingsPage';
import { GalleryPage } from '../pages/public/GalleryPage';
import { ReviewsPage } from '../pages/public/ReviewsPage';
import { ContactPage } from '../pages/public/ContactPage';
import { NotFoundPage } from '../pages/public/NotFoundPage';

// Admin Pages
import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage';
import { AdminBookingsPage } from '../pages/admin/AdminBookingsPage';
import { AdminPackagesPage } from '../pages/admin/AdminPackagesPage';
import { AdminJeepsPage } from '../pages/admin/AdminJeepsPage';
import { AdminRoutesPlacesPage } from '../pages/admin/AdminRoutesPlacesPage';
import { AdminReviewsPage } from '../pages/admin/AdminReviewsPage';
import { AdminSettingsPage } from '../pages/admin/AdminSettingsPage';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Pages Route Tree */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="packages" element={<SafariPackagesPage />} />
        <Route path="packages/:id" element={<PackageDetailPage />} />
        <Route path="places" element={<PlacesToVisitPage />} />
        <Route path="routes" element={<SafariRoutesPage />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="booking/confnpm run irmed" element={<BookingConfirmationPage />} />
        <Route path="my-bookings" element={<MyBookingsPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* Admin Panel Route Tree */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboardPage />} />
        <Route path="bookings" element={<AdminBookingsPage />} />
        <Route path="packages" element={<AdminPackagesPage />} />
        <Route path="jeeps" element={<AdminJeepsPage />} />
        <Route path="routes-places" element={<AdminRoutesPlacesPage />} />
        <Route path="reviews" element={<AdminReviewsPage />} />
        <Route path="settings" element={<AdminSettingsPage />} />
      </Route>
    </Routes>
  );
};
