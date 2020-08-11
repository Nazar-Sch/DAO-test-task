import React, { useState } from 'react';

import RadioButton from './../RadioButton/radio.controller';
import {
  MainWrapper,
  CardWrapper,
  HeadingContainer,
  FormContainer

} from './card.view';

interface CardProps {
  price: any 
}

const Card: React.FC<CardProps> = ({ price }) => {
  console.log(price)
  const [checked, setChecked] = useState();

  return (
    <MainWrapper>
      <CardWrapper>
        <HeadingContainer>
          <span>Тип</span>
          <span>Ціна</span>
        </HeadingContainer>
        <FormContainer>
          {price.map((item: any) => {
            return (
              <RadioButton 
                priceType={item.type} 
                priceCost={item.cost} 
                check={checked === item.type} 
                onChangeCheck={() => setChecked(item.type)}
                value={item.type}
              />
            )
          })}
        </FormContainer>
      </CardWrapper>
    </MainWrapper>
  );
};

export default Card;
