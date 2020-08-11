interface IPrices {
  type: number | string,
  cost: number | string
}

export const prices: IPrices[] = [
  {
    type: '500г',
    cost: 500
  },
  {
    type: '100г',
    cost: 100
  },
  {
    type: '50г',
    cost: 90
  }
];
