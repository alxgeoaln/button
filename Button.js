import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Alert
} from 'react-native';


const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

class Buttons extends Component {
  render() {
    return (
      <Button
          onPress={onButtonPress}
          title="Press Purple"
          color="#841584"
          accessibilityLabel="Learn more about purple"
        />
    );
  }
}

const styles = StyleSheet.create({
  
});

export default Buttons;
