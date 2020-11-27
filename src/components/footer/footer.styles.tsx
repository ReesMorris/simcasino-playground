import styled from 'styled-components';
import Text from '../text';

const Footer = styled.footer`
  margin: 3rem 0;
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  flex-grow: 1;
  margin-right: 0.5rem;
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

const Right = styled.div`
  display: flex;
`;

const IconLink = styled.a`
  color: inherit;
  opacity: 0.6;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }

  &:not(:first-child) {
    margin-left: 1rem;
  }
`;

export default { Footer, Left, FooterText, Heart, Link, Right, IconLink };
