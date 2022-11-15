import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Toast from 'react-native-toast-message';
import Route from './Navigation/MainNavigation';
const App = () => {
  return (
    <>
    <NavigationContainer>
      <Route/>
    </NavigationContainer>
      
    <Toast ref={(ref) => Toast.setRef(ref)}/>
      <StatusBar style="auto" />
    </>
  );
}

export default App
/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import Login from './Screens/auth_screen/Login';

const App =() => {
  return (
    <>
    <Login/>
    <Toast ref={(ref) => Toast.setRef(ref)}/>
      <StatusBar style="auto" />
    </>
  );
};
*/
