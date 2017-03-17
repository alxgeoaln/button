import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


class Header extends Component {
  render() {
    return (
      <View style={styles.titleView}>
            <Text style={styles.titleText}>
                Example
            </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  titleView: {
        backgroundColor: '#3B3E4F',
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row'
    },
    titleText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1,
        fontSize: 20,
    }
});

export default Header;
