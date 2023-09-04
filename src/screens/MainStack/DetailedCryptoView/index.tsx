import React from 'react';
import {StatusBar, Text, View} from 'react-native';
// Custom components
import Data from './Data';
import Market from './Market';
// User tools
import styles from '../../../common/styles';

const DetailedCryptoView = ({route}: any) => {
  const cryptoBaseInfo = route?.params?.crypto;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View
        style={[
          styles.completeScreen,
          styles.paddingHorizontal,
          styles.bgBlack,
        ]}>
        <View style={styles.centerVertically}>
          <Text
            style={[
              styles.black,
              styles.tcMain16,
              styles.biTitle,
              styles.marginTop16,
            ]}>
            {cryptoBaseInfo.symbol}
          </Text>
          <Text
            style={[
              styles.bold,
              styles.tcMain,
              styles.title,
              styles.marginTop24,
              styles.onTop,
            ]}>
            {cryptoBaseInfo.name}
          </Text>
        </View>
        <Data crypto={cryptoBaseInfo} />
        <Market cryptoId={cryptoBaseInfo?.id} />
      </View>
    </>
  );
};

export default React.memo(DetailedCryptoView);
