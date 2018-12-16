import React from 'react';
import { StyleSheet, Text, View, ListView, Image, TouchableOpacity } from 'react-native';

export default class Main extends React.Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            datas: ["+"],
            dataSource: []
        };
        this.state.dataSource = ds.cloneWithRows(this.state.datas);
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView contentContainerStyle={styles.list}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                />
            <TouchableOpacity
              style={styles.button}
              onPress={this.props.onLoginPress}
            >
              <Text style={styles.text}> LOGOUT </Text>
            </TouchableOpacity>
            </View>
        )
    }

    _renderRow (rowData) {
        return (
            <TouchableOpacity
                style={styles.row}
                onPress={() => { this._pressRow(rowData) }}
            >
                <Text> {rowData} </Text>
            </TouchableOpacity>
        )
    }

    _pressRow = (rowData) => {
        if (rowData == "+") {
            var lengthData = this.state.datas.length;
            const datas = this.state.datas;
            datas.pop();
            datas.push("device " + lengthData);
            datas.push("+");
            this.setState({
                datas: datas
            });
            const ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            });
            
            this.setState({
                dataSource: ds.cloneWithRows(this.state.datas)
            });
        }
      }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
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
