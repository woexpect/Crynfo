import {Dimensions, Platform} from 'react-native';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';

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
  completeWidth: {
    width: '100%',
  },
  cryptoListContainer: {
    width: '100%',
    height: verticalScale(64),
  },
  hideOverflow: {
    overflow: 'hidden',
  },
  centerVertically: {
    justifyContent: 'center',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  toEnd: {
    alignItems: 'flex-end',
  },
  roundedTopCorners: {
    borderTopRightRadius: verticalScale(16),
    borderTopLeftRadius: verticalScale(16),
  },
  onTop: {
    position: 'absolute',
  },
  cover: {
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  // Paddings
  paddingRight16: {
    paddingRight: verticalScale(16),
  },
  paddingHorizontal: {
    paddingHorizontal: verticalScale(16),
  },
  // Margins
  marginLeft16: {
    marginLeft: verticalScale(16),
  },
  marginRight16: {
    marginRight: verticalScale(16),
  },
  marginTop8: {
    marginTop: verticalScale(8),
  },
  marginTop1: {
    marginTop: 1,
  },
  marginTop16: {
    marginTop: verticalScale(16),
  },
  marginTop24: {
    marginTop: verticalScale(24),
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
  tcRed: {
    color: '#F26363',
  },
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
  // Font Families
  black: {
    fontFamily: 'Inter-Black',
  },
  bold: {
    fontFamily: 'Inter-Bold',
  },
  semiBold: {
    fontFamily: 'Inter-SemiBold',
  },
  medium: {
    fontFamily: 'Inter-Medium',
  },
  regular: {
    fontFamily: 'Inter-Regular',
  },
  // Font sizes
  cryptoPlaceholder: {
    fontSize: '112@ms0.3',
    includeFontPadding: false,
    lineHeight: '112@ms0.3',
    marginTop: -8,
    marginLeft: -4,
    letterSpacing: -2,
  },
  title: {
    fontSize: '26@ms0.3',
    includeFontPadding: false,
    letterSpacing: 0,
  },
  h1: {
    fontSize: '24@ms0.3',
    includeFontPadding: false,
    letterSpacing: 0,
  },
  h15: {
    fontSize: '22@ms0.3',
    includeFontPadding: false,
    letterSpacing: 0,
  },
  h2: {
    fontSize: '20@ms0.3',
    includeFontPadding: false,
    letterSpacing: 0,
  },
  subtitle: {
    fontSize: '18@ms0.3',
    includeFontPadding: false,
    letterSpacing: 0,
  },
  largerText: {
    fontSize: '16@ms0.3',
    includeFontPadding: false,
    letterSpacing: 0,
  },
  largeText: {
    fontSize: '14@ms0.3',
    includeFontPadding: false,
    letterSpacing: 0,
  },
  mediumText: {
    fontSize: '12@ms0.3',
    includeFontPadding: false,
    letterSpacing: 0,
  },
  normalText: {
    fontSize: '10@ms0.3',
    includeFontPadding: false,
    letterSpacing: 0,
  },
  smallText: {
    fontSize: '6@ms0.3',
    includeFontPadding: false,
    letterSpacing: 0,
  },
});
