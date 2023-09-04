import React, {useEffect, useRef, useState} from 'react';
import {FlatList, StatusBar, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// Custom components
import CryptoListObject from '../../../components/ListComponents/CryptoListObject';
import SearchTextField from '../../../components/SearchTextField';
// User tools
import styles from '../../../common/styles';
import {SKIP_LIMIT_NUMBER} from '../../../redux/commons';
import {getCoins, resetCoinsContent} from '../../../redux/slices/appSlice';
import {AppDispatch} from '../../../redux/store';
import useConnection from '../../../common/hooks/useConnection';
import {DETAILED_CRYPTO_VIEW} from '../../../common/routes';

const searchIcon = require('../../../assets/images/icons/search.png');

const Home = ({navigation}: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const flatListRef = useRef(null);
  const connected = useConnection();

  // App state data
  const {data, endReached, loading} = useSelector((state: any) => state.app);

  // Local screen's data
  const [currencySearch, setCurrencySearch] = useState('');
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
      dispatch(
        getCoins({
          start: `${skip + SKIP_LIMIT_NUMBER}`,
          limit: `${SKIP_LIMIT_NUMBER}`,
        }),
      );
    }
  };

  const refresh = () => {
    if (!loading) {
      setSkip(0);
      dispatch(resetCoinsContent());
      dispatch(getCoins({start: '0', limit: `${SKIP_LIMIT_NUMBER}`}));
    }
  };

  const renderCrypto = ({item}: any) => {
    return (
      <CryptoListObject
        addStyles={[styles.marginTop1]}
        name={item.name}
        symbol={item.symbol}
        USDPrice={item.price_usd}
        BTCRepresentation={item.price_btc}
        crypto={item}
        onPress={navigateToCryptoDetail}
      />
    );
  };

  const navigateToCryptoDetail = (crypto: any) => {
    navigation.navigate(DETAILED_CRYPTO_VIEW, {crypto});
  };

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View
        style={[
          styles.completeScreen,
          styles.paddingHorizontal,
          styles.bgBlack,
        ]}>
        <SearchTextField
          addStyles={styles.marginTop24}
          icon={searchIcon}
          placeholder="Search Currency"
          value={currencySearch}
          onChangeText={setCurrencySearch}
          autoCapitalize="none"
        />
        <Text
          style={[
            styles.bold,
            styles.tcMain,
            styles.title,
            styles.marginTop16,
          ]}>
          Rank
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
            renderItem={renderCrypto}
            keyExtractor={item => item?.id}
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
      </View>
    </>
  );
};

export default React.memo(Home);
