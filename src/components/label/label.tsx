import React from 'react';
import Styles from './label.styles';

interface LabelProps {
  className?: string;
  children: React.ReactNode;
}
const Label = ({ className, children }: LabelProps) => {
  return <Styles.Label className={className}>{children}</Styles.Label>;
};

export default Label;
