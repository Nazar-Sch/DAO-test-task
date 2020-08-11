import * as React from 'react'

import Card from './components/Card'
import { prices } from './prices.model';

const TestApp = () => (
  <Card price={prices} />
)

export default TestApp
