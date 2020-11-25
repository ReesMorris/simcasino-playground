import styled from 'styled-components';

const Text = styled.span`
  color: ${props => props.theme.colors.secondary};
  font-size: 1.5rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export default { Text };
