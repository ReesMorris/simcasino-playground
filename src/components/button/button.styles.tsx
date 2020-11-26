import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 1rem;
  display: block;
  width: 100%;
  border-radius: 0.3rem;
  border: 1px solid ${props => props.theme.ui.active_background};
  background: ${props => props.theme.ui.active_background};
  color: ${props => props.theme.ui.active_text};
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme.ui.hover_background};
    border-color: ${props => props.theme.ui.hover_background};
  }
`;

export default { Button };
