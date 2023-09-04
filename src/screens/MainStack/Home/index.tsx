import React from 'react';
import {StatusBar, Text, View} from 'react-native';
// Custom components
// User tools
import styles from '../../../common/styles';

const Home = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.completeScreen}>
        <Text>Hola mundo</Text>
      </View>
    </>
  );
};

export default React.memo(Home);
