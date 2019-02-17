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

class YMViewer extends Component {

	componentDidMount() {

	}

	render() {
		const {list} = this.props;

		return <View>

		</View>
	}
}

YMViewer.propTypes = {};

export default connect(state => ({}), {})(YMViewer)
