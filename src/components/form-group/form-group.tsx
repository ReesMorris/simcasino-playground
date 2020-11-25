import React from 'react';
import Styles from './form-group.styles';

interface FormGroupProps {
  small?: boolean;
  children: React.ReactNode;
}

const FormGroup = ({ small, children }: FormGroupProps) => {
  return <Styles.FormGroup small={small}>{children}</Styles.FormGroup>;
};

export default FormGroup;
