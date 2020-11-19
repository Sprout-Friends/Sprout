import React from 'react';
import UserProfileHeader from '../components/UserProfileHeader';
import Navigation from '../components/Navigation';
import AccountPage from '../components/AccountPage';

const AccountPageContainer = () => {
  return (
    <div className="flex flex-col h-screen">
      <UserProfileHeader type="account" />
      <AccountPage />
      <Navigation />
    </div>
  );
};

export default AccountPageContainer;
