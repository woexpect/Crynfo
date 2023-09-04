import React from 'react';
import {Text} from 'react-native';
// Custom components
// User tools
import styles from '../../../common/styles';

const TextStyles = () => {
  return (
    <>
      <Text
        style={[
          styles.black,
          styles.title,
          styles.tcBlack,
          styles.marginTop24,
        ]}>
        Text Font, Size & colors
      </Text>
      <Text
        style={[
          styles.black,
          styles.title,
          styles.tcBlack,
          styles.marginTop16,
        ]}>
        Black Title
      </Text>
      <Text style={[styles.bold, styles.h1, styles.tcBlack64]}>Bold H1</Text>
      <Text style={[styles.semiBold, styles.h15, styles.tcBlack8]}>
        Semibold H1.5
      </Text>
      <Text style={[styles.medium, styles.h2, styles.tcMain16, styles.bgBlack]}>
        Medium H2
      </Text>
      <Text style={[styles.regular, styles.subtitle, styles.tcMain]}>
        Regular Subtitle
      </Text>
      <Text style={[styles.regular, styles.largerText, styles.tcRed]}>
        Regular Red Larger
      </Text>
      <Text style={[styles.regular, styles.largeText, styles.tcBlack]}>
        Regular Large
      </Text>
      <Text style={[styles.regular, styles.mediumText, styles.tcBlack]}>
        Regular Medium
      </Text>
      <Text style={[styles.regular, styles.normalText, styles.tcBlack]}>
        Regular Normal
      </Text>
      <Text style={[styles.regular, styles.smallText, styles.tcBlack]}>
        Regular Small
      </Text>
    </>
  );
};

export default React.memo(TextStyles);
