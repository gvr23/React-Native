import React, { Component } from "react";
import { View, Text } from "react-native";

class WelcomeScreen extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const { dni ,name ,firstSurname } = params.current;
    return <View>
        <Text>{dni}</Text>
        <Text>{name}</Text>
        <Text>{firstSurname}</Text>
      </View>;
  }
}

export default WelcomeScreen;
