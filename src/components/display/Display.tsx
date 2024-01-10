import React, { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import { Orientation, State } from '../../types';
import styles from './styles';
import { getDisplayingValue } from '../../utils';

type KeyboardProps = PropsWithChildren<{
  data: State;
  orientation: Orientation;
}>;

const preparingValueToDisplay = (value: string, checkOrientation: boolean) =>
  getDisplayingValue(value.slice(0, checkOrientation ? 25 : 10));

const Display = ({ data, orientation }: KeyboardProps): React.JSX.Element => {
  const isLandscapeOrientation = orientation === Orientation.Landscape;
  const { currentValue, result, isRadians, isCalculated } = data;
  const valueToDisplay = preparingValueToDisplay(
    isCalculated ? result : currentValue,
    isLandscapeOrientation,
  );

  return (
    <View style={styles.wrap}>
      <Text style={styles.rad}>
        {isLandscapeOrientation && isRadians ? 'Rad' : ''}
      </Text>
      <Text
        style={
          isLandscapeOrientation
            ? styles.displayLandscape
            : styles.displayPortrait
        }>
        {valueToDisplay}
      </Text>
    </View>
  );
};

export default Display;
