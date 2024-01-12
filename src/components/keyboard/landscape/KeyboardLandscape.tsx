import React, { useState } from 'react';
import Button from '../button/Button';
import { Dimensions, FlatList } from 'react-native';
import styles from '../styles';
import stylesLandscape from './stylesLandscape';
import { KeyboardProps } from '../types';
import { getRadioButtons } from '../../../utils/getRadioButtons';
import { setToggleState } from '../../../utils';

const KeyboardLandscape = ({
  keyboardData,
  handler,
  isInitialState,
  isRadians,
  isMemoryChanged,
}: KeyboardProps): React.JSX.Element => {
  const [toggles, setToggles] = useState(getRadioButtons(keyboardData));
  const [secondMode, setSecondMode] = useState(false);
  const gap = 20;
  const screen = Dimensions.get('window');
  const defaultButtonSize = 0.1 * screen.width;
  const longButtonWidth = 0.185 * screen.width;
  const currentStyles = stylesLandscape(
    gap,
    defaultButtonSize,
    longButtonWidth,
  );

  const handleSetToggleState = (id: string) => {
    setToggleState(id, toggles, setToggles);
  };
  const handleSetSecondMode = () => {
    setSecondMode(!secondMode);
  };

  return (
    <FlatList
      data={keyboardData}
      numColumns={10}
      renderItem={({ item }) => (
        <Button
          title={item.title}
          classes={item.classes}
          type={item.type}
          secondTitle={item.secondTitle}
          isToggler={item.isToggler}
          secondType={item.secondType}
          value={item.value ?? ''}
          handler={handler}
          isInitialState={isInitialState}
          isSecondMode={secondMode}
          handleSecondMode={handleSetSecondMode}
          styles={currentStyles}
          id={item.id}
          isRadians={isRadians}
          isMemoryChanged={isMemoryChanged}
          isKeyPressed={toggles.get(item.id)}
          handlePressed={handleSetToggleState}
        />
      )}
      keyExtractor={item => item.id}
      style={styles.keyboard}
      scrollEnabled={false}
    />
  );
};

export default KeyboardLandscape;
