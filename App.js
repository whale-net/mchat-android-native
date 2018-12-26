/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import LoginScreen from './src/pages/Login';
import MainScreen from './src/pages/MainScreen';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const App = createStackNavigator({
  Login: {screen: LoginScreen},
  Main: {screen: MainScreen}
});

export default createAppContainer(App);
