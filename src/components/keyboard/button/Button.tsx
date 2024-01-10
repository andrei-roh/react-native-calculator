import React from 'react';
import { PropsWithChildren } from 'react';
import { Action, Data, Orientation } from '../../../types';
import { Text, TouchableOpacity, View } from 'react-native';
import { portraitKeyboardData } from '../../../constants';
import { getButtonStyle, getButtonTitle } from '../../../utils';

type ButtonProps = PropsWithChildren<
  Pick<
    Data,
    | 'title'
    | 'classes'
    | 'type'
    | 'changeableTitle'
    | 'isToggler'
    | 'secondType'
  > & {
    value: string;
    handler: (type: Action, value: string) => void;
    isInitialState: boolean;
    isRadians?: boolean;
    isMemory?: boolean;
    isSecondMode: boolean;
    handleSecondMode: () => void;
    orientation: Orientation;
    styles: Record<string, Record<string, string | number>>;
    id: string;
    isPressed?: boolean;
    handleIsPressed?: (id: string) => void;
  }
>;

const radioButtonsIds = portraitKeyboardData
  .filter(element => element.isToggler)
  .map(filtred => filtred.id);

const Button = ({
  title,
  classes,
  type,
  secondType,
  value,
  handler,
  isInitialState,
  isRadians,
  isMemory,
  isSecondMode,
  handleSecondMode,
  id,
  isToggler,
  isPressed,
  handleIsPressed,
  changeableTitle,
  styles,
}: ButtonProps): React.JSX.Element => {
  const { wrapperSize, buttonSize, buttonColor, buttonState } = classes;
  const currentStyle = getButtonStyle(
    styles,
    buttonSize,
    buttonColor,
    type,
    isPressed,
    buttonState,
    isMemory,
  );
  const currentTitle = getButtonTitle(
    title,
    type,
    isInitialState,
    isSecondMode,
    changeableTitle,
    isRadians,
  );
  const handleOnPress = () => {
    if (type === Action.SecondFunction) {
      handleSecondMode();
    }

    if (isToggler) {
      handleIsPressed?.(id);
    }

    if (radioButtonsIds.indexOf(id) === -1) {
      handleIsPressed?.('');
    }

    handler(secondType && isSecondMode ? secondType : type, value);
  };

  return (
    <View style={styles[wrapperSize]}>
      <TouchableOpacity style={currentStyle} onPress={handleOnPress}>
        <Text style={isPressed ? styles.textOnPressed : styles.text}>
          {currentTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
