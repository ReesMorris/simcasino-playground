import React from 'react';
import Icon from '../icon';
import Styles from './footer.styles';

const Footer = () => {
  return (
    <Styles.Footer>
      <Styles.Left>
        <Styles.FooterText>
          Made with <Styles.Heart>&hearts;</Styles.Heart> by{' '}
          <Styles.Link
            href='http://reesmorris.co.uk'
            target='_blank'
            rel='noopener noreferrer'
          >
            Rees Morris
          </Styles.Link>
        </Styles.FooterText>
        <Styles.FooterText>
          This website is not affiliated with, endorsed, sponsored, or
          specifically approved by LVGameDev.
        </Styles.FooterText>
      </Styles.Left>
      <Styles.Right>
        <Styles.IconLink
          href='https://steamcommunity.com/app/1158420'
          target='_blank'
          rel='noopener noreferrer'
          title='Steam Community'
        >
          <Icon icon='steam' weight='fab' />
        </Styles.IconLink>
        <Styles.IconLink
          href='https://github.com/ReesMorris/simcasino-playground'
          target='_blank'
          rel='noopener noreferrer'
          title='View on GitHub'
        >
          <Icon icon='github' weight='fab' />
        </Styles.IconLink>
      </Styles.Right>
    </Styles.Footer>
  );
};

export default Footer;
