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

class AddExpenseForm extends Component {

	componentDidMount() {

	}

	render() {
		const { onInputChange } = this.props;

		return <View style={{padding: 10}}>
			<TextInput
				style={{height: 40}}
				placeholder="Type title here"
				onChange={onInputChange('title')}
				name={'title'}
			/>
			<TextInput
				style={{height: 40}}
				placeholder="Type tag here"
				onChange={onInputChange('tag')}
				name={'tag'}
			/>
			<TextInput
				style={{height: 40}}
				placeholder="Type count here"
				onChange={onInputChange('count')}
				name={'count'}
			/>
			<TextInput
				style={{height: 40}}
				placeholder="Type source here"
				onChange={onInputChange('source')}
				name={'source'}
			/>
		</View>
	}
}

AddExpenseForm.propTypes = {

};

export default AddExpenseForm
