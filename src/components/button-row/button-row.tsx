import { IconName } from '@fortawesome/fontawesome-svg-core';
import React, { useState } from 'react';
import Icon from '../icon';
import Styles from './button-row.styles';

interface ButtonRowProps {
  icon: IconName;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  tooltip?: string;
}

const ButtonRow = ({ icon, label, onClick, tooltip }: ButtonRowProps) => {
  const [pressed, setPressed] = useState(false);

  return (
    <Styles.ButtonRow>
      <Styles.SmallButton
        pressed={pressed}
        onClick={onClick}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onBlur={() => setPressed(false)}
      >
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
