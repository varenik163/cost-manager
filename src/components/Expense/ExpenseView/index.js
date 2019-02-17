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
	CameraRoll
} from 'react-native';

class ExpenseView extends Component {

	componentDidMount() {

	}

	render() {
		const {title, tag, count, source} = this.props;

		return <View>
			<Text style={{color: '#fff'}}>{title}</Text>
			<Text>Category: {tag}</Text>
			<Text>Count: {count}</Text>
			<Text>Source of write-off: {source}</Text>
		</View>
	}
}

ExpenseView.propTypes = {
	title: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired,
	source: PropTypes.string.isRequired
};

export default ExpenseView
