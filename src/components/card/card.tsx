import React from 'react';
import Styles from './card.styles';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <Styles.Card>{children}</Styles.Card>;
};

export default Card;
