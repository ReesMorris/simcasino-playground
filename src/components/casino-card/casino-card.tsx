import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { randomiseSlotGames } from '../../redux/casino/actions';
import { ApplicationState } from '../../redux/root-reducer';
import Button from '../button';
import Card from '../card';
import Heading from '../heading';
import Text from '../text';
import VersionValidator from '../version-validator';

const CasinoCard = () => {
  const { casino } = useSelector((state: ApplicationState) => state);
  const dispatch = useDispatch();

  return (
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
          <Button onClick={() => dispatch(randomiseSlotGames())}>
            Randomise slot games
          </Button>
          <VersionValidator />
        </>
      )}
    </Card>
  );
};

export default CasinoCard;
