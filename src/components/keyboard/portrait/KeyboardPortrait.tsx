import React, { useState } from 'react';
import Button from '../button/Button';
import { Dimensions, FlatList } from 'react-native';
import styles from '../styles';
import { KeyboardProps } from '../types';
import stylesPortrait from './stylesPortrait';
import { getRadioButtons } from '../../../utils/getRadioButtons';
import { setToggleState } from '../../../utils';

const KeyboardPortrait = ({
  keyboardData,
  handler,
  isInitialState,
}: KeyboardProps): React.JSX.Element => {
  const [toggles, setToggles] = useState(getRadioButtons(keyboardData));
  const [secondMode, setSecondMode] = useState(false);
  const gap = 15;
  const screen = Dimensions.get('window');
  const defaultButtonSize = 0.25 * screen.width;
  const longButtonWidth = 0.49 * screen.width;
  const currentStyles = stylesPortrait(gap, defaultButtonSize, longButtonWidth);

  const handleSetToggleState = (id: string) => {
    setToggleState(id, toggles, setToggles);
  };
  const handleSetSecondMode = () => {
    setSecondMode(!secondMode);
  };

  return (
    <FlatList
      data={keyboardData}
      numColumns={4}
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

export default KeyboardPortrait;
