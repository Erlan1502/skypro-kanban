import React from 'react';
import { CardGroup } from '../card/card.styled';
import {
  LoadingCardWrapper,
  LoadingCardTheme,
  LoadingCardButton,
  LoadingCardLine,
  LoadingCardLineShort,
} from './LoadingCard.styled';

const LoadingCard = () => {
  return (
    <LoadingCardWrapper>
      <CardGroup>
        <LoadingCardTheme />
        <LoadingCardButton />
      </CardGroup>
      <div>
        <LoadingCardLine />
        <LoadingCardLineShort />
      </div>
    </LoadingCardWrapper>
  );
};

export default LoadingCard;
