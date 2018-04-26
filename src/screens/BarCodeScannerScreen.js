import React, { Component } from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import { BarCodeScanner, Permissions } from "expo";

class BarCodeScannerScreen extends Component {
  getInitialState() {
        return {
            showScanner: true
        }
    };
    
  constructor(props) {
    super(props)
    this.state = {
      hasCameraPermission: null,
      emps: null,
      showScanner: true
    }
  }

  async getKey() {
    try {
      const value = await AsyncStorage.getItem("@employees:key");
      this.state.emps = JSON.parse(value);
      if (value !== null) {
        // We have data!!
        console.log(emps);
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  // HELPER FUNCTION
  renderScanner() {
    if (this.state.showScanner) {
       return (
          <View style={{ flex: 1 }}>
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={StyleSheet.absoluteFill}
              barCodeTypes={[BarCodeScanner.Constants.BarCodeType.code39]}
            />
          </View>
        );
    } else {
      return (
        <View></View>
      );
    }
  }

  _handleBarCodeRead = ({ type, data }) => {
    // await delay(500);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    this.setState({ showScanner: false });
    this.state.emps.forEach(employee => {
      if (data == employee.dni) {
        this.props.navigation.navigate("Assistance", {
          current:  employee,
          refresh: this.getInitialState
        });
      }
    });
    // this.props.navigation.navigate("Assistance", { dni: `${data}` });
  };
  // HELPER FUNCTION

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
    this.getKey();
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
       return (
         this.renderScanner()
       );
    }
  }
}

export default BarCodeScannerScreen;
