import React from 'react';
import {Text, View} from 'react-native';
// Custom components
// User tools
import styles from '../../../common/styles';

const CryptoDataListObject = ({
  addStyles,
  label = '',
  value = '',
  quote = '',
  negativeValue = false,
  noFloat = false,
}: {
  addStyles?: any;
  label: string;
  value: string;
  quote?: string;
  negativeValue?: boolean;
  noFloat?: boolean;
}) => {
  const formattedNumber = parseFloat(value).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <View
      style={[
        styles.completeWidth,
        styles.row,
        styles.spaceBetween,
        addStyles,
      ]}>
      <Text style={[styles.regular, styles.tcMain]}>{label}</Text>
      <View style={styles.row}>
        <Text
          style={[
            styles.regular,
            styles.tcMain,
            negativeValue && styles.tcRed,
          ]}>
          {noFloat ? value : formattedNumber}
        </Text>
        <Text
          style={[
            styles.regular,
            styles.tcMain,
            styles.marginLeft16,
            negativeValue && styles.tcRed,
          ]}>
          {quote}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(CryptoDataListObject);
