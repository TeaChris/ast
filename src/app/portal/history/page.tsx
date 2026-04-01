import React from 'react';
import AppointmentsView from '../components/history/AppointmentsView';

export const metadata = {
  title: 'My Appointments | University Appointment System',
};

export default function HistoryRoute() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <AppointmentsView />
    </div>
  );
}
