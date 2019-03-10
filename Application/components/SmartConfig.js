import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button  } from 'react-native';
import { Smartconfig } from 'react-native-smartconfig-ll';
// import { NetworkInfo } from 'react-native-network-info';

export default class SmartConfig extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            ssid: '',
            password: ''
        };
        // NetworkInfo.getSSID(ssid => {
        //     this.state.ssid = ssid;
        //   });
        this.state.dataSource = ds.cloneWithRows(this.props.devices);
    }
    _config = () => {
        Smartconfig.start({
            type: 'esptouch', //or airkiss, now doesn't not effect
            ssid: 'Truong Huy',
            bssid: '', //"" if not need to filter (don't use null)
            password: 'Canho18.6',
            timeout: 50000 //now doesn't not effect
          }).then(function(results){
            //Array of device success do smartconfig
            console.log(results);
            /*[
              {
                'bssid': 'device-bssi1', //device bssid
                'ipv4': '192.168.1.11' //local ip address
              },
              {
                'bssid': 'device-bssi2', //device bssid
                'ipv4': '192.168.1.12' //local ip address
              },
              ...
            ]*/
          }).catch(function(error) {
           
          });
           
          Smartconfig.stop(); //interrupt task
        this.props.onPress()
    }
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.text}> SmartConfig </Text>
              <TextInput
                style={styles.input}
                ref={component => this._ssid = component}
                placeholder='SSID'
                onChangeText={(ssid) => this.setState({ssid})}
                autoFocus={true}
                onFocus={this.clearSsid}
              />
              <TextInput
                style={styles.input}
                ref={component => this._password = component}
      					placeholder='Password'
      					onChangeText={(password) => this.setState({password})}
      					secureTextEntry={true}
      					onFocus={this.clearPassword}
      					onSubmitEditing={this._userLogin}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={this._config}
              >
                <Text style={styles.text}> CONFIG </Text>
              </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
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
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: '#2980b9',
    marginTop: 20,
    paddingVertical: 10,
  },
  text: {
    textAlign: 'center',
    color: '#FFFFFF'
  }
});
