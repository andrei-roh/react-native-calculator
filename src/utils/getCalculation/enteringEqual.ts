import { Action, IState } from '../../types';

export const enteringEqual = (state: IState): IState => {
  const { currentValue, previousValue, action } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue ?? '');
  const resetState = {
    action: Action.Empty,
    previousValue: null,
    isCalculated: true,
  };

  switch (action) {
    case Action.Division:
      return {
        ...state,
        currentValue: String(previous / current),
        result: String(previous / current),
        ...resetState,
      };
    case Action.Multiplication:
      return {
        ...state,
        currentValue: String(previous * current),
        result: String(previous * current),
        ...resetState,
      };
    case Action.Addition:
      return {
        ...state,
        currentValue: String(previous + current),
        result: String(previous + current),
        ...resetState,
      };
    case Action.Subtraction:
      return {
        ...state,
        currentValue: String(previous - current),
        result: String(previous - current),
        ...resetState,
      };
    case Action.Degree:
      return {
        ...state,
        currentValue: String(previous ** current),
        result: String(previous ** current),
        ...resetState,
      };
    case Action.RootByNumber:
      return {
        ...state,
        currentValue: String(Math.pow(previous, 1 / current)),
        result: String(Math.pow(previous, 1 / current)),
        ...resetState,
      };
    case Action.EnterExponent:
      return {
        ...state,
        currentValue: String(previous * 10 ** current),
        result: String(previous * 10 ** current),
        ...resetState,
      };
    case Action.NumberLogaritm:
      return {
        ...state,
        currentValue: String(Math.log(previous) / Math.log(current)),
        result: String(Math.log(previous) / Math.log(current)),
        ...resetState,
      };
    case Action.DegreeBeforeNumber:
      return {
        ...state,
        currentValue: String(Math.pow(current, previous)),
        result: String(Math.pow(current, previous)),
        ...resetState,
      };
    default:
      return state;
  }
};
