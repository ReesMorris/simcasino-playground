import styled from 'styled-components';
import Label from '../label';

const InputWrapper = styled.div`
  display: block;
`;

const InputLabel = styled(Label)``;

const Input = styled.input`
  display: block;
  padding: 1rem;
  border: 1px solid ${props => props.theme.ui.border};
  border-radius: 0.3rem;
  width: 100%;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.ui.border_focus};
  }
`;

export default { InputWrapper, InputLabel, Input };
