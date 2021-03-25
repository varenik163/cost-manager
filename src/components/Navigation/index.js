import React from "react";
import { Picker, Text, View } from "react-native";

const Navigation = ({ scheme, setScheme, styles: appStyles }) => {
	const styles = appStyles;
	// styles.color = scheme ? '#fff' : '#000';

	 return (
		 <View style={styles.container}>
			 <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Switch color scheme</Text>
			 <Picker
				 selectedValue={scheme}
				 style={{ height: 50, width: 200 }}
				 onValueChange={setScheme}>
				 <Picker.Item label="sour" value="#ff007d" />
				 <Picker.Item label="dark" value="#000000" />
				 <Picker.Item label="default" value="" />
			 </Picker>
		 </View>
	 );
};

export default Navigation
