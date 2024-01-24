import { IState } from '../../types';

export const enteringNumber = (value: string, state: IState): IState => {
  if (state.currentValue === '0' && value === '.') {
    return { ...state, currentValue: `0${value}`, isCalculated: false };
  }

  if (state.isCalculated) {
    return { ...state, currentValue: `${value}`, isCalculated: false };
  }

  return {
    ...state,
    currentValue: `${state.currentValue}${value}`,
    isCalculated: false,
  };
};
