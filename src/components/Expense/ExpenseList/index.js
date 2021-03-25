import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
	StyleSheet,
	Text,
	View,
	SectionList
} from 'react-native';

class ExpenseList extends Component {
	render() {
		const { expenses } = this.props;

		return <View style={styles.container}>
			{expenses.map(e => (
				<View style={{ ...styles.item }}>
					<View style={{ ...styles.itemPart }}>
						<Text style={{ ...styles.title }}>
							{e.title}
						</Text>
						<Text>{e.data[1]}</Text>
					</View>
					<View style={{ ...styles.itemPart }}>
						<Text style={{ ...styles.title }}>
							{e.data[0] + ' руб.'}
						</Text>
						<Text>
							{e.data[2]}
						</Text>
					</View>
				</View>
			))}
			{/*<SectionList
				renderItem={({item, index, section}) => (
					<Text style={styles.item} key={index}>
						<Text style={{fontWeight: 'bold'}}>
							{index === 0 ? 'Count: ' : index === 1 ? 'Category: ' : 'Source: '}
						</Text>
						{item}
					</Text>
				)}
				renderSectionHeader={({section: {title}}) => (
					<Text style={{ ...styles.item, ...styles.title }}>{title}</Text>
				)}
				sections={expenses}
				keyExtractor={(item, index) => item + index}
				SectionSeparatorComponent={() => <Text styles={{ marginBottom: 50 }}/>}
			/>*/}
		</View>
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22,
		flexDirection: 'column'
	},
	item: {
		padding: 10,
		height: 60,
		backgroundColor: '#f9fff6',
		width: 300,
		marginBottom: 5,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	itemPart: {

	},
	title: {
		fontWeight: 'bold',
		fontSize: 16,
		marginBottom: 5,
		flexWrap: 'wrap',
		width: 180
	}
});

ExpenseList.propTypes = {
	expenses: PropTypes.array.isRequired
};

export default ExpenseList
