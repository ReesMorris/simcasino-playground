import React from 'react';
import Styles from './page-wrapper.styles';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <Styles.PageWrapper>{children}</Styles.PageWrapper>;
};

export default PageWrapper;
