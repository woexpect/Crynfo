import React, {useRef, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// Custom components
// User tools
import styles from '../../../common/styles';
import {AppDispatch} from '../../../redux/store';
import useConnection from '../../../common/hooks/useConnection';
import CryptoDataListObject from '../../../components/ListComponents/CryptoDataListObject';
import {SKIP_LIMIT_NUMBER} from '../../../redux/commons';
import {
  getCoinMarket,
  resetMarketContent,
} from '../../../redux/slices/appSlice';

const Market = ({cryptoId}: {cryptoId: string}) => {
  const dispatch = useDispatch<AppDispatch>();
  const flatListRef = useRef(null);
  const connected = useConnection();

  // App state data
  const {data, endReached, loading} = useSelector(
    (state: any) => state.app.market,
  );

  // Local screen's data
  const [skip, setSkip] = useState(0);

  const bottomContentSpacer = () => {
    return (
      <>
        <View style={styles.contentSpacerLarge} />
        <View style={styles.contentSpacerLarge} />
      </>
    );
  };

  const loadMoreItems = () => {
    if (!loading && !endReached) {
      setSkip(skip + SKIP_LIMIT_NUMBER);
      dispatch(getCoinMarket({id: cryptoId}));
    }
  };

  const refresh = () => {
    if (!loading) {
      setSkip(0);
      dispatch(resetMarketContent());
      dispatch(getCoinMarket({id: cryptoId}));
    }
  };

  const renderCryptoData = ({item}: any) => {
    return (
      <CryptoDataListObject
        label={item?.name}
        value={`${item.price_usd}`}
        quote={`${item.quote}`}
      />
    );
  };

  return (
    <>
      <Text
        style={[styles.bold, styles.tcMain, styles.title, styles.marginTop16]}>
        Market
      </Text>
      {data.length === 0 && (
        <Text style={[styles.bold, styles.tcRed, styles.title]}>
          No data available
        </Text>
      )}
      {connected ? (
        <FlatList
          ref={flatListRef}
          style={[styles.completeScreen, styles.marginTop16]}
          data={data}
          renderItem={renderCryptoData}
          keyExtractor={item => `${item?.name}${item?.base}${item?.quote}`}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMoreItems}
          onEndReachedThreshold={0.2}
          scrollEventThrottle={500}
          onRefresh={refresh}
          refreshing={loading}
          ListFooterComponent={bottomContentSpacer()}
        />
      ) : (
        <Text style={[styles.bold, styles.tcRed, styles.title]}>
          No internet connection
        </Text>
      )}
    </>
  );
};

export default React.memo(Market);
