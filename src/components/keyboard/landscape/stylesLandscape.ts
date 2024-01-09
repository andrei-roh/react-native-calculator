import { StyleSheet } from 'react-native';
import styles from '../styles';

const stylesLandscape = (
  gap: number,
  defaultButtonSize: number,
  longButtonWidth: number,
): Record<string, Record<string, string | number>> =>
  StyleSheet.create({
    defaultWrapper: {
      flex: 1,
      maxWidth: '10%',
      paddingVertical: 6,
      paddingHorizontal: 0,
    },
    bigWrapper: {
      flex: 2,
      maxWidth: '20%',
      paddingVertical: 6,
      paddingHorizontal: 0,
    },
    defaultButton: {
      flex: 1,
      width: Math.floor(defaultButtonSize - gap),
      height: Math.floor(defaultButtonSize - gap) / 1.3,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: defaultButtonSize,
    },
    bigButton: {
      flex: 1,
      width: Math.floor(longButtonWidth - gap),
      height: Math.floor(defaultButtonSize - gap) / 1.3,
      paddingLeft: 25,
      alignItems: 'flex-start',
      justifyContent: 'center',
      borderRadius: defaultButtonSize,
    },
    text: {
      ...styles.text,
      fontSize: 20,
    },
    textOnPressed: {
      ...styles.textOnPressed,
      fontSize: 20,
    },
    defaultColor: styles.defaultColor,
    additionalColor: styles.additionalColor,
    operatorColor: styles.operatorColor,
    operatorColorOnPressed: styles.operatorColorOnPressed,
    landscapeColor: {
      backgroundColor: '#484559',
    },
  });

export default stylesLandscape;
