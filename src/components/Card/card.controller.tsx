import React from 'react';

import {
  MainWrapper,
  CardWrapper,
  HeadingWrapper

} from './card.view';

const Card: React.FC = () => {
  return (
    <MainWrapper>
      <CardWrapper>
        <HeadingWrapper>
          <span>Тип</span>
          <span>Ціна</span>
        </HeadingWrapper>
      </CardWrapper>
    </MainWrapper>
  );
};

export default Card;
