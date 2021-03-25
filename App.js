import React from 'react';
import {
	StyleSheet,
	View,
	Button,
	ImageBackground,
	DrawerLayoutAndroid,
	ScrollView,
	Modal
} from 'react-native';
import db from './firebase'

import ExpenseList from "./src/components/Expense/ExpenseList";
import AddExpenseForm from "./src/components/Expense/AddExpenseForm";
import Navigation from './src/components/Navigation'

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
      console.log(data)
      const value = data.val();
      if (!value) return;

      const expns = Object.keys(value).map(key => value.hasOwnProperty(key) ? value[key] : null )
		    .filter(e => e);

      this.setState({ expenses: expns || [] })
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
		    opacity: 0.85,
	    },
	    value: {
		    fontSize: 50
	    },
	    scretch: {
		    flex: 1,
	    }
    });
    const navigationView = <Navigation
      styles={styles}
      setScheme={(itemValue, itemIndex) => this.setState({scheme: itemValue})}
      scheme={this.state.scheme}
    />;

      return (
        <ImageBackground style={styles.scretch} source={require('./imgs/one.jpg')}>
          <ScrollView
	          // drawerWidth={300}
	          // drawerPosition={DrawerLayoutAndroid.positions.Left}
	          // renderNavigationView={() => navigationView}
          >
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
          </ScrollView>
        </ImageBackground>
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
