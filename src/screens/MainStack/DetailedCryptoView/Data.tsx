import React from 'react';
import {Text} from 'react-native';
// Custom components
import CryptoDataListObject from '../../../components/ListComponents/CryptoDataListObject';
// User tools
import styles from '../../../common/styles';

const DetailedCryptoView = ({crypto}: any) => {
  return (
    <>
      <Text
        style={[styles.bold, styles.tcMain, styles.title, styles.marginTop16]}>
        Data
      </Text>
      <CryptoDataListObject label="Rank" value={`#${crypto.rank}`} noFloat />
      <CryptoDataListObject
        label="Equivalent to"
        value={`${crypto.price_btc}`}
        quote="BTC"
      />
      <CryptoDataListObject
        label="Percent Change 24h"
        value={`${crypto.percent_change_24h}%`}
        negativeValue={crypto.percent_change_24h < 0}
        noFloat
      />
      <CryptoDataListObject
        label="Percent Change 1h"
        value={`${crypto.percent_change_1h}%`}
        negativeValue={crypto.percent_change_1h < 0}
        noFloat
      />
      <CryptoDataListObject
        label="Percent Change 24h"
        value={`${crypto.percent_change_7d}%`}
        negativeValue={crypto.percent_change_7d < 0}
        noFloat
      />
      <CryptoDataListObject
        label="Market Cap"
        value={`${crypto.market_cap_usd}`}
      />
      <CryptoDataListObject label="Volume 24h" value={`${crypto.volume24}`} />
    </>
  );
};

export default React.memo(DetailedCryptoView);
