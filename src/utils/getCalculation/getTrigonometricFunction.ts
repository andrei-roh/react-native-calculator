import { Action } from '../../types';
import { getUsingDegrees } from './getUsingDegrees';
import { getUsingRadians } from './getUsingRadians';

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

export const getTrigonometricFunction = (
  value: string,
  type: Trigonometric,
  isRadians: boolean,
): string => {
  const isInverse = Inverse.some(element => element === type);

  if (isInverse) {
    const result = Math[type](parseFloat(value));
    return `${isRadians ? result : getUsingRadians(result)}`;
  }

  return `${Math[type](
    isRadians ? parseFloat(value) : getUsingDegrees(parseFloat(value)),
  )}`;
};
