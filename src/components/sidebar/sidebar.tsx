import React from 'react';
import Styles from './sidebar.styles';
import ProfileCard from '../profile-card';
import CasinoCard from '../casino-card';

const Sidebar = () => {
  return (
    <Styles.Sidebar>
      <ProfileCard />
      <CasinoCard />
    </Styles.Sidebar>
  );
};

export default Sidebar;
