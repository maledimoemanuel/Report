import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Colors from '../../Constants/color'
import Input from '../../Components/input'
import PasswordInput from '../../Components/Passwordinput'
import MainButton from '../../Components/MainButton'
import Toast from 'react-native-toast-message';
import firebase from 'firebase';
import LoginHeader from '../../Components/LoginHeader'
import {colors} from '../../Constants/color'

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");

  const loginDB= () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
            Toast.show({
                type: 'success',
                text1: "Hi",
                text2: "Welcome Back!",
            })
            props.navigation.navigate("HomeScreen");
        })
        .catch((error) => {
            Toast.show({
                type: 'success',
                text1: "Hi",
                text2: "User Does Not Exist",
            })
        })
  }
  const validate = ()=>{
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(password=="" && email==""){
        Toast.show({
            type: 'error',
            text1: "Hello",
            text2: "Both Email And Password Are Required To Login",
        })
    } else if(!reg.test(email)){
            Toast.show({
            type: 'error',
            text1: "Hello",
            text2: "Invalid Email",
        })
    } else if(password==""){
        Toast.show({
        type: 'error',
        text1: "Hello",
        text2: "Password Required",
    }) 
} else{
    loginDB();
}
}

    return (
        
    <View style={styles.container}>
        <LoginHeader/>
        <View style={styles.center}>
            
        
    <View style={styles.centerContainer}>
        <Input
            placeholder={"Email"}
            id={"email"}
            name={"email"}
            value={email}
            onChangeText={(text) =>setEmail(text)}
        />
        <PasswordInput
            placeholder={"Password"}
            id={"password"}
            name={"password"}
            value={password}
            onChangeText={(text) =>setPassword(text)}
        />
        <MainButton
            
            onPress={() => {
                validate();
            }}
            title="Log In"
        />
        <View style={{ flexDirection:'row', marginTop: 12}}>
        <Text style={{color: 'black'}}>
                    Don't Have An Account?
        </Text>
        <TouchableOpacity
            onPress={()=>{
                props.navigation.navigate('SignUp');
            }}
        >
            <Text style={styles.forgotPassword}>
                Sign Up
            </Text>
        </TouchableOpacity>
        </View>
        
    </View>
    </View>
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.grey2,
        
    },
    title: {
        fontSize: 25,
        color: Colors.accentColor
    },
    forgotPassword:{
        marginBottom: 12,
        color: Colors.primaryColor,
        marginTop: "20%",
        fontWeight: 'bold',
    },
    center:{
        alignItems: 'center',
        justifyContent:'center',
        paddingTop: 30,
        borderTopLeftRadius: 10
    },
    
    
})

export default Login