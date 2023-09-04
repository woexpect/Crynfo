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
        <Text style={[styles.black, styles.title]}>Black</Text>
        <Text style={[styles.bold, styles.h1]}>Bold</Text>
        <Text style={[styles.semiBold, styles.h15]}>Semibold</Text>
        <Text style={[styles.medium, styles.h2]}>Medium</Text>
        <Text style={[styles.regular, styles.subtitle]}>Regular</Text>
      </View>
    </>
  );
};

export default React.memo(Home);
