import styled from 'styled-components';

interface TextProps {
  bold?: boolean;
  center?: boolean;
}

const Text = styled.span<TextProps>`
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => (props.bold && '600') || '400'};
  text-align: ${props => (props.center && 'center') || 'initial'};
  font-size: 1.5rem;
  line-height: 2.2rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export default { Text };
