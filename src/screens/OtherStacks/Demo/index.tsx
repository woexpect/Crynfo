import React from 'react';
import {StatusBar, ScrollView} from 'react-native';
// Custom components
// User tools
import styles from '../../../common/styles';
import TextStyles from './textStyles';
import ListComponents from './listComponents';

const Demo = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.completeScreen}>
        <TextStyles />
        <ListComponents />
      </ScrollView>
    </>
  );
};

export default React.memo(Demo);
