import { IconName } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import Icon from '../icon';
import Tooltip from '../tooltip';
import Styles from './button-row.styles';

interface ButtonRowProps {
  icon: IconName;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  tooltip?: string;
}

const ButtonRow = ({ icon, label, onClick, tooltip }: ButtonRowProps) => {
  return (
    <Styles.ButtonRow>
      <Styles.SmallButton onClick={onClick}>
        <Icon icon={icon} />
      </Styles.SmallButton>
      <Styles.ButtonLabel>{label}</Styles.ButtonLabel>

      {tooltip && (
        <>
          <Styles.TooltipContainer data-tip={tooltip}>
            <Styles.Tooltip icon='question-circle' weight='fas' />
          </Styles.TooltipContainer>
        </>
      )}
    </Styles.ButtonRow>
  );
};

export default ButtonRow;
