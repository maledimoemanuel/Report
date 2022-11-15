import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const PasswordInput = (props) => {
    const [visible, setVisible] = useState(true);
  return (
    <View style={styles.container}>
      <View style = {{
        flex: 1,
        borderColor: '#f8f8f8',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderRadius: 10
      }}>
        <TextInput
        style={{width: "95%"}}
          placeholder={props.placeholder
          }
          name={props.name}
          id={props.id}
          value={props.value}
          autoCorrect={props.autoCorrect}
          onChangeText ={props.onChangeText}
          onFocus={props.onFocus}
          secureTextEntry={visible}
          keyboardType={props.keyboardType}
        />
        
        <TouchableOpacity activeOpacity={0.5} onPress={() => {
            setVisible(!visible);
        }}>
        <MaterialIcons name={visible ? "visibility":"visibility-off"}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
  input: {
    width: '100%',
    flexDirection: 'row',
    height: 45,
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

export default PasswordInput