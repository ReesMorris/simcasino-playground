import React from 'react';
import Styles from './wrapper.styles';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return <Styles.Wrapper>{children}</Styles.Wrapper>;
};

export default Wrapper;
