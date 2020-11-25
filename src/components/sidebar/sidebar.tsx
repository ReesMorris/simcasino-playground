import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../redux/root-reducer';
import Card from '../card';
import Heading from '../heading';
import Input from '../input';
import Text from '../text';
import Styles from './sidebar.styles';

const Sidebar = () => {
  const { profile, casino } = useSelector((state: ApplicationState) => state);
  return (
    <Styles.Sidebar>
      <Card disabled={!profile.data && !profile.error}>
        <Heading>Profile</Heading>
        {!profile.data && !profile.error && (
          <Text center>
            Please drag your game save directory, or the individual .profile
            file into the box on the left.
          </Text>
        )}
        {profile.error && <Text>{profile.error}</Text>}
        {profile.data && (
          <>
            <Input label='Cash' value={profile.data.Cash.toString()} />
            <Text>Cash: ${profile.data.Cash}</Text>
            <Text>
              AutoDelivery: {profile.data.AutoDelivery ? 'Enabled' : 'Disabled'}
            </Text>
            <Text>
              InstantResearch:{' '}
              {profile.data.InstantResearch ? 'Enabled' : 'Disabled'}
            </Text>
            <Text>
              InstantStaff: {profile.data.InstantStaff ? 'Enabled' : 'Disabled'}
            </Text>
            <Text>
              UnlimitedCash:{' '}
              {profile.data.UnlimitedCash ? 'Enabled' : 'Disabled'}
            </Text>
          </>
        )}
      </Card>
      <Card disabled={!casino.data && !casino.error}>
        <Heading>Casino</Heading>
        {!casino.data && !casino.error && (
          <Text center>
            Please drag your game save directory, or the individual .casino file
            into the box on the left.
          </Text>
        )}
        {casino.error && <Text>{casino.error}</Text>}
        {casino.data && (
          <>
            <Text>Runtime: {casino.data.system.Runtime}</Text>
            <Text>
              totalGameSeconds: {casino.data.gameTimer.totalGameSeconds}
            </Text>
          </>
        )}
      </Card>
    </Styles.Sidebar>
  );
};

export default Sidebar;
