import { Data } from '../types';

export const getRadioButtons = (data: Data[]): Map<string, boolean> =>
  new Map(
    data
      .filter(element => element.isToggler)
      .map(filtred => [filtred.id, false]),
  );
