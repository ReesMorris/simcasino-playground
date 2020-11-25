import React from 'react';
import Styles from './input.styles';

interface InputTypes {
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, value, onChange }: InputTypes) => {
  return (
    <Styles.InputWrapper>
      <Styles.InputLabel>{label}</Styles.InputLabel>
      <Styles.Input value={value} onChange={onChange} />
    </Styles.InputWrapper>
  );
};

export default Input;
