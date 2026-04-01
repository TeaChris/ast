import React from 'react';
import BookingPage from '../components/booking/BookingPage';

export const metadata = {
  title: 'Book Appointment | University Appointment System',
};

export default function BookRoute() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <BookingPage />
    </div>
  );
}
