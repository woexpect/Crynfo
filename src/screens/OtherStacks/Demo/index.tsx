import React from 'react';
import {StatusBar, ScrollView} from 'react-native';
// Custom components
import ListComponents from './listComponents';
import OtherComponents from './otherComponents';
import TextStyles from './textStyles';
// User tools
import styles from '../../../common/styles';

const Demo = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.completeScreen}>
        <TextStyles />
        <ListComponents />
        <OtherComponents />
      </ScrollView>
    </>
  );
};

export default React.memo(Demo);
