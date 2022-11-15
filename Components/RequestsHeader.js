import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../Constants/color';

export default function RequestsHeader(props){

    return(
        <View style = {styles.header}>
            
            <View style={{justifyContent: 'center'}}>
                <Text style={{color: colors.grey2, fontWeight: 'bold', fontSize: 25}}>Requests</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height: 60,
        justifyContent: 'space-between',
        opacity: 0.8,
        borderBottomLeftRadius:5,
        borderBottomRightRadius: 5

    }
})