import { StyleSheet } from 'react-native';
import styles from '../styles';

const stylesPortrait = (
  gap: number,
  defaultButtonSize: number,
  longButtonWidth: number,
): Record<string, Record<string, string | number>> =>
  StyleSheet.create({
    defaultWrapper: {
      flex: 1,
      maxWidth: '25%',
      paddingVertical: 6,
      paddingHorizontal: 0,
    },
    bigWrapper: {
      flex: 1,
      maxWidth: '50%',
      paddingVertical: 6,
      paddingHorizontal: 0,
    },
    defaultButton: {
      flex: 1,
      width: Math.floor(defaultButtonSize - gap),
      height: Math.floor(defaultButtonSize - gap),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: defaultButtonSize,
    },
    bigButton: {
      flex: 1,
      width: Math.floor(longButtonWidth - gap),
      height: Math.floor(defaultButtonSize - gap),
      paddingLeft: 30,
      alignItems: 'flex-start',
      justifyContent: 'center',
      borderRadius: defaultButtonSize,
    },
    text: styles.text,
    textOnPressed: styles.textOnPressed,
    defaultColor: styles.defaultColor,
    additionalColor: styles.additionalColor,
    operatorColor: styles.operatorColor,
    operatorColorOnPressed: styles.operatorColorOnPressed,
  });

export default stylesPortrait;
