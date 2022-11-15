import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import {createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer, findFocusedRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from '../Screens/auth_screen/Login';
import SignUp from '../Screens/auth_screen/SignUp';
import Header from "../Screens/Header";
import firebase from 'firebase';
import Requests from '../Screens/Requests';
import Menu from '../Screens/Menu';
import HomeScreen from '../Screens/homescreen/HomeScreen';
import { colors } from '../Constants/color';
import ReportEmergency from '../Screens/ReportEmergency';
import MedicalHistory from '../Screens/MedicalHistory';
import Form from '../Screens/Form';
import Map from '../Screens/Map';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyDJ-jyOcx8srSHoV8Hzts1AtxG-uV1PSuM",
  authDomain: "report-b0344.firebaseapp.com",
  projectId: "report-b0344",
  storageBucket: "report-b0344.appspot.com",
  messagingSenderId: "996212307919",
  appId: "1:996212307919:web:e8d65e8f545f05e77704ba",
  measurementId: "G-W3PLK8TEXZ"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
 //const analytics = getAnalytics(app);
}
    
    function Home() {
      return(
        <Tab.Navigator
          screenOptions = {({ route }) =>({
            tabBarIcon: ( {focused, color, size} ) => {
              let iconName;
    
              if (route.name === "Home"){
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === "Requests"){
                iconName = focused ? 'medkit' : 'medkit-outline';
              } else if(route.name === "Menu"){
                iconName = focused ? 'menu' : 'menu-outline';
              }
              return <Ionicons name = {iconName} size={size} color={colors.grey2} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
            <Tab.Screen 
            name = "Home"
            component={HomeScreen}
            options={{ headerShown: false}}
            />  
    
            <Tab.Screen 
            name = "Requests"
            component={Requests}
            options={{ headerShown: false}}
            />
    
          <Tab.Screen 
                name = "Menu"
                component={Menu}
                options={{
                  headerShown: false,
                  ...TransitionPresets.RevealFromBottomAndroid
              }}
                />
    
        </Tab.Navigator>
    
      );
    }
    function Navigator() {  
      const [initialize, setInitialize] = useState(true);
      const [user, setUser] = useState()
    
      function onAuthStateChanged(user){
        setUser(user);
        if(initialize) setInitialize(false);
      }
    
      useEffect(() =>{
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
      }, []);
      if(initialize) return null;
    
      if(!user || user){
      return (
      
          <Stack.Navigator
          >
         <Stack.Screen 
          name = "Login"
          component={Login}
          options={{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
          />
          <Stack.Screen 
          name = "SignUp"
          component={SignUp}
          options={{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
          />
          <Stack.Screen 
          name = "HomeScreen"
          component={Home}
          options={{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
          />
          <Stack.Screen 
          name = "ReportEmergency"
          component={ReportEmergency}
          options={{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
          />
            <Stack.Screen name="Map" component={Map} 
              options={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />
        <Stack.Screen 
          name = "MedicalHistory"
          component={MedicalHistory}
          options={{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
          />
            <Stack.Screen 
          name = "Form"
          component={Form}
          options={{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
          />
            <Stack.Screen 
          name = "Menu"
          component={Menu}
          options={{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
          />
            <Stack.Screen 
          name = "Requests"
          component={Home}
          options={{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
          />
          </Stack.Navigator>
      );
            } 
    }
    
    export default Navigator;
    