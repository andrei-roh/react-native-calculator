import { initialState } from '../../constants';
import { Action, State } from '../../types';
import { enteringEqual } from './enteringEqual';
import { enteringNumber } from './enteringNumber';
import { getFactorial } from './getFactorial';
import { getUsingDegrees } from './getUsingDegrees';

export const getCalculation = (
  type: Action,
  value: string,
  state: State,
): State => {
  switch (type) {
    case Action.Number:
      return enteringNumber(value, state);
    case Action.Addition:
    case Action.Division:
    case Action.Subtraction:
    case Action.Multiplication:
    case Action.Degree:
    case Action.RootByNumber:
    case Action.EnterExponent:
    case Action.NumberLogaritm:
    case Action.DegreeBeforeNumber:
      return {
        ...state,
        currentValue: '0',
        action: type,
        previousValue: state.currentValue,
        isCalculated: true,
        result: state.currentValue,
      };
    case Action.Equal:
      return enteringEqual(state);
    case Action.AllClear:
      return {
        ...initialState,
        isRadians: state.isRadians,
        memory: state.memory,
      };
    case Action.ChangeSign:
      return {
        ...state,
        currentValue: `${parseFloat(state.currentValue) * -1}`,
        result: `${parseFloat(state.currentValue) * -1}`,
      };
    case Action.GetPercentage:
      return {
        ...state,
        currentValue: `${parseFloat(state.currentValue) * 0.01}`,
        result: `${parseFloat(state.currentValue) * 0.01}`,
      };
    case Action.Square:
      return {
        ...state,
        currentValue: `${Math.pow(parseFloat(state.currentValue), 2)}`,
        result: `${Math.pow(parseFloat(state.currentValue), 2)}`,
      };
    case Action.MemoryClear:
      return {
        ...state,
        memory: '0',
      };
    case Action.MemoryAddValue:
      return {
        ...state,
        memory: `${parseFloat(state.memory) + parseFloat(state.currentValue)}`,
      };
    case Action.MemorySubstractValue:
      return {
        ...state,
        memory: `${parseFloat(state.memory) - parseFloat(state.currentValue)}`,
      };
    case Action.MemoryReturn:
      return {
        ...state,
        currentValue: state.memory,
        result: state.memory,
      };
    case Action.Cube:
      return {
        ...state,
        currentValue: `${Math.pow(parseFloat(state.currentValue), 3)}`,
        result: `${Math.pow(parseFloat(state.currentValue), 3)}`,
      };
    case Action.Exponent:
      return {
        ...state,
        currentValue: `${Math.pow(Math.E, parseFloat(state.currentValue))}`,
        result: `${Math.pow(Math.E, parseFloat(state.currentValue))}`,
      };
    case Action.TenInDegree:
      return {
        ...state,
        currentValue: `${Math.pow(10, parseFloat(state.currentValue))}`,
        result: `${Math.pow(10, parseFloat(state.currentValue))}`,
      };
    case Action.TwoInDegree:
      return {
        ...state,
        currentValue: `${Math.pow(2, parseFloat(state.currentValue))}`,
        result: `${Math.pow(2, parseFloat(state.currentValue))}`,
      };
    case Action.RatioToDivision:
      return {
        ...state,
        currentValue: `${1 / parseFloat(state.currentValue)}`,
        result: `${1 / parseFloat(state.currentValue)}`,
      };
    case Action.SquareRoot:
      return {
        ...state,
        currentValue: `${Math.sqrt(parseFloat(state.currentValue))}`,
        result: `${Math.sqrt(parseFloat(state.currentValue))}`,
      };
    case Action.CubeRoot:
      return {
        ...state,
        currentValue: `${Math.cbrt(parseFloat(state.currentValue))}`,
        result: `${Math.cbrt(parseFloat(state.currentValue))}`,
      };
    case Action.Logarithm:
      return {
        ...state,
        currentValue: `${Math.log(parseFloat(state.currentValue))}`,
        result: `${Math.log(parseFloat(state.currentValue))}`,
      };
    case Action.TenLogarithm:
      return {
        ...state,
        currentValue: `${Math.log10(parseFloat(state.currentValue))}`,
        result: `${Math.log10(parseFloat(state.currentValue))}`,
      };
    case Action.TwoLogarithm:
      return {
        ...state,
        currentValue: `${Math.log2(parseFloat(state.currentValue))}`,
        result: `${Math.log2(parseFloat(state.currentValue))}`,
      };
    case Action.Factorial:
      return {
        ...state,
        currentValue: `${getFactorial(parseFloat(state.currentValue))}`,
        result: `${getFactorial(parseFloat(state.currentValue))}`,
      };
    case Action.Sine:
      return {
        ...state,
        currentValue: `${Math.sin(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
        result: `${Math.sin(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
      };
    case Action.InverseSine:
      return {
        ...state,
        currentValue: `${Math.asin(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
        result: `${Math.asin(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
      };
    case Action.Cosine:
      return {
        ...state,
        currentValue: `${Math.cos(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
        result: `${Math.cos(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
      };
    case Action.InverseCosine:
      return {
        ...state,
        currentValue: `${Math.acos(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
        result: `${Math.acos(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
      };
    case Action.Tangent:
      return {
        ...state,
        currentValue: `${Math.tan(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
        result: `${Math.tan(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
      };
    case Action.InverseTangent:
      return {
        ...state,
        currentValue: `${Math.atan(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
        result: `${Math.atan(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
      };
    case Action.Euler:
      return {
        ...state,
        currentValue: `${Math.E}`,
        result: `${Math.E}`,
      };
    case Action.Mode:
      return {
        ...state,
        isRadians: !state.isRadians,
      };
    case Action.HyperSine:
      return {
        ...state,
        currentValue: `${Math.sinh(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
        result: `${Math.sinh(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
      };
    case Action.InverseHyperSine:
      return {
        ...state,
        currentValue: `${Math.asinh(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
        result: `${Math.asinh(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
      };
    case Action.HyperCosine:
      return {
        ...state,
        currentValue: `${Math.cosh(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
        result: `${Math.cosh(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
      };
    case Action.InverseHyperCosine:
      return {
        ...state,
        currentValue: `${Math.acosh(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
        result: `${Math.acosh(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
      };
    case Action.HyperTangent:
      return {
        ...state,
        currentValue: `${Math.tanh(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
        result: `${Math.tanh(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
      };
    case Action.InverseHyperTangent:
      return {
        ...state,
        currentValue: `${Math.atanh(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
        result: `${Math.atanh(
          state.isRadians
            ? parseFloat(state.currentValue)
            : getUsingDegrees(parseFloat(state.currentValue)),
        )}`,
      };
    case Action.Pi:
      return {
        ...state,
        currentValue: `${Math.PI}`,
        result: `${Math.PI}`,
      };
    case Action.Random:
      return {
        ...state,
        currentValue: `${Math.random()}`,
        result: `${Math.random()}`,
      };
    default:
      return state;
  }
};
