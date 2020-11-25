import React from 'react';
import Styles from './input.styles';

interface InputProps {
  id: string;
  label: string;
  value: string;
  type?: string;
  max?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ id, label, value, type, max, onChange }: InputProps) => {
  return (
    <Styles.InputWrapper>
      <Styles.InputLabel htmlFor={id}>{label}</Styles.InputLabel>
      <Styles.Input
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        type={type}
        max={max}
      />
    </Styles.InputWrapper>
  );
};

export default Input;
