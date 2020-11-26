import React from 'react';
import Styles from './button.styles';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
  type = 'button',
  className,
  onClick,
  children
}: ButtonProps) => {
  return (
    <Styles.Button type={type} className={className} onClick={onClick}>
      {children}
    </Styles.Button>
  );
};

export default Button;
