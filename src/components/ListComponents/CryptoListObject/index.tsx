import React from 'react';
import {Pressable, Text, View} from 'react-native';
// Custom components
// User tools
import styles from '../../../common/styles';

const CryptoListObject = ({
  addStyles,
  name = '',
  symbol = '',
  USDPrice = '$0',
  BTCRepresentation = '0.00BTC',
  isFirstItem = false,
}: {
  addStyles?: any;
  name: string;
  symbol: string;
  USDPrice: string;
  BTCRepresentation: string;
  isFirstItem?: boolean;
}) => {
  return (
    <Pressable
      style={[
        styles.cryptoListContainer,
        styles.hideOverflow,
        styles.bgMain,
        styles.centerVertically,
        isFirstItem && styles.roundedTopCorners,
        addStyles,
      ]}>
      <Text style={[styles.tcBlack8, styles.black, styles.cryptoPlaceholder]}>
        {symbol}
      </Text>
      <View
        style={[
          styles.onTop,
          styles.cover,
          styles.centerVertically,
          styles.row,
        ]}>
        <View style={[styles.completeScreen, styles.centerVertically]}>
          <Text
            style={[
              styles.tcBlack,
              styles.semiBold,
              styles.largerText,
              styles.marginLeft16,
            ]}>
            {name}
          </Text>
        </View>
        <View
          style={[
            styles.completeScreen,
            styles.spaceEvenly,
            styles.toEnd,
            styles.paddingRight16,
          ]}>
          <Text style={[styles.tcBlack, styles.semiBold, styles.largeText]}>
            {USDPrice}
          </Text>
          <Text style={[styles.tcBlack64, styles.semiBold, styles.largeText]}>
            {BTCRepresentation}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default React.memo(CryptoListObject);
