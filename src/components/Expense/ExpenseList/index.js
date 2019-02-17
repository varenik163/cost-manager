import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {
	StyleSheet,
	Text,
	View,
	SectionList,
	TextInput,
	Button,
	Image,
	ImageBackground,
	DrawerLayoutAndroid,
	Picker,
	CameraRoll
} from 'react-native';

class ExpenseList extends Component {

	componentDidMount() {

	}

	render() {
		const { expenses } = this.props;

		return <View style={styles.container}>
			<SectionList
				renderItem={({item, index, section}) => <Text style={styles.item} key={index}>
					<Text style={{fontWeight: 'bold'}}>
						{index === 0 ? 'Count: ' : index === 1 ? 'Category: ' : 'Source: '}
					</Text>
					{item}
				</Text>}
				renderSectionHeader={({section: {title}}) => (
					<Text style={styles.title}>{title}</Text>
				)}
				sections={expenses}
				keyExtractor={(item, index) => item + index}
			/>
		</View>
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22
	},
	item: {
		padding: 10,
		height: 44,
		backgroundColor: '#94ffff',
		width: 300,
		marginBottom: 5
	},
	title: {
		fontWeight: 'bold',
		//color: '#fff',
		fontSize: 21,
		marginBottom: 10
	}
});

ExpenseList.propTypes = {
	expenses: PropTypes.array.isRequired
};

export default ExpenseList
