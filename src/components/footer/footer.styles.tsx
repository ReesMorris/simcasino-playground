import styled from 'styled-components';
import Text from '../text';

const Footer = styled.footer`
  margin: 3rem 0;
`;

const FooterText = styled(Text)`
  font-size: 1.1rem;
  line-height: 1.2rem;

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }
`;
const Heart = styled.span`
  color: ${props => props.theme.colors.heart};
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

export default { Footer, FooterText, Heart, Link };
