import 'react-native';
import React from 'react';
import CryptoListObject from '../../../../src/components/ListComponents/CryptoListObject';

// Note: import explicitly to use the types shiped with jest.
import {expect, it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';

import styles from '../../../../src/common/styles';

it('renders correctly with no values', () => {
  const crypto = {
    id: 90,
    name: 'test crypto',
    symbol: 'BTC',
    price_usd: '1232134.33',
    price_btc: '12.123',
  };

  const action = () => {
    console.log('action called');
  };
  const tree = renderer.create(
    <CryptoListObject onPress={action} crypto={crypto} />,
  );

  expect(tree).toMatchSnapshot();
});

it('renders correctly with required values only', () => {
  const crypto = {
    id: 90,
    name: 'test crypto',
    symbol: 'BTC',
    price_usd: '1232134.33',
    price_btc: '12.123',
  };

  const action = () => {
    console.log('action called');
  };
  const tree = renderer.create(
    <CryptoListObject
      name={crypto.name}
      symbol={crypto.symbol}
      USDPrice={crypto.price_usd}
      BTCRepresentation={crypto.price_btc}
      onPress={action}
      crypto={crypto}
    />,
  );

  expect(tree).toMatchSnapshot();
});

it('renders correctly with all possible values', () => {
  const crypto = {
    id: 90,
    name: 'test crypto',
    symbol: 'BTC',
    price_usd: '1232134.33',
    price_btc: '12.123',
  };

  const action = () => {
    console.log('action called');
  };
  const tree = renderer.create(
    <CryptoListObject
      addStyles={styles.marginTop24}
      name={crypto.name}
      symbol={crypto.symbol}
      USDPrice={crypto.price_usd}
      BTCRepresentation={crypto.price_btc}
      isFirstItem
      onPress={action}
      crypto={crypto}
    />,
  );

  expect(tree).toMatchSnapshot();
});

it('Should call action with the required crypto object', () => {
  const crypto = {
    id: 90,
    name: 'test crypto',
    symbol: 'BTC',
    price_usd: '1232134.33',
    price_btc: '12.123',
  };

  const action = jest.fn((item: any) => {
    return item;
  });
  const tree = renderer.create(
    <CryptoListObject
      addStyles={styles.marginTop24}
      name={crypto.name}
      symbol={crypto.symbol}
      USDPrice={crypto.price_usd}
      BTCRepresentation={crypto.price_btc}
      isFirstItem
      onPress={action}
      crypto={crypto}
    />,
  );

  const listItem = tree.root.findByProps({
    testID: 'cryptoListObject',
  }).props;

  act(() => listItem.onPress());
  expect(action).toHaveBeenCalledWith(crypto);
});
