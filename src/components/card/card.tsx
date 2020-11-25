import React from 'react';
import Styles from './card.styles';

interface CardProps {
  disabled?: boolean;
  children: React.ReactNode;
}

const Card = ({ disabled, children }: CardProps) => {
  return <Styles.Card disabled={disabled}>{children}</Styles.Card>;
};

export default Card;
