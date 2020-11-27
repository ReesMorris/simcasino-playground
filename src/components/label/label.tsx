import React from 'react';
import Styles from './label.styles';

interface LabelProps {
  as?: React.ElementType;
  id?: string;
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
}
const Label = ({ id, as, htmlFor, className, children }: LabelProps) => {
  return (
    <Styles.Label id={id} as={as} htmlFor={htmlFor} className={className}>
      {children}
    </Styles.Label>
  );
};

export default Label;
