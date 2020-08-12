export interface IPrices {
  type: number | string,
  cost: number | string,
  id: number
}

export const prices: IPrices[] = [
  {
    type: '500г',
    cost: 500,
    id: 1
  },
  {
    type: '100г',
    cost: 100,
    id: 2,
  },
  {
    type: '50г',
    cost: 90,
    id: 3,
  }
];
