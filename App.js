import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Alert,
	TextInput,
	Button,
	Image,
	ImageBackground,
	DrawerLayoutAndroid,
	Picker,
	CameraRoll, Modal
} from 'react-native';
import ExpenseList from "./src/components/Expense/ExpenseList";
import AddExpenseForm from "./src/components/Expense/AddExpenseForm";
import db from './firebase'

const addItem = item => {
	db.ref('/expenses').push(item);
};

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            isRuning: false,
	        isModalOpen: false,
	        expenses: [],
	        scheme: ''
        }
    }

    componentDidMount() {
	    db.ref('/expenses').orderByKey().on('value', data => {
	    	const value = data.val();
	    	if (!value) return;

	    	const expenses = Object.keys(value).map(key => value.hasOwnProperty(key) ? value[key] : null )
			    .filter(e => e);

	    	this.setState({ expenses })
	    });
    }

    render() {
    	const { expenses, isModalOpen, scheme } = this.state;
	    const styles = StyleSheet.create({
		    container: {
			    paddingTop: 50,
			    flex: 1,
			    backgroundColor: scheme || 'transparent',
			    alignItems: 'center',
			    justifyContent: 'center',
			    opacity: 0.7,
		    },
		    value: {
			    fontSize: 50
		    },
		    scretch: {
			    flex: 1,
		    }
	    });
        const navigationView = (
            <View style={styles.container}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Switch color scheme</Text>
                <Picker
                    selectedValue={this.state.scheme}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({scheme: itemValue})}>
                    <Picker.Item label="chill" value="#ff007d" />
                    <Picker.Item label="white" value="#000000" />
                    <Picker.Item label="default" value="" />
                </Picker>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}
            >
	            <ImageBackground style={styles.scretch} source={require('./imgs/one.jpg')}>
		            <View style={styles.container}>
			            {!isModalOpen && <View>
				            <Button title={'Add expense'} onPress={this.handleOpenModal} />
				            <ExpenseList expenses={expenses} />
			            </View>}
			            <Modal
				            animationType="slide"
				            transparent={true}
				            visible={isModalOpen}
				            onRequestClose={() => {
					            //Alert.alert('Modal has been closed.');
					            this.handleCloseModal();
				            }}
			            >
				            <AddExpenseForm onInputChange={this.handleInputChange} />
				            <View style={{
					            flexWrap: 'wrap',
					            alignItems: 'flex-start',
					            justifyContent: 'center',
					            flexDirection:'row',
				            }}>
					            <View style={{marginRight: 20}}>
						            <Button
							            title={'Cancel'}
							            onPress={this.handleCloseModal}
							            color={'#f31f17'}
						            />
					            </View>
				                <Button title={'Add expense'} onPress={this.handleAddExpense}  />
				            </View>
			            </Modal>
		            </View>
	            </ImageBackground>
	        </DrawerLayoutAndroid>
        );
    }

	handleAddExpense = () => {
    	const { title, count, tag, source } = this.state;
		const newItem = {
			title: this.state.title,
			data: [
				this.state.count,
				this.state.tag,
				this.state.source
			]
		};

    	addItem(newItem);
    	this.setState({
		    expenses: [newItem].concat(this.state.expenses)
	    });
    	this.handleCloseModal();
	};

	handleInputChange = field => ev => {
        this.setState({ [field]: ev.nativeEvent.text })
	};

	handleOpenModal = ev => {
		this.setState({ isModalOpen: true })
	};

	handleCloseModal = () => {
    	this.setState({ isModalOpen: false })
	}

}
