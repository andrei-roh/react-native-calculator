export const getFactorial = (value: number): number => {
  if (value < 0) {
    return 0;
  }

  return value === 0 ? 1 : value * getFactorial(value - 1);
};
