import React from 'react';
import Styles from './heading.styles';

interface HeadingProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const Heading = ({ as, className, children }: HeadingProps) => {
  return (
    <Styles.Heading as={as || 'h1'} className={className}>
      {children}
    </Styles.Heading>
  );
};

export default Heading;
