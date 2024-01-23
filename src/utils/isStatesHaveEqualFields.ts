import { INITIAL_STATE } from '../constants';
import { State } from '../types';

type StateKeys = keyof State;

export const isStatesHaveEqualFields = (
  fields: StateKeys[],
  stateToCompare: State,
  comparableState = INITIAL_STATE,
): boolean => {
  return fields.every(
    field => stateToCompare[field] === comparableState[field],
  );
};
