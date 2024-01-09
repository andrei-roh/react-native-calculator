import { Action } from '../types';

export const getButtonTitle = (
  type: Action,
  isInitialState: boolean,
  isRadians: boolean,
  isSecondMode: boolean,
  title: string,
  changeableTitle?: string,
) => {
  if (!changeableTitle) {
    return title;
  }

  switch (type) {
    case Action.AllClear:
      return isInitialState ? title : changeableTitle;
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
      return !isSecondMode ? title : changeableTitle;
    case Action.Mode:
      return isRadians ? title : changeableTitle;
    default:
      return title;
  }
};