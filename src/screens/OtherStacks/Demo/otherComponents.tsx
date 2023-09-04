import React, {useState} from 'react';
import {Text} from 'react-native';
// Custom components
import SearchTextField from '../../../components/SearchTextField';
// User tools
import styles from '../../../common/styles';

const searchIcon = require('../../../assets/images/icons/search.png');

const OtherComponents = () => {
  const [test, setTest] = useState('');
  return (
    <>
      <Text
        style={[styles.bold, styles.h2, styles.tcBlack64, styles.marginTop8]}>
        Other Components
      </Text>
      <SearchTextField
        addStyles={styles.marginTop16}
        icon={searchIcon}
        placeholder="Search Currency"
        value={test}
        onChangeText={setTest}
        autoCapitalize="none"
      />
    </>
  );
};

export default React.memo(OtherComponents);
