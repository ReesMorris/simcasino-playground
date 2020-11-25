import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCash, updateSetting } from '../../redux/profile/actions';
import { ApplicationState } from '../../redux/root-reducer';
import Card from '../card';
import Heading from '../heading';
import Checkbox from '../checkbox';
import Input from '../input';
import Text from '../text';
import Styles from './sidebar.styles';
import Label from '../label';
import Button from '../button';
import FormGroup from '../form-group';
import compareVersion from '../../utils/compare-version';

const Sidebar = () => {
  const { profile, casino } = useSelector((state: ApplicationState) => state);
  const dispatch = useDispatch();
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
            <FormGroup>
              <Input
                id='cash'
                label='Cash'
                type='number'
                value={profile.data.Cash.toString()}
                onChange={e => dispatch(updateCash(e.target.value))}
              />
            </FormGroup>

            <FormGroup>
              <Label as='div'>Settings</Label>
              <FormGroup small>
                <Checkbox
                  id='AutoDelivery'
                  label='AutoDelivery'
                  checked={profile.data.AutoDelivery}
                  tooltip='If enabled, the game handles stock management for you'
                  onChange={e =>
                    dispatch(updateSetting(e.target.name, e.target.checked))
                  }
                />
              </FormGroup>
              <FormGroup small>
                <Checkbox
                  id='InstantResearch'
                  label='InstantResearch'
                  checked={profile.data.InstantResearch}
                  tooltip='If enabled, a research can be sped up by right-clicking it'
                  onChange={e =>
                    dispatch(updateSetting(e.target.name, e.target.checked))
                  }
                />
              </FormGroup>
              <FormGroup small>
                <Checkbox
                  id='InstantStaff'
                  label='InstantStaff'
                  checked={profile.data.InstantStaff}
                  tooltip='If enabled, staff will arrive immediately when needed'
                  onChange={e =>
                    dispatch(updateSetting(e.target.name, e.target.checked))
                  }
                />
              </FormGroup>
              <FormGroup small>
                <Checkbox
                  id='UnlimitedCash'
                  label='UnlimitedCash'
                  checked={profile.data.UnlimitedCash}
                  tooltip='If enabled, you can still spend money with a negative balance'
                  onChange={e =>
                    dispatch(updateSetting(e.target.name, e.target.checked))
                  }
                />
              </FormGroup>
            </FormGroup>

            <FormGroup>
              <Button>Download profile</Button>
            </FormGroup>
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
