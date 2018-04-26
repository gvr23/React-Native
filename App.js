import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation';
import WelcomeScreen from "./src/screens/WelcomeScreen";
import BarCodeScannerScreen from './src/screens/BarCodeScannerScreen';
import EmployeeAssisstanceScreen from "./src/screens/EmployeeAssisstanceScreen";

const gear = require("./src/res/drawable/settings.png");

class App extends React.Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

export default StackNavigator(
  {
    Home: {
      screen: WelcomeScreen,
      navigationOptions: {
        title: "Control Asistencia",
        headerStyle: {
          backgroundColor: "#0D5581"
        },
        headerTitleStyle: {
          color: "#fff",
          width: "90%",
          textAlign: "center"
        },
        headerRight: (
          <TouchableOpacity onPress={() => alert("This is a button!")}>
            <Image source={gear} color="#fff" />
          </TouchableOpacity>
        )
      }
    },
    Barcode: {
      screen: BarCodeScannerScreen,
      navigationOptions: {
        title: "Scanner",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#0D5581"
        },
        headerTitleStyle: {
          color: "#fff",
          width: "75%",
          textAlign: "center"
        }
      }
    },
    Assistance: {
      screen: EmployeeAssisstanceScreen,
      navigationOptions: {
        title: "Asistencia",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#0D5581"
        },
        headerTitleStyle: {
          color: "#fff",
          width: "75%",
          textAlign: "center"
        }
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);
