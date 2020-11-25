import styled from 'styled-components';
import Text from '../text';

const Footer = styled.footer`
  margin-top: 3rem;
`;

const FooterText = styled(Text)`
  color: green;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 0 dotted transparent;
  transition: border 0.2s ease;

  &:hover {
    border-bottom: 0.1rem dotted;
  }
`;

export default { Footer, FooterText, Link };
