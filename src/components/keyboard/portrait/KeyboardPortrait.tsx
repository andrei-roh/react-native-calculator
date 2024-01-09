import React, { useState } from 'react';
import Button from '../button/Button';
import { Dimensions, FlatList } from 'react-native';
import styles from '../styles';
import { KeyboardProps } from '../types';
import stylesPortrait from './stylesPortrait';
import { getRadioButtons } from '../../../utils/getRadioButtons';
import { setToggleState } from '../../../utils';

const KeyboardPortrait = ({
  orientation,
  keyboardPortraitData,
  handler,
  isInitialState,
  isRadians,
}: KeyboardProps): React.JSX.Element => {
  const [toggles, setToggles] = useState(getRadioButtons(keyboardPortraitData));
  const [secondMode, setSecondMode] = useState(false);
  const gap = 15;
  const screen = Dimensions.get('window');
  const defaultButtonSize = 0.25 * screen.width;
  const longButtonWidth = 0.49 * screen.width;

  const handleSetToggleState = (id: string) => {
    setToggleState(id, toggles, setToggles);
  };
  const handleSetSecondMode = () => {
    setSecondMode(!secondMode);
  };

  return (
    <FlatList
      data={keyboardPortraitData}
      numColumns={4}
      renderItem={({ item }) => (
        <Button
          title={item.title}
          classes={item.classes}
          type={item.type}
          secondType={item.secondType}
          value={item.value ?? ''}
          handler={handler}
          isInitialState={isInitialState}
          isRadians={isRadians}
          isSecondMode={secondMode}
          handleSecondMode={handleSetSecondMode}
          id={item.id}
          isToggler={item.isToggler}
          isPressed={toggles.get(item.id)}
          handleIsPressed={handleSetToggleState}
          changeableTitle={item.changeableTitle}
          orientation={orientation}
          styles={stylesPortrait(gap, defaultButtonSize, longButtonWidth)}
        />
      )}
      keyExtractor={item => item.id}
      style={styles.keyboard}
      scrollEnabled={false}
    />
  );
};

export default KeyboardPortrait;
