import 'react-native';
import React from 'react';
import CryptoDataListObject from '../../../../src/components/ListComponents/CryptoDataListObject';

// Note: import explicitly to use the types shiped with jest.
import {expect, it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import styles from '../../../../src/common/styles';

it('renders correctly with no values', () => {
  const tree = renderer.create(<CryptoDataListObject />);

  expect(tree).toMatchSnapshot();
});

it('renders correctly with required values only', () => {
  const tree = renderer.create(
    <CryptoDataListObject label="Test Crypto" value="TC" />,
  );

  expect(tree).toMatchSnapshot();
});

it('renders correctly with all possible values', () => {
  const tree = renderer.create(
    <CryptoDataListObject
      addStyles={styles.marginTop24}
      label="Test Crypto2"
      value="TC2"
      quote=""
      negativeValue
      noFloat
    />,
  );

  expect(tree).toMatchSnapshot();
});
