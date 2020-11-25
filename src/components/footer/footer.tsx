import React from 'react';
import Styles from './footer.styles';

const Footer = () => {
  return (
    <Styles.Footer>
      <Styles.FooterText>
        Made with &hearts; by{' '}
        <Styles.Link href='http://reesmorris.co.uk'>Rees Morris</Styles.Link>
      </Styles.FooterText>
      <Styles.FooterText>
        This website is not affiliated with, endorsed, sponsored, or
        specifically approved by LVGameDev.
      </Styles.FooterText>
    </Styles.Footer>
  );
};

export default Footer;
