import React from 'react'
import { RadioLabel, RadioInput, RadioSpan, RadioOptions, PriceText } from './radio.view'

interface RadioProps {
  priceType: string | number,
  priceCost: number | string,
  check: boolean,
  onChangeCheck(): void,
  value?: string,
}

const RadioButton: React.FC<RadioProps> = ({ priceType, priceCost, check, onChangeCheck, value }) => {
  return (
    <>
      <RadioLabel>
        <RadioInput
          type="radio"
          name="radio"
          checked={check}
          value={value}
          onChange={onChangeCheck}
          aria-checked={check}
        />
        <RadioSpan checked={check} />
          <RadioOptions checked={check}>
            <span>{priceType}</span>
            <PriceText>{`${priceCost} грн`}</PriceText>
          </RadioOptions>
      </RadioLabel>
    </>
  )
}

export default RadioButton;
