import React from 'react';
import {Text, View} from 'react-native';
// Custom components
// User tools
import styles from '../../../common/styles';

const CryptoDataListObject = ({
  addStyles,
  label = '',
  value = '',
  negativeValue = false,
}: {
  addStyles?: any;
  label: string;
  value: string;
  negativeValue?: boolean;
}) => {
  return (
    <View
      style={[
        styles.completeWidth,
        styles.row,
        styles.spaceBetween,
        styles.paddingHorizontal,
        addStyles,
      ]}>
      <Text style={[styles.regular, styles.tcMain]}>{label}</Text>
      <Text
        style={[styles.regular, styles.tcMain, negativeValue && styles.tcRed]}>
        {value}
      </Text>
    </View>
  );
};

export default React.memo(CryptoDataListObject);
