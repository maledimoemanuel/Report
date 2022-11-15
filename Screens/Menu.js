import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MenuHeader from '../Components/MenuHeader'
import color, { colors } from '../Constants/color'
import { Icon } from 'react-native-elements'
import firebase from 'firebase';
const Menu = () => {
  return (
    <View style={styles.container}>
      <MenuHeader/>

      <View style={{flexDirection:'row', borderBottomColor: colors.grey3, borderBottomWidth: 1, padding: 10}}>
          <TouchableOpacity>
            <Text style={{color: colors.grey4, fontSize: 20, fontWeight: 'bold'}}>Profile</Text>
          </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row', borderBottomColor: colors.grey3, borderBottomWidth: 1, padding: 10}}>
          <TouchableOpacity>
            <Text style={{color: colors.grey4, fontSize: 20, fontWeight: 'bold'}}>Settings</Text>
          </TouchableOpacity>
      </View>

       <View style={{flexDirection:'row', borderBottomColor: colors.grey3, borderBottomWidth: 1, padding: 10}}>
        <Icon
          type='material'
          name='logout'
        />
          <TouchableOpacity 
            onPress={()=>{
              firebase.auth().signOut()
            }}
          >
            <Text style={{color: colors.grey4, fontSize: 20, fontWeight: 'bold'}}>Sign Out</Text>
          </TouchableOpacity>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.grey2,
  }
})

export default Menu