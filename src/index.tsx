import React, { useCallback } from 'react';

import { prices } from './prices.model'
import Card from './components/Card'

const TestApp = () => {
  const onSubmit = useCallback((item) => {
    alert(`У кошику: ${item.type}`);
  }, []);
  return (
    <Card price={prices} onSubmit={onSubmit}/>
)}

export default TestApp
