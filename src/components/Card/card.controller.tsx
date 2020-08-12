import React, { useState } from 'react';

import RadioButton from './../RadioButton';
import Button from '../Button';
import {
  MainWrapper,
  CardWrapper,
  HeadingContainer,
  FormContainer,
  SelectedContainer,
} from './card.view';


interface CardProps {
  price: any,
  onSubmit(item: any): void
}

const Card: React.FC<CardProps> = ({ price, onSubmit }) => {
  const [checked, setChecked] = useState();

  const selected = price.find((item: any) => checked === item.type)

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
        {selected ? 
        <SelectedContainer>
          <span>{selected.cost} грн</span>
          <Button onSubmitClick={() => onSubmit(selected)} disabled={false}/>
        </SelectedContainer> : 
        <SelectedContainer>
          <span></span>
          <Button onSubmitClick={() => onSubmit(selected)} disabled={true} />
        </SelectedContainer>}
      </CardWrapper>
    </MainWrapper>
  );
};

export default Card;
