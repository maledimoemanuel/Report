import React from 'react'
import { View, Text } from 'react-native'

const Header = (props) => {
    return (
        <View style={{marginLeft: 15}}>
            <Text style= {{fontWeight: "bold", color: "#FFF", opacity: 0.6, fontSize: 25}}>
                {props.name}
            </Text>
        </View>
    )
}

export default Header
