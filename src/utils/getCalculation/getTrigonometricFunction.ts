import { Action } from '../../types';
import { getUsingDegrees } from './getUsingDegrees';
import { getUsingRadians } from './getUsingRadians';
import {
  COSINE_TABLE,
  INVERSE_COSINE_TABLE,
  INVERSE_SINE_TABLE,
  INVERSE_TANGENT_TABLE,
  SINE_TABLE,
  TANGENT_TABLE,
} from '../../constants';

type Trigonometric =
  | Action.Sine
  | Action.Cosine
  | Action.Tangent
  | Action.HyperSine
  | Action.HyperCosine
  | Action.HyperTangent
  | Action.InverseSine
  | Action.InverseCosine
  | Action.InverseTangent
  | Action.InverseHyperSine
  | Action.InverseHyperCosine
  | Action.InverseHyperTangent;

const Inverse = [
  Action.InverseSine,
  Action.InverseCosine,
  Action.InverseTangent,
  Action.InverseHyperSine,
  Action.InverseHyperCosine,
  Action.InverseHyperTangent,
];

const getDefaultAction = (
  value: string,
  type: Trigonometric,
  isRadians: boolean,
  isInverse = false,
) =>
  isInverse
    ? `${
        isRadians
          ? Math[type](parseFloat(value))
          : getUsingRadians(Math[type](parseFloat(value)))
      }`
    : `${Math[type](
        isRadians ? parseFloat(value) : getUsingDegrees(parseFloat(value)),
      )}`;

export const getTrigonometricFunction = (
  value: string,
  type: Trigonometric,
  isRadians: boolean,
): string => {
  const isInverse = Inverse.some(action => action === type);

  switch (type) {
    case Action.Sine:
      return SINE_TABLE.get(value) ?? getDefaultAction(value, type, isRadians);
    case Action.Cosine:
      return (
        COSINE_TABLE.get(value) ?? getDefaultAction(value, type, isRadians)
      );
    case Action.Tangent:
      return (
        TANGENT_TABLE.get(value) ?? getDefaultAction(value, type, isRadians)
      );
    case Action.InverseSine:
      return (
        INVERSE_SINE_TABLE.get(value) ??
        getDefaultAction(value, type, isRadians, isInverse)
      );
    case Action.InverseCosine:
      return (
        INVERSE_COSINE_TABLE.get(value) ??
        getDefaultAction(value, type, isRadians, isInverse)
      );
    case Action.InverseTangent:
      return (
        INVERSE_TANGENT_TABLE.get(value) ??
        getDefaultAction(value, type, isRadians, isInverse)
      );
    default:
      return getDefaultAction(value, type, isRadians, isInverse);
  }
};
