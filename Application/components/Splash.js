import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Splash extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.props.onLoginPress}
            >
              <Text style={styles.text}> LOGOUT </Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
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
