import { INITIAL_STATE } from '../constants';
import { IState } from '../types';

type StateKeys = keyof IState;

export const isStatesHaveEqualFields = (
  fields: StateKeys[],
  stateToCompare: IState,
  comparableState = INITIAL_STATE,
): boolean => {
  return fields.every(
    field => stateToCompare[field] === comparableState[field],
  );
};
