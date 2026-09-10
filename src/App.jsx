import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import { AuthProvider } from './context/AuthContext';
import { AppRoutes } from './routes/AppRoutes';
import { WhatsAppFloat } from './components/common/WhatsAppFloat';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <BookingProvider>
          <AppRoutes />
          <WhatsAppFloat />
        </BookingProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
