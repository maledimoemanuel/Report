import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {Icon, withBadge} from 'react-native-elements'
import { colors } from '../Constants/color';

export default function HistoryHeader(props){

    return(
        <View style = {styles.header}>
            
            <View style={{justifyContent: 'center'}}>
                <Text style={{color: colors.grey5, fontWeight: 'bold', fontSize: 25}}>Medical History</Text>
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
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    }
})