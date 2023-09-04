import React from 'react';
import {Text} from 'react-native';
// Custom components
import CryptoListObject from '../../../components/ListComponents/CryptoListObject';
import CryptoDataListObject from '../../../components/ListComponents/CryptoDataListObject';
// User tools
import styles from '../../../common/styles';

const ListComponents = () => {
  return (
    <>
      <Text
        style={[
          styles.black,
          styles.title,
          styles.tcBlack,
          styles.marginTop24,
        ]}>
        Components
      </Text>
      <Text
        style={[styles.bold, styles.h2, styles.tcBlack64, styles.marginTop8]}>
        List Components
      </Text>
      <CryptoListObject
        addStyles={[styles.marginTop16]}
        name="CryptoList"
        symbol="USDT"
        USDPrice="$1231231.83"
        BTCRepresentation="0.00 BTC"
        isFirstItem
      />
      <CryptoListObject
        addStyles={[styles.marginTop1]}
        name="CryptoList"
        symbol="CLC"
        USDPrice="$25799.83"
        BTCRepresentation="1.00 BTC"
      />
      <CryptoDataListObject label="Market Cap" value="$502.347.046.167" />
      <CryptoDataListObject
        label="Market Cap"
        value="$502.347.046.167"
        negativeValue
      />
    </>
  );
};

export default React.memo(ListComponents);
