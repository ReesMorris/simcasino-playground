import React from 'react';
import Card from '../card';
import FileDrop from '../file-drop';
import Tooltip from '../tooltip';
import Styles from './main.styles';

const Main = () => {
  return (
    <Styles.Main>
      <Card>
        <FileDrop />
        <Tooltip />
      </Card>
    </Styles.Main>
  );
};

export default Main;
