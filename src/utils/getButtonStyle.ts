import { Action, ButtonColor, ButtonPressed, ButtonSize } from '../types';

export const getButtonStyle = (
  styles: Record<string, Record<string, string | number>>,
  buttonSize: ButtonSize,
  buttonColor: ButtonColor,
  type: Action,
  isPressed?: boolean,
  buttonState?: ButtonPressed,
  isMemory?: boolean,
): Record<string, string | number>[] => {
  let style = [styles[buttonSize]];

  style.push(styles[isPressed && buttonState ? buttonState : buttonColor]);

  if (type === Action.MemoryReturn && isMemory) {
    style.push(styles.additionalColor);
  }

  return style;
};
