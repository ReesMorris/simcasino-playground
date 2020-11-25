import React from 'react';
import Card from '../card';
import Heading from '../heading';
import Text from '../text';
import Styles from './sidebar.styles';

const Sidebar = () => {
  return (
    <Styles.Sidebar>
      <Card disabled>
        <Heading>Profile</Heading>
        <Text center>
          Please drag your game save directory, or the individual .profile file
          into the box on the left.
        </Text>
      </Card>
      <Card disabled>
        <Heading>Casino</Heading>
        <Text center>
          Please drag your game save directory, or the individual .casino file
          into the box on the left.
        </Text>
      </Card>
    </Styles.Sidebar>
  );
};

export default Sidebar;
