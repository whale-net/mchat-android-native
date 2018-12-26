import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';


export default class Form extends Component<{}> {
	render() {
		return(
			<View style={styles.form}>
				<TextInput
					placeholder="Username"
				/>

			</View>
			)
	}
}

const styles = StyleSheet.create({
	form : {
		flex: 0,
		alignItems: 'center'
	}
})