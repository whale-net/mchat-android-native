import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form'; 

export default class LoginScreen extends Component {
	static navigationOptions = {
		title: 'Login',
	};

	render() {
		const {navigate} = this.props.navigation;
		return(

				<Button
				    title="Login"
				    onPress={() => navigate('Main')} 
				/>
		
			)
	}
}

