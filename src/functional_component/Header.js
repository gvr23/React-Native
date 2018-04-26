//import library to use
import React from 'react';
import { Text, View } from 'react-native';

//Create the component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    shadowColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: 60,
    elevation: 3,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 }
  }
};

//<make the component available to other parts of the app
export { Header };
