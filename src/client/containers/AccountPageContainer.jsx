import React from 'react';
import UserProfileHeader from '../components/UserProfileHeader';
import Navigation from '../components/Navigation';
import AccountPage from '../components/AccountPage';

const AccountPageContainer = () => {
  return (
    <>
      <UserProfileHeader />
      <AccountPage />
      <Navigation />
    </>
  );
};

export default AccountPageContainer;
