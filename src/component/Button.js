import React from 'react';
import { Text, TouchableOpacity, Dimensions } from 'react-native';

const { height, width, fontScale } = Dimensions.get('window');

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: '#0FB6FF',
    borderRadius: 25,
    padding: 5,
    width: 100,
    borderColor: '#007aff',
    margin: 15,
    justifyContent: 'center',
  },
};

export default Button;
