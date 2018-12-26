import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';


export default class MainScreen extends Component {


	render() {
		const {navigate} = this.props.navigation;
		return(
				<Text>Welcom</Text>
			)
	}
}
