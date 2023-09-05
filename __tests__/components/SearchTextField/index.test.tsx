import 'react-native';
import React from 'react';
import SearchTextField from '../../../src/components/SearchTextField';

// Note: import explicitly to use the types shiped with jest.
import {expect, it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';

import styles from '../../../src/common/styles';

const searchIcon = require('../../../src/assets/images/icons/search.png');

it('renders correctly with required values only', () => {
  const testValue = 'test';
  const setTestValue = () => {};

  const tree = renderer.create(
    <SearchTextField value={testValue} onChangeText={setTestValue} />,
  );

  expect(tree).toMatchSnapshot();
});

it('renders correctly with all possible values', () => {
  const testValue = 'test';
  const setTestValue = () => {};

  const tree = renderer.create(
    <SearchTextField
      value={testValue}
      onChangeText={setTestValue}
      keyboardType={'number-pad'}
      placeholder="Test Placeholder"
      addStyles={styles.marginTop24}
      secure
      autoCapitalize="none"
      icon={searchIcon}
      placeholderTextColor="#FFFFFF"
    />,
  );

  expect(tree).toMatchSnapshot();
});

it('Should change text value', () => {
  let testValue = 'test';
  const setTestValue = (value: string) => {
    testValue = value;
  };

  const tree = renderer.create(
    <SearchTextField
      value={testValue}
      onChangeText={setTestValue}
      placeholder="Test Placeholder"
    />,
  );

  const searchTextField = tree.root.findByProps({
    placeholder: 'Test Placeholder',
  }).props;

  expect(testValue).toEqual('test');
  act(() => searchTextField.onChangeText('Another thing'));
  expect(testValue).toEqual('Another thing');
});

it('Should run without action set', () => {
  let testValue = 'test';

  const tree = renderer.create(
    <SearchTextField value={testValue} placeholder="Test Placeholder2" />,
  );

  const searchTextField = tree.root.findByProps({
    testID: 'searchTextInput',
  }).props;

  expect(testValue).toEqual('test');
  act(() => searchTextField.onChangeText('Another thing'));
  expect(testValue).toEqual('test');
});
