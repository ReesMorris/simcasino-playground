import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCash, updateSetting } from '../../redux/profile/actions';
import { ApplicationState } from '../../redux/root-reducer';
import Button from '../button';
import Card from '../card';
import Checkbox from '../checkbox';
import FormGroup from '../form-group';
import Heading from '../heading';
import Input from '../input';
import Label from '../label';
import Text from '../text';
import Tooltip from '../tooltip';

const ProfileCard = () => {
  const { profile } = useSelector((state: ApplicationState) => state);
  const dispatch = useDispatch();

  const download = () => {
    const element = document.createElement('a');
    const file = new Blob([JSON.stringify(profile.data)], {
      type: 'text/plain'
    });
    element.href = URL.createObjectURL(file);
    element.download = 'Profile.profile';
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Card disabled={!profile.data && !profile.error}>
      <Heading>Profile</Heading>

      {!profile.data && !profile.error && (
        <Text center>
          Please drag your game save directory, or the individual .profile file
          into the box on the left.
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
            <Button onClick={download}>Download .profile</Button>
          </FormGroup>
        </>
      )}
    </Card>
  );
};

export default ProfileCard;
