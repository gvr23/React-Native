import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Spinner = ({ label, imgSrc, onPress, children }) => {
    const { containerStyle, contentLeft, contentRight, verticalDivider } = styles;

    return (
        <TouchableOpacity style={containerStyle} onPress={onPress}>
            <View style={contentLeft}>
                <Text style={{ fontSize: 18 }}>{ label }</Text>
            </View>

            <View style={verticalDivider} />

            <View style={contentRight}>
                <Image style={{ width: 16, height: 16 }} source={imgSrc} />
            </View>

            {children}
        </TouchableOpacity>
    );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#283542',
    marginLeft: 5,
    marginRight: 5
  },
  contentLeft: {
    justifyContent: 'flex-start',
    paddingLeft: 5
  },
  contentRight: {
    justifyContent: 'flex-end',
    paddingRight: 5
  },
  verticalDivider: {
    height: 24,
    width: 0.5,
    marginRight: '20%',
    marginTop: 8,
    marginBottom: 8
  }
};

export { Spinner };
