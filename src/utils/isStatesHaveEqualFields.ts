import { initialState } from '../constants';
import { State } from '../types';

type StateKeys = keyof State;

export const isStatesHaveEqualFields = (
  fields: StateKeys[],
  stateToCompare: State,
  comparableState = initialState,
): boolean => {
  return fields.every(
    field => stateToCompare[field] === comparableState[field],
  );
};
