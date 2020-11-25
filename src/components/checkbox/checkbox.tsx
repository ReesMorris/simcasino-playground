import React from 'react';
import ReactTooltip from 'react-tooltip';
import Icon from '../icon';
import Styles from './checkbox.styles';

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  tooltip?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ id, label, checked, tooltip, onChange }: CheckboxProps) => {
  return (
    <Styles.CheckboxWrapper>
      <Styles.CheckboxContainer>
        <Styles.Checkbox
          type='checkbox'
          id={id}
          name={id}
          checked={checked}
          onChange={onChange}
        />
        <Styles.CheckboxIcon icon='check' weight='fas' visible={checked} />
      </Styles.CheckboxContainer>

      <Styles.CheckboxLabel htmlFor={id}>{label}</Styles.CheckboxLabel>

      {tooltip && (
        <>
          <Styles.TooltipContainer data-tip={tooltip}>
            <Styles.Tooltip icon='question-circle' weight='fas' />
          </Styles.TooltipContainer>
          <ReactTooltip effect='solid' />
        </>
      )}
    </Styles.CheckboxWrapper>
  );
};

export default Checkbox;
