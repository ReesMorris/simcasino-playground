import React from 'react';
import Tooltip from '../tooltip';
import Styles from './form-group.styles';

interface FormGroupProps {
  small?: boolean;
  children: React.ReactNode;
}

const FormGroup = ({ small, children }: FormGroupProps) => {
  return (
    <Styles.FormGroup small={small}>
      {children}
      <Tooltip />
    </Styles.FormGroup>
  );
};

export default FormGroup;
