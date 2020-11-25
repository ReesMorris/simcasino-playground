import React from 'react';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Styles from './icon.styles';

interface IconProps {
  prefix?: IconPrefix;
  name: IconName;
  title?: string;
  className?: string;
}

const Icon = ({ name, prefix = 'fab', title, className }: IconProps) => {
  return (
    <Styles.IconWrapper>
      <FontAwesomeIcon
        icon={[prefix, name]}
        title={title}
        className={className}
      />
    </Styles.IconWrapper>
  );
};

export default Icon;
