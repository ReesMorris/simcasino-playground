import React from 'react';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Styles from './icon.styles';

interface IconProps {
  weight?: IconPrefix;
  icon: IconName;
  title?: string;
  className?: string;
}

const Icon = ({ icon, weight = 'fas', title, className }: IconProps) => {
  return (
    <Styles.IconWrapper>
      <FontAwesomeIcon
        icon={[weight, icon]}
        title={title}
        className={className}
      />
    </Styles.IconWrapper>
  );
};

export default Icon;
