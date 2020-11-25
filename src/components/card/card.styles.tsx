import styled from 'styled-components';

interface CardProps {
  disabled?: boolean;
}

const Card = styled.div<CardProps>`
  background: ${props => props.theme.card.background};
  padding: 2rem;
  border-radius: 0.4rem;
  box-shadow: 0 0.2rem 0.5rem ${props => props.theme.card.shadow};
  width: 100%;
  opacity: ${props => (props.disabled && '0.5') || '1'};

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export default { Card };
