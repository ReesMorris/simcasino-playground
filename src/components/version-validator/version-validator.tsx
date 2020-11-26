import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../redux/root-reducer';
import compareVersion, { riskFactor } from '../../utils/compare-version';
import Card from '../card';
import Notice from '../notice';

const VersionValidator = () => {
  const { casino } = useSelector((state: ApplicationState) => state);
  const [diff, setDiff] = useState<riskFactor | null>(null);

  useEffect(() => {
    if (casino.data) {
      const runtimeConfig: any = {};
      casino.data.system.Runtime.split(',').forEach(item => {
        const split = item.trim().split('=');
        runtimeConfig[split[0]] = split[1];
      });
      setDiff(compareVersion(runtimeConfig.Version));
    }
  }, [casino.data]);

  if (diff === riskFactor.None)
    return (
      <Notice
        icon='check'
        text='Your game version matches this program, so you should be good!'
      />
    );
  if (diff === riskFactor.Patch)
    return (
      <Notice
        icon='check'
        text='Your game version is slightly ahead of this program, but it should be fine.'
      />
    );
  if (diff === riskFactor.Minor)
    return (
      <Notice
        icon='exclamation-triangle'
        text='Your game version is considerably ahead of this program. Make a backup first.'
      />
    );
  if (diff === riskFactor.Major)
    return (
      <Notice
        icon='times'
        text='Your game version is seriously ahead of this program. Make a backup first.'
      />
    );

  return null;
};

export default VersionValidator;
