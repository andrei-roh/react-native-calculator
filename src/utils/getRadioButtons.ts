import { IKeyboard } from '../types';

export const getRadioButtons = (keyboard: IKeyboard[]): Map<string, boolean> =>
  new Map(
    keyboard.reduce((result, button) => {
      if (button.isToggler) {
        result.push([button.id, false]);
      }

      return result;
    }, [] as [string, boolean][]),
  );
