import React from 'react';
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

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            isRuning: false
        }
    }

    render() {
        const {value, isRuning} = this.state;
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
                renderNavigationView={() => navigationView}>
            <ImageBackground style={styles.scretch} source={require('./imgs/one.jpg')}>
            <View style={styles.container}>
                <Text>Hey, freak!</Text>
                <View>
                    <Text style={styles.value}>{value}</Text>
                </View>
                {/*<TextInput onChangeText={(text) => this.setState({value: text}) }/>*/}
                <Button
                    title={isRuning ? 'Stop me' : 'Kick me'}
                    onPress={isRuning ? this.handleStop : this.handleRun}
                />
            </View>
        </ImageBackground>
        </DrawerLayoutAndroid>
        );
    }

    handleRun = () => {
        this.setState({isRuning: true});
        this.interval = setInterval(() => this.setState(({value}) => ({value: value + 1})), 995)
    };

    handleStop = () => {
        this.setState({isRuning: false});
        clearInterval(this.interval);
    };

    handlePress = () => {
        alert(this.state.value)
    }

    handleCameraRoll = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
        })
            .then(r => {
                this.setState({ photos: r.edges });
            })
            .catch((err) => {
                //Error Loading Images
            });
    };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff007d',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7
  },
  value: {
      fontSize: 50
  },
  scretch: {
      flex: 1,
  }
});
