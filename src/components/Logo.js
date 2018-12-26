import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

export default class Login extends Component<{}> {
	render() {
		return(
			<Image   style={{width:50, height:50}}
			source={require('../img/m_chat.png')}/>
			)
	}
}

