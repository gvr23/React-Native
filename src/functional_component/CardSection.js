import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
  //the style most to the right will override the ones prior
    <View style={[styles.containerStyle, props.style]}>
        {props.children}
    </View>
  );

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    position: 'relative',
    marginTop: 2
  }
};

export { CardSection };
