import styled from 'styled-components';

const Card = styled.div`
  background: ${props => props.theme.card.background};
  padding: 2rem;
  border-radius: 0.4rem;
  box-shadow: 0 0.2rem 0.5rem ${props => props.theme.card.shadow};
  width: 100%;
`;

export default { Card };
