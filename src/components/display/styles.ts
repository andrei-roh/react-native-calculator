import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  displayPortrait: {
    color: '#fff',
    fontSize: 60,
    textAlign: 'right',
    marginRight: 30,
    marginBottom: 10,
  },
  displayLandscape: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'right',
    marginRight: 30,
    marginBottom: 0,
  },
  rad: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'left',
    marginLeft: 30,
    marginBottom: 4,
    alignSelf: 'flex-end',
  },
});

export default styles;
