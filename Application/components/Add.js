import React from 'react';
import { StyleSheet, Text, Dimensions, LayoutAnimation, View, TextInput, TouchableOpacity } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class Add extends React.Component {
    constructor(props) {
        super(props);
        var length = this.props.devices.length;
        this.state = {
            name: 'devices ' + this.props.devices.length,
            hasCameraPermission: null,
            lastScannedUrl: null,
        };
        // this.state.dataSource = ds.cloneWithRows(this.props.devices);
    }
    componentDidMount() {
      this._requestCameraPermission();
    }
  
    _requestCameraPermission = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({
        hasCameraPermission: status === 'granted',
      });
    }
  
    _handleBarCodeRead = result => {
      if (result.data !== this.state.lastScannedUrl) {
        LayoutAnimation.spring();
        this.setState({ lastScannedUrl: result.data });
      }
    }
    render() {
        return (
            <View style={styles.container}>
                    {this.state.hasCameraPermission === null
                      ? <Text>Requesting for camera permission</Text>
                      : this.state.hasCameraPermission === false
                      ? <Text style={{ color: '#fff' }}>
                      Camera permission is not granted
                      </Text>
                      : <BarCodeScanner
                        onBarCodeRead={this._handleBarCodeRead}
                        style={{
                          height: 300,
                          width: Dimensions.get('window').width,
                  }}
                />}
            <Text> {this.state.lastScannedUrl} </Text>
            <TextInput
                style={styles.input}
                ref={component => this._name = component}
                placeholder='Device name'
                onChangeText={(name) => this.setState({name})}
                autoFocus={false}
                onFocus={this.clearName}
                value={this.state.name}
              />
            <TouchableOpacity
              style={styles.button}
              activeOpacity={this.state.lastScannedUrl == null ? 1 : 0.7}
              disabled={this.state.lastScannedUrl == null ? true : false}
              onPress={this._addDeivice}
            >
              <Text style={styles.text}> OK </Text>
            </TouchableOpacity>
            </View>
        )
    }

    _addDeivice = () => {
        var length = this.props.devices.length;
        const devices = this.props.devices;
        devices.pop();
        devices.push(this.state.name);
        devices.push("+");
        this.props.updateDevices(devices)
        this.props.onLoginPress()
   }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db'
  },
  input: {
    height: 40, width: 200,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginTop: 10,
    color: '#FFF',
    paddingHorizontal: 10,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#2980b9',
    marginTop: 20,
    paddingVertical: 10,
    width: 100
  },
  text: {
    textAlign: 'center',
    color: '#FFFFFF'
  }
});
