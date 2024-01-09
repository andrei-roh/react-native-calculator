export const getFactorial = (value: number): number => {
  if (value < 0) {
    return 0;
  } else if (value === 0) {
    return 1;
  } else {
    return value * getFactorial(value - 1);
  }
};
