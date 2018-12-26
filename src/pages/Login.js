import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form'; 

export default class Login extends Component<{}> {
	render() {
		return(
			<View style={styles.logo}>
				<Logo/>
				<Form/>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	logo : {
		flex: 1,
		alignItems: 'center'
	}
})