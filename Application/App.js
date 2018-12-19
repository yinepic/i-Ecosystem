import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Main from './components/Main.js';
import Login from './components/Login.js';
import Add from './components/Add.js';


export default class App extends React.Component {
  state = {
    username: '',
    password: '',
    isLoginIn: true,
    state: 'Login',
    devices: ["+"],
  }
  render() {
    switch(this.state.state) {
      case 'Login':
        return (
          <Login
                onLoginPress={(username) => this.setState({state: 'Main', username})}
            />
        );
      case 'Main':
        return (
            <Main
                onLoginPress={() => this.setState({state: 'Login'})}
                onAddPress={() => this.setState({state: 'Add'})}
                username={this.state.username}
                devices={this.state.devices}
            />
        );
      case 'Add':
        return (
            <Add
                onLoginPress={() => this.setState({state: 'Main'})}
                updateDevices={(devices) => this.setState(devices)}
                username={this.state.username}
                devices={this.state.devices}
            />
        );
      default:
        return (
          <View style={styles.container}>
            <Text> Unknow State </Text>
          </View>
        );
    }
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
});
