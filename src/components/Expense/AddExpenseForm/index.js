import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	Image,
	ImageBackground,
	DrawerLayoutAndroid,
	Picker,
	CameraRoll,
	Modal
} from 'react-native';

const inputStyle = { height: 40, marginBottom: 10};
const labelStyle = { fontWeight: 'bold' };

class AddExpenseForm extends Component {

	render() {
		const { onInputChange } = this.props;

		return <View style={{ padding: 10, marginTop: 50 }}>
			<Text style={labelStyle}>Title</Text>
			<TextInput
				style={inputStyle}
				placeholder="milk"
				label='Title'
				onChange={onInputChange('title')}
				name={'title'}
			/>
			<Text style={labelStyle}>Tag</Text>
			<TextInput
				style={inputStyle}
				placeholder="food"
				onChange={onInputChange('tag')}
				name={'tag'}
			/>
			<Text style={labelStyle}>Amount</Text>
			<TextInput
				style={inputStyle}
				placeholder="56"
				onChange={onInputChange('count')}
				name={'count'}
			/>
			<Text style={labelStyle}>Source</Text>
			<TextInput
				style={inputStyle}
				placeholder="cash/card sber"
				onChange={onInputChange('source')}
				name={'source'}
			/>
		</View>
	}
}

AddExpenseForm.propTypes = {

};

export default AddExpenseForm
