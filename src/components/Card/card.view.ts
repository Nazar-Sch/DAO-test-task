import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  font-family: 'Roboto', sans-serif;
`;

export const CardWrapper = styled.div`
  max-width: 335px;
  width: 100%;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormContainer = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
`;

export const SelectedContainer = styled.div`
  display: flex;
  width: 100%;
  padding-right: 25px;
  justify-content: flex-end;
  align-items: center;
  padding-top: 32px;
  font-size: 24px;
  padding-bottom: 40px;
`;

