import React from 'react';
import { PropsWithChildren } from 'react';
import { Action, Data, Orientation } from '../../../types';
import { Text, TouchableOpacity, View } from 'react-native';
import { portraitKeyboardData } from '../../../constants';
import { getButtonTitle } from '../../../utils';

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
    isRadians: boolean;
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
  isSecondMode,
  handleSecondMode,
  id,
  isToggler,
  isPressed,
  handleIsPressed,
  changeableTitle,
  styles,
}: ButtonProps): React.JSX.Element => {
  const { wrapperSize, buttonSize, buttonColor } = classes;
  const currentTitle = getButtonTitle(
    type,
    isInitialState,
    isRadians,
    isSecondMode,
    title,
    changeableTitle,
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
      <TouchableOpacity
        style={[
          styles[buttonSize],
          styles[isPressed ? `${buttonColor}OnPressed` : buttonColor],
        ]}
        onPress={handleOnPress}>
        <Text style={isPressed ? styles.textOnPressed : styles.text}>
          {currentTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
