import styled from 'styled-components';

interface PropsToStyle {
  checked: boolean;
}

export const RadioLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 12px;
`;

export const RadioSpan = styled.span<PropsToStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  min-width: 24px;
  background-color: #fff;
  border-radius: 50%;
  border: ${({ checked }) => (checked ? `1px solid #6CA22C` : '1px solid #999999')};
  border-radius: 50%;
  cursor: pointer;
  margin-right: 16px;

`;

export const RadioInput = styled.input`
  position: absolute;
  display: inline-block;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 100%;
  &:checked + ${RadioSpan} {
    &::after {
        content: '';
        display: block;
        background-color: #6CA22C;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        transition: 0.2s;
    }
  }
`;

export const RadioOptions = styled.div<PropsToStyle>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${({ checked }) => checked ? '#000000' : '#999999'};
`;

export const PriceText = styled.span<PropsToStyle>`
  font-weight: ${({ checked }) => checked ? 'bold' : 'light'};
`;



