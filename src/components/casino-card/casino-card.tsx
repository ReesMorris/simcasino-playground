import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearBankLoans, randomiseSlotGames } from '../../redux/casino/actions';
import { ApplicationState } from '../../redux/root-reducer';
import Button from '../button';
import ButtonRow from '../button-row';
import Card from '../card';
import FormGroup from '../form-group';
import Heading from '../heading';
import Label from '../label';
import Text from '../text';
import VersionValidator from '../version-validator';

const CasinoCard = () => {
  const { casino } = useSelector((state: ApplicationState) => state);
  const dispatch = useDispatch();

  const download = () => {
    if (casino.meta) {
      const element = document.createElement('a');

      const content = `${casino.meta.md5hash}\n${JSON.stringify(casino.data)}`;
      const file = new Blob([content], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = casino.meta.fileName;
      document.body.appendChild(element);
      element.click();
    }
  };

  return (
    <Card disabled={!casino.data && !casino.error}>
      <Heading>
        Casino {casino.meta && `(${casino.meta.fileName.split('.')[0]})`}
      </Heading>
      {!casino.data && !casino.error && (
        <Text center>
          Please drag your game save directory, or the individual .casino file
          into the box on the left.
        </Text>
      )}
      {casino.error && <Text>{casino.error}</Text>}
      {casino.data && (
        <>
          <FormGroup>
            <Label as='div'>Tools</Label>
            <FormGroup small>
              <ButtonRow
                id='randomgames'
                icon='dice'
                label='Randomise Slot Games'
                onClick={() => dispatch(randomiseSlotGames())}
                tooltip="Will randomise each slot machine's game. Recommended if you apply bulk changes a lot. Does not affect machines that only have one game."
              />
            </FormGroup>
            <FormGroup small>
              <ButtonRow
                id='loans'
                icon='piggy-bank'
                label={`Clear Bank Loans (${casino.data.bank.Loans.length})`}
                onClick={() => dispatch(clearBankLoans())}
                tooltip='Writes off all bank loans and outstanding loan debt.'
              />
            </FormGroup>
          </FormGroup>

          <FormGroup>
            <VersionValidator />
          </FormGroup>

          <FormGroup>
            <Button onClick={() => download()}>Download .Casino</Button>
          </FormGroup>
        </>
      )}
    </Card>
  );
};

export default CasinoCard;
