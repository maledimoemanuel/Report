import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Colors, { colors } from '../../Constants/color'
import Input from '../../Components/input'
import PasswordInput from '../../Components/Passwordinput'
import MainButton from '../../Components/MainButton'
import PhoneInput from "react-native-phone-number-input";
import Toast from 'react-native-toast-message';
import firebase from 'firebase';

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");
  const [confirmPassword, setConfirmPassword] =useState("");
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [studentNumber, setStudentNumber] = useState("");

  const user = firebase.auth().currentUser;


  const signUpDB =  ()=>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(()=>{
        Toast.show({
            type: "success",
            text1: "Hi",
            text2: "Welcome!"
        });
            firebase.firestore().collection("Users")
            .doc(firebase.auth().currentUser.uid)
            .set({
              fullname,
              studentNumber,
              email,
              phoneNumber
            })
            props.navigation.navigate("HomeScreen")      
    })
    .catch(error => {
        if (error.code === 'auth/email-already-in-use'){
            Toast.show({
                type: "error",
                text1: "Hi",
                text2: "Email Already In Use!"
            });
        }

        if(error.code === 'auth/invalid-email'){
            Toast.show({
                type: "error",
                text1: "Hi",
                text2: "Email is invalid!"
            });
        }
    })
    .then(() => {
        const saveUserRef = firebase
          .database()
          .ref("Users/" + firebase.auth().currentUser.uid);
        saveUserRef.update({
          fullname, studentNumber, email, phoneNumber, password, confirmPassword
        });
      })
      
      .catch((error) => {
        alert(error.message);
      });

    

  }

  const validate = ()=>{
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(password=="" && email=="" && fullname =="" && phoneNumber=="" && password=="" && confirmPassword==""){
        Toast.show({
            type: 'error',
            text1: "Hello",
            text2: "You Can't Sign Up With Empty Inputs",
        })
    }else if(fullname==""){
        Toast.show({
            type: 'error',
            text1: "Hello",
            text2: "Enter Fullname",
        })
    }
    else if(phoneNumber==""){
        Toast.show({
            type: 'error',
            text1: "Hello",
            text2: "Enter Phone Number",
        })
    }else if(email==""){
        Toast.show({
            type: 'error',
            text1: "Hello",
            text2: "Enter Email",
        })
    }
    else if(password==""){
        Toast.show({
            type: 'error',
            text1: "Hello",
            text2: "Enter Password",
        })
    }
    else if(studentNumber==""){
        Toast.show({
            type: 'error',
            text1: "Hello",
            text2: "Enter Student Number",
        })
    }
    else if(confirmPassword==""){
        Toast.show({
            type: 'error',
            text1: "Hello",
            text2: "Confirm Your Password",
        })
    }
    else if(password.length<=6 || confirmPassword.length<=6){
        Toast.show({
            type: 'error',
            text1: "Hello",
            text2: "Password Must Be Over 6 Characters",
        })
    }
    else if(password!=confirmPassword){
        Toast.show({
            type: 'error',
            text1: "Hello",
            text2: "Make Sure Passwords Are The Same!",
        })
    }
     else if(!reg.test(email)){
            Toast.show({
            type: 'error',
            text1: "Hello",
            text2: "Invalid Email",
        })
    } 
    else{
        signUpDB();
}
}

    return (
    <View style={styles.container}>
        <View style={styles.center}>
            <Text style={styles.title}>Sign Up</Text>
        </View>
    <View style={styles.centerContainer}>
        <Input
            placeholder={"Full name"}
            id={"fullname"}
            name={"fullname"}
            value={fullname}
            onChangeText={(text) =>setFullname(text)}
        />
        <Input
            placeholder={"Phone Number"}
            id={"phoneNumber"}
            name={"phoneNumber"}
            value={phoneNumber}
            onChangeText={(Number) =>setPhoneNumber(Number)}
            keyboardType='numeric'
        />

        <Input
            placeholder={"Student Number"}
            id={"studentNumber"}
            name={"studentNumber"}
            value={studentNumber}
            onChangeText={(Number) =>setStudentNumber(Number)}
            keyboardType='numeric'
        />
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
        <PasswordInput
            placeholder={"Confirm Password"}
            id={"confirmPassword"}
            name={"confirmPassword"}
            value={confirmPassword}
            onChangeText={(text) =>setConfirmPassword(text)}        />

        

        <MainButton
            onPress={() => {
                validate();
            }}
            title="Sign Up"
        />
        <View style={{ flexDirection:'row', marginTop: 12}}>
        <Text style={{color: 'black'}}>
                    Already Have An Account?
        </Text>
        <TouchableOpacity
            onPress={()=>{
                props.navigation.goBack();
            }}
        >
            <Text style={styles.forgotPassword}>
                LOG IN
            </Text>
        </TouchableOpacity>
        </View>
        
        
    </View>

    </View>
  )
}
const styles= StyleSheet.create({
    imageTop:{
        height: 150,
        width:150,
        borderRadius: 5
    },
    container:{
        alignItems: 'center',
        flex: 1,
        justifyContent:'center',
        backgroundColor: colors.grey2
    },
    centerContainer:{
        justifyContent: 'center',
        marginTop: "8%",
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        color: colors.grey4,
        fontWeight: 'bold'
    },
    forgotPassword:{
        marginBottom: 12,
        color: Colors.primaryColor,
        marginTop: "20%",
        fontWeight: 'bold',

    },
    center:{
        alignItems:'center',
        justifyContent: 'center'
    }
})

export default SignUp