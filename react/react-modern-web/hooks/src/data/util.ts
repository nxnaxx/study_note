export const makeArr = (length: number) => new Array(length).fill(null);
export const range = (min: number, max: number): number[] =>
  makeArr(max - min).map((_, i) => i + min);
export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;
