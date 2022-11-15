import { StyleSheet, View, Text, ScrollView, Image, ImageBackground, TextInput, ActivityIndicator, TouchableOpacity, StatusBar } from 'react-native'
import React, {useState, useEffect} from 'react'
import HomeHeader from '../../Components/HomeHeader';
import {Icon} from 'react-native-elements';
import { colors } from '../../Constants/color';

/*{loading ? <ActivityIndicator size="large" color="red"/> : products.map((e) =>{
    return
})}*/

const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
        <StatusBar/>
        <HomeHeader/>
        
        <View style={styles.buttonsView}>
            
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={()=>{
                        navigation.navigate("ReportEmergency")
                    }}
                >
                <View>
                    <Icon
                        name='medical-services'
                        type='material'
                        size={100}
                        color= {colors.buttons}
                    />
                    </View>
                    <Text style={styles.text}>Report An emergency</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={()=>{
                        navigation.navigate('MedicalHistory')
                    }}
                >
                <View>
                    <Icon
                        name='description'
                        type='material'
                        size={100}
                        color= {colors.buttons}
                    />
                    </View>
                    <Text style={styles.text}>Medical File</Text>
                </TouchableOpacity>
                
            
        </View>
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.grey2,    },
    buttons:{
        backgroundColor: colors.grey4,
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "16%",
        marginLeft: 10,
        borderRadius: 20, 
    },
    buttonsView:{
        alignItems: 'center'
    },
    text:{
        fontWeight: 'bold',
        color: colors.grey1
    }


});
export default HomeScreen