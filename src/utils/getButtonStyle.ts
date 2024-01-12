import { Action, ButtonColor, ButtonPressed, ButtonSize } from '../types';

export const getButtonStyle = (
  styles: Record<string, Record<string, string | number>>,
  buttonSize: ButtonSize,
  buttonColor: ButtonColor,
  type: Action,
  isKeyPressed?: boolean,
  buttonState?: ButtonPressed,
  isMemoryChanged?: boolean,
): Record<string, string | number>[] => {
  let style = [styles[buttonSize]];

  style.push(styles[isKeyPressed && buttonState ? buttonState : buttonColor]);

  if (type === Action.MemoryReturn && isMemoryChanged) {
    style.push(styles.additionalColor);
  }

  return style;
};
