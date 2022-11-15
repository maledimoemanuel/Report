import { TouchableNativeFeedback, Dimensions, Text, TouchableOpacity, View, TextInput, StyleSheet } from 'react-native'
import Colors from '../Constants/color';
import React from 'react';
import { colors } from 'react-native-elements';

const MainButton = (props) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={props.onPress}>
            <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        {props.title}
                    </Text>
            </View>
      </TouchableNativeFeedback>
      
    </View>
  )
}

const styles= StyleSheet.create({
  buttonContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    marginTop: 12.0,
    elevation: 5,
    borderRadius: 10
  },
  container:{
    width: 300,
      
  },
  buttonText:{
    color: colors.grey4,
    fontWeight: 'bold',
    fontSize: 20
  }
})

export default MainButton