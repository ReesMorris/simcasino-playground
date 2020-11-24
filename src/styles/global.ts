import { css } from 'styled-components';

export default css`
  html {
    font-size: 62.5%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    background: ${props => props.theme.colors.background};
    font-size: 1.6rem;
  }
`;
