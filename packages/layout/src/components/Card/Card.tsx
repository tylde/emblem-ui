import React from 'react';
import {EmblemUITheme, useTheme} from '@emblem-ui/styles';
import {StyledCard} from './Card.styles';

interface Card extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<Card> = ({
  children,
  ...otherProps
}) => {
  const theme: EmblemUITheme = useTheme();
  return (
    <StyledCard theme={theme} {...otherProps}>
      {children}
    </StyledCard>
  );
};

export default Card;
