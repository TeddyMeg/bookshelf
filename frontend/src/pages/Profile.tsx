import React from 'react';
import { ProfileForm } from '../components/ProfileForm';
import { useAppSelector } from '../hooks/redux';

export const Profile: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile</h1>
      <ProfileForm />
    </div>
  );
};