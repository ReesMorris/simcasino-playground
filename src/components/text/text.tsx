import React from 'react';
import Styles from './text.styles';

interface TextProps {
  as?: React.ElementType;
  bold?: boolean;
  center?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Text = ({ as, bold, center, className, children }: TextProps) => {
  return (
    <Styles.Text
      as={as || 'p'}
      className={className}
      bold={bold}
      center={center}
    >
      {children}
    </Styles.Text>
  );
};

export default Text;
