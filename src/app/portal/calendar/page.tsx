import React from 'react';
import CalendarView from '../components/calendar/CalendarView';

export const metadata = {
  title: 'Calendar | University Appointment System',
};

export default function CalendarRoute() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <CalendarView />
    </div>
  );
}
