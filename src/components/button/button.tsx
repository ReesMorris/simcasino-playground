import React from 'react';
import Styles from './button.styles';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  id?: string;
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
  'aria-labelledby'?: string;
}

const Button = ({
  type = 'button',
  className,
  onClick,
  onMouseDown,
  onMouseUp,
  onBlur,
  'aria-labelledby': ariaLabelledBy,
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
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </Styles.Button>
  );
};

export default Button;
