import styled from 'styled-components';

interface FormGroupProps {
  small?: boolean;
}

const FormGroup = styled.div<FormGroupProps>`
  &:not(:last-child) {
    margin-bottom: ${props => (props.small && '0.8rem') || '2rem'};
  }
`;

export default { FormGroup };
