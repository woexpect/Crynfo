import {Dimensions, Platform} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const {width, height} = Dimensions.get('window');

const isIosDevice = Platform.OS === 'ios';

export default ScaledSheet.create({
  // Layout Styles
  completeScreen: {
    flex: 1,
  },
  centerAll: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Background Colors
  bgBlack: {
    backgroundColor: '#141414',
  },
  bgMain: {
    backgroundColor: '#DEF263',
  },
  // Tint Colors
  tintBlack: {
    tintColor: '#141414',
  },
  tintMain: {
    tintColor: '#DEF263',
  },
  // Text Colors
  tcBlack: {
    color: '#141414',
  },
  tcMain: {
    color: '#DEF263',
  },
  tcBlack8: {
    color: '#1414141F',
  },
  tcBlack64: {
    color: '#141414A3',
  },
  tcMain16: {
    color: '#DEF26329',
  },
  // Border Colors
  bcBlack: {
    borderColor: '#141414',
  },
  bcMain: {
    borderColor: '#DEF263',
  },
});
