import React from 'react';
import Styles from './button.styles';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseDown?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  onMouseUp?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  onBlur?: ((event: React.FocusEvent<HTMLButtonElement>) => void) | undefined;
}

const Button = ({
  type = 'button',
  className,
  onClick,
  onMouseDown,
  onMouseUp,
  onBlur,
  children
}: ButtonProps) => {
  return (
    <Styles.Button
      type={type}
      className={className}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onBlur={onBlur}
    >
      {children}
    </Styles.Button>
  );
};

export default Button;
