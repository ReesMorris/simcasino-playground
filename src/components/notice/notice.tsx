import { IconName } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import Styles from './notice.styles';

interface NoticeProps {
  type?: 'none' | 'warning';
  icon?: IconName;
  text: string;
}

const Notice = ({ type = 'none', icon, text }: NoticeProps) => {
  return (
    <Styles.Notice>
      {icon && <Styles.NoticeIcon icon={icon} />}
      <Styles.NoticeText>{text}</Styles.NoticeText>
    </Styles.Notice>
  );
};

export default Notice;
