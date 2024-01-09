import { Dimensions } from 'react-native';
import { Orientation } from '../types';

export const getOrientation = (): Orientation => {
  const { height, width } = Dimensions.get('window');

  return height > width ? Orientation.Portrait : Orientation.Landscape;
};
