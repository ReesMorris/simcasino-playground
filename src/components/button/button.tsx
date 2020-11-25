import React from 'react';
import Styles from './button.styles';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ type = 'button', onClick, children }: ButtonProps) => {
  return (
    <Styles.Button type={type} onClick={onClick}>
      {children}
    </Styles.Button>
  );
};

export default Button;
