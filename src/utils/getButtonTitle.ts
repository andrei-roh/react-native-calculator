import { Action } from '../types';

export const getButtonTitle = (
  title: string,
  type: Action,
  isInitialState: boolean,
  isSecondMode: boolean,
  secondTitle?: string,
  isRadians?: boolean,
) => {
  if (!secondTitle) {
    return title;
  }

  switch (type) {
    case Action.AllClear:
      return isInitialState ? title : secondTitle;
    case Action.Exponent:
    case Action.TenInDegree:
    case Action.Logarithm:
    case Action.TenLogarithm:
    case Action.Sine:
    case Action.Cosine:
    case Action.Tangent:
    case Action.HyperSine:
    case Action.HyperCosine:
    case Action.HyperTangent:
      return !isSecondMode ? title : secondTitle;
    case Action.Mode:
      return isRadians ? title : secondTitle;
    default:
      return title;
  }
};
