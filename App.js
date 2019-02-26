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
import ExpenseView from "./src/components/Expense/ExpenseView";
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
	        expenses: []
        }
    }

    render() {
    	const { expenses, isModalOpen } = this.state;
        const navigationView = (
            <View style={styles.container}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Choose your desteny</Text>
                <Picker
                    selectedValue={this.state.language}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Burn in Hell" value="java" />
                    <Picker.Item label="Fuck 'till death in your ass" value="js" />
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
			            <Button title={'Add expense'} onPress={this.handleOpenModal} />
			            <ExpenseList expenses={expenses} />
			            <Modal
				            animationType="slide"
				            transparent={false}
				            visible={isModalOpen}
				            onRequestClose={() => {
					            //Alert.alert('Modal has been closed.');
					            this.handleCloseModal();
				            }}
			            >
				            <AddExpenseForm onInputChange={this.handleInputChange} />
				            <View style={{ marginBottom: 20 }}>
					            <Button
						            title={'Cancel'}
						            onPress={this.handleCloseModal}
						            color={'#f31f17'}
					            />
				            </View>
				            <Button title={'Add expense'} onPress={this.handleAddExpense}  />
			            </Modal>
			            {/*<ExpenseView
				            title={'First expense'}
				            tag={'all'}
				            count={1200}
				            source={'cash'}
			            />*/}
		            </View>
	            </ImageBackground>
	        </DrawerLayoutAndroid>
        );
    }

	handleAddExpense = () => {
    	const { title, count, tag, source } = this.state;
    	addItem({
		    title, count, tag, source
	    });
    	this.setState({
		    expenses: [{
		    	title: this.state.title,
			    data: [
				    this.state.count,
				    this.state.tag,
				    this.state.source
			    ]
		    }].concat(this.state.expenses)
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

const styles = StyleSheet.create({
  container: {
  	paddingTop: 50,
    flex: 1,
    backgroundColor: '#ff007d',
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
