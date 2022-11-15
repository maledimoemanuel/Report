import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const input = (props) => {
  return (
    <View style={styles.container}>
      <View style = {{
        flex: 1,
        borderColor: '#f8f8f8',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 0,
        height: 50,
        borderRadius: 10
      }}>
        <TextInput
          style={{width: "100%"}}
          placeholder={props.placeholder
          }
          name={props.name}
          id={props.id}
          value={props.value}
          autoCorrect={props.autoCorrect}
          onChangeText ={props.onChangeText}
          onFocus={props.onFocus}
          secureTextEntry={false}
          keyboardType={props.keyboardType}
        />
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
  input: {
    width: '100%',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingLeft: 12.0
  },
  container:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12.0,
    
  }
})

export default input