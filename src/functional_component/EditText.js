import React from 'react';
import { TextInput, View, Text } from 'react-native';

const EditText = ({ label, onChangeText, value, placeholder, secureTextEntry }, props) => {
  const { editTextStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={[containerStyle, props.style]}>
          <Text style={labelStyle}>{label}</Text>
          <TextInput
            autoCorrect={false}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
            style={editTextStyle}
          />
        </View>
    );
};

const styles = {
  editTextStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 3
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 5,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { EditText };
