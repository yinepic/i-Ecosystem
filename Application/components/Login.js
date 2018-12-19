import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button  } from 'react-native';

export default class Login extends React.Component {
    state =  {
      text: '',
      username: '',
      password: ''
    }
    _userLogin = () => {
      if (this.state.username == "admin" && this.state.password == "1234") {
        this.props.onLoginPress(this.state.username)
      }
    }
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.text}> Login </Text>
              <TextInput
                style={styles.input}
                ref={component => this._username = component}
                placeholder='Username'
                onChangeText={(username) => this.setState({username})}
                autoFocus={true}
                onFocus={this.clearUsername}
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
                onPress={this._userLogin}
              >
                <Text style={styles.text}> LOGIN </Text>
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
