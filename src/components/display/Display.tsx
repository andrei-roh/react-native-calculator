import React, { PropsWithChildren } from 'react';
import { Text } from 'react-native';
import { Orientation, State } from '../../types';
import styles from './styles';
import { getDisplayingValue } from '../../utils';

type KeyboardProps = PropsWithChildren<{
  data: State;
  orientation: Orientation;
}>;

const preparingValueToDisplay = (value: string, checkOrientation: boolean) =>
  getDisplayingValue(value.slice(0, checkOrientation ? 10 : 25));

const Display = ({ data, orientation }: KeyboardProps): React.JSX.Element => {
  const isPortraitOrientation = orientation === Orientation.Portrait;

  return (
    <Text
      style={isPortraitOrientation ? styles.display : styles.displayLandscape}>
      {preparingValueToDisplay(
        data.isCalculated ? data.result : data.currentValue,
        isPortraitOrientation,
      )}
    </Text>
  );
};

export default Display;
