import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Splash from './components/Splash.js';
import Login from './components/Login.js';


export default class App extends React.Component {
  state = {
    email: '',
    password: '',
    isLoginIn: false
  }
  render() {
    if (this.state.isLoggedIn)
      return (
        <View style={styles.container}>
          <Splash
              onLoginPress={() => this.setState({isLoggedIn: false})}
          />
        </View>
      );
    else
      return (
        <View style={styles.container}>
          <Login
            onLoginPress={() => this.setState({isLoggedIn: true})}
          />
        </View>
      );
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
