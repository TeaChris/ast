import React from 'react';
import ProfileView from '../components/profile/ProfileView';

export const metadata = {
  title: 'Profile Settings | University Appointment System',
};

export default function ProfileRoute() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <ProfileView />
    </div>
  );
}
