import React from 'react';
import Styles from './text.styles';

interface TextProps {
  as?: React.ElementType;
  children: React.ReactNode;
}

const Text = ({ as, children }: TextProps) => {
  return <Styles.Text as={as || 'p'}>{children}</Styles.Text>;
};

export default Text;
