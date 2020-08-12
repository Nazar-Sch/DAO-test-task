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
  const [checked, setChecked] = useState(null);
  const selected = price.find((item: any) => checked === item.type)
  const radioButtons = (
    <FormContainer>
      {price.map((item: any) => {
        return (
          <RadioButton
            key={item.id} 
            priceType={item.type} 
            priceCost={item.cost} 
            check={checked === item.type} 
            onChangeCheck={() => setChecked(item.type)}
            value={item.type}
          />
        )
      })}
    </FormContainer>
  )
  const selectedItem = (
    <SelectedContainer>
      {selected ? <span>{selected.cost} грн</span> : ''}
      <Button onSubmitClick={() => onSubmit(selected)} disabled={!selected} />
    </SelectedContainer>
  )
  return (
    <MainWrapper>
      <CardWrapper>
        <HeadingContainer>
          <span>Тип</span>
          <span>Ціна</span>
        </HeadingContainer>
        {radioButtons}
        {selectedItem}
      </CardWrapper>
    </MainWrapper>
  );
};

export default Card;
