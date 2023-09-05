import React from 'react';
import {Image, TextInput, View} from 'react-native';
// Custom components
// User tools
import styles from '../../common/styles';

const SearchTextField = ({
  value,
  onChangeText,
  keyboardType = 'default',
  placeholder = '',
  addStyles,
  secure = false,
  autoCapitalize,
  icon,
  placeholderTextColor,
}: {
  value: any;
  onChangeText: any;
  keyboardType?: any;
  placeholder?: string;
  addStyles?: any;
  secure?: boolean;
  autoCapitalize?: any;
  icon?: any;
  placeholderTextColor?: string;
}) => {
  const setFieldValue = (incomingValue: string) => {
    if (onChangeText) {
      onChangeText(incomingValue);
    }
  };

  return (
    <View style={addStyles}>
      <View style={styles.textFieldContainer}>
        {icon && (
          <View style={styles.iconInputContainer}>
            <Image source={icon} style={[styles.icon, styles.tintMain]} />
          </View>
        )}
        <TextInput
          style={[styles.input, styles.regular, icon && styles.inputWithIcon]}
          onChangeText={setFieldValue}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor || '#DEF263'}
          keyboardType={keyboardType}
          secureTextEntry={secure}
          autoCapitalize={autoCapitalize}
          testID="searchTextInput"
        />
      </View>
    </View>
  );
};

export default React.memo(SearchTextField);
