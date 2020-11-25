import React from 'react';
import Styles from './label.styles';

interface LabelProps {
  as?: React.ElementType;
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
}
const Label = ({ as, htmlFor, className, children }: LabelProps) => {
  return (
    <Styles.Label as={as} htmlFor={htmlFor} className={className}>
      {children}
    </Styles.Label>
  );
};

export default Label;
