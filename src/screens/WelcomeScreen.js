import React, { Component } from "react";
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, ImageBackground, Image, AsyncStorage} from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import { Button } from '../functional_component';

const remote = require("../res/drawable/background.png");

class WelcomeScreen extends Component {
  componentWillMount() {
    axios
      .post("http://23.21.168.223/AssistanceControlWS/Service1.svc/syncInfo", {
        password: "DsBm0b1l3=08"
      })
      .then(response => this.saveKey(response.data.employees));
  }

  updateState(value) {
    this.setState({ employees: value });
  }

  async saveKey(value) {
    try {
      this.updateState(value);
      await AsyncStorage.setItem("@employees:key", JSON.stringify(value));
      this.renderEmployee();
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  renderEmployee() {
    console.log(this.state);
  }

  //HELPER FUNCTION
  onButtonPress() {
    // console.log('scanning');
    // Alert.alert('scanning');
    this.props.navigation.navigate("Barcode");
  }
  //HELPER FUNCTION

  render() {
    return (
      <ImageBackground source={remote} style={styles.imageContainerStyle}>
        <View
          style={{
            flex: 1,
            flexGrow: 8,
            alignSelf: "center",
            justifyContent: "center"
          }}
        >
          <View style={styles.contentStyle}>
            <View style={{ height: 125, width: 4, backgroundColor: "#fff" }} />
            <Text
              style={{
                textAlign: "center",
                fontSize: 40,
                color: "#fff",
                marginLeft: 24
              }}
            >
              ¡Hola!{"\n"}Buenas{"\n"}Tardes
            </Text>
          </View>

          <Image
            style={{ alignSelf: "center", marginTop: 42 }}
            source={require("../res/drawable/logo.png")}
          />
        </View>

        <Button
          styles={styles.buttonStyle}
          onPress={this.onButtonPress.bind(this)}
        >
          <Text style={styles.textStyle}>Registrate</Text>
        </Button>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageContainerStyle: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: "rgba(0,0,0,0)"
  },
  backgroundImageStyle: {
    flex: 1,
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height
    resizeMode: "cover"
  },
  contentStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  buttonStyle: {
    width: Dimensions.get("window").width,
    height: 15,
    marginLeft: 0,
    marginRight: 0,
    padding: 10,
    backgroundColor: "#0D5581",
    borderRadius: 0,
    borderWidth: 0,
    borderColor: "#1C00ff00"
  }
});

export default WelcomeScreen;