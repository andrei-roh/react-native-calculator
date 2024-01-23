import React, { useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';

import { Action, Orientation } from './src/types';
import {
  getCalculation,
  isMemoryChanged,
  getOrientation,
  isStatesHaveEqualFields,
} from './src/utils';
import KeyboardPortrait from './src/components/keyboard/portrait/KeyboardPortrait';
import Display from './src/components/display/Display';
import { INITIAL_STATE, PORTRAIT_KEYBOARD_DATA } from './src/constants';
import { LANDSCAPE_KEYBOARD_DATA } from './src/constants/LANDSCAPE_KEYBOARD_DATA';
import KeyboardLandscape from './src/components/keyboard/landscape/KeyboardLandscape';

const App = (): React.JSX.Element => {
  const [data, setData] = useState(INITIAL_STATE);
  const initialOrientation = getOrientation();
  const [orientation, setOrientation] = useState(initialOrientation);

  const handleSetData = (type: Action, value: string) => {
    setData(state => getCalculation(type, value, state));
  };
  const isInitialState = isStatesHaveEqualFields(
    ['currentValue', 'result'],
    data,
  );

  Dimensions.addEventListener('change', () => {
    const currentOrientation = getOrientation();

    setOrientation(currentOrientation);
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Display data={data} orientation={orientation} />
        {orientation === Orientation.Landscape ? (
          <KeyboardLandscape
            keyboardData={LANDSCAPE_KEYBOARD_DATA}
            handler={handleSetData}
            isInitialState={isInitialState}
            isRadians={data.isRadians}
            isMemoryChanged={isMemoryChanged(data.memory)}
          />
        ) : (
          <KeyboardPortrait
            keyboardData={PORTRAIT_KEYBOARD_DATA}
            handler={handleSetData}
            isInitialState={isInitialState}
            isRadians={data.isRadians}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  text: {
    color: 'white',
  },
});

export default App;
