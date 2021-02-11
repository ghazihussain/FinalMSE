import React from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
const { height, width, fontScale } = Dimensions.get('window');

const Input = ({ value, onChangeText, placeholder, secureTextEntry, label }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={{ width: '100%' }}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholderTextColor={"#7E7E7E"}
        placeholder={placeholder}
        autoCorrect={false}
        style={styles.inputBox}
        value={value}
        autoCapitalize={'none'}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    width: '100%',
    borderBottomColor: 'rgba(158, 150, 150, .5)',
    borderBottomWidth: 1,
    // paddingHorizontal: 16,
    padding: 15,

    fontSize: 16,
    // marginVertical: 10,
    backgroundColor: '#ffffff',
  },

  labelStyle: {
    fontSize: 12,
    paddingLeft: 15,
    marginTop: 10,
    color: '#7E7E7E',
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Input;
