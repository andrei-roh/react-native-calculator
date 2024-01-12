import React from 'react';
import { PropsWithChildren } from 'react';
import { Action, Keyboard } from '../../../types';
import { Text, TouchableOpacity, View } from 'react-native';
import { portraitKeyboardData } from '../../../constants';
import { getButtonStyle, getButtonTitle } from '../../../utils';

type ButtonProps = PropsWithChildren<
  Pick<
    Keyboard,
    'title' | 'classes' | 'type' | 'secondTitle' | 'isToggler' | 'secondType'
  > & {
    value: string;
    handler: (type: Action, value: string) => void;
    isInitialState: boolean;
    isSecondMode: boolean;
    handleSecondMode: () => void;
    styles: Record<string, Record<string, string | number>>;
    id: string;
    isRadians?: boolean;
    isMemoryChanged?: boolean;
    isKeyPressed?: boolean;
    handlePressed?: (id: string) => void;
  }
>;

const radioButtonsIds = portraitKeyboardData.reduce((result, button) => {
  if (button.isToggler) {
    result.push(button.id);
  }

  return result;
}, [] as string[]);

const Button = ({
  title,
  classes,
  type,
  secondTitle,
  isToggler,
  secondType,
  value,
  handler,
  isInitialState,
  isSecondMode,
  handleSecondMode,
  styles,
  id,
  isRadians,
  isMemoryChanged,
  isKeyPressed,
  handlePressed,
}: ButtonProps): React.JSX.Element => {
  const { wrapperSize, buttonSize, buttonColor, buttonState } = classes;
  const currentStyle = getButtonStyle(
    styles,
    buttonSize,
    buttonColor,
    type,
    isKeyPressed,
    buttonState,
    isMemoryChanged,
  );
  const currentTitle = getButtonTitle(
    title,
    type,
    isInitialState,
    isSecondMode,
    secondTitle,
    isRadians,
  );
  const handleOnPress = () => {
    if (type === Action.SecondFunction) {
      handleSecondMode();
    }

    if (isToggler) {
      handlePressed?.(id);
    }

    if (radioButtonsIds.indexOf(id) === -1) {
      handlePressed?.('');
    }

    handler(secondType && isSecondMode ? secondType : type, value);
  };

  return (
    <View style={styles[wrapperSize]}>
      <TouchableOpacity style={currentStyle} onPress={handleOnPress}>
        <Text style={isKeyPressed ? styles.textOnPressed : styles.text}>
          {currentTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
