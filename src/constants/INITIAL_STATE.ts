import { Action, IState } from '../types';

export const INITIAL_STATE: IState = {
  currentValue: '0',
  action: Action.Empty,
  previousValue: null,
  isCalculated: true,
  isRadians: false,
  result: '0',
  memory: '0',
  valueBeforeBrakets: null,
  actionBeforeBrakets: Action.Empty,
};
