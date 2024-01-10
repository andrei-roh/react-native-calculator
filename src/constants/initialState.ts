import { Action, State } from '../types';

export const initialState: State = {
  currentValue: '0',
  action: Action.Empty,
  previousValue: null,
  isCalculated: true,
  isRadians: false,
  result: '0',
  memory: '0',
};
