import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { colors } from '../Constants/color';
  
export default function Form({navigation}){
    const [patientsName, setPatientsName] = useState("");
    const [doctorsName, setdoctorsName] = useState("");
    const [description, setDescription] = useState("");
    const [prescribed, setPrescribed] = useState("");
    const user = firebase.auth().currentUser;
    const addField =() => {
        if(patientsName===""){
            alert("Patient's Name Required!");
        }else if(doctorsName ===""){
            alert("Doctor's Name Required");
        
        }else if(description ===""){
            alert("Description Required");
        }else if(prescribed ===""){
            alert("Prescriptions Required");
        }
        else {
            //TODO: 
            firebase.database().ref(`/medicalRecord/${user.uid}`).push({
                patientsName: patientsName,
                doctorsName: doctorsName,
                description: description,
                prescribed: prescribed,
                createdAt: firebase.database.ServerValue.TIMESTAMP
            })
            .then((docRef) =>{
                alert("Document added to database", docRef.id);
            })
            .catch((error) =>{
                alert(error);
            })
            .then(()=>{
                navigation.navigate("MedicalHistory");
            });
        }
    }

    return (
                <View style ={styles.container}>
                    <Text style={styles.descr}>Fill The Form</Text>
                    <View style={styles.nameOfPatient}>
                        <TextInput
                            value={patientsName}
                            onChangeText={text => {
                                setPatientsName(text);
                                }}
                            placeholder="Name of Patient"
                            style={styles.name}
                        >

                        </TextInput>
                    </View>

                    <View style={styles.nameOfPatient}>
                        <TextInput
                            value={doctorsName}
                            onChangeText={text => {
                                setdoctorsName(text);
                                }}
                            placeholder="Name of Doctor"
                            style={styles.name}
                        >
                        </TextInput>
                    </View>

                    

                    <View>
                        <Text style={styles.descr}>Description</Text>
                        <TextInput style={styles.desc}
                            placeholder="Description...."
                            value={description}
                            onChangeText={text => {
                                setDescription(text);
                            }}
                       />
                       <Text style={styles.descr}>Prescriptions</Text>
                       <TextInput style={styles.presc}
                            placeholder="Prescriptions"
                            value={prescribed}
                            onChangeText={text => {
                                setPrescribed(text);
                            }}
                       />
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                        style={styles.add}
                        onPress={addField}>
                            <Text style={styles.text}>Done</Text>
                        </TouchableOpacity>
                    </View>  

                </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grey2
      },
      nameOfPatient:{
        height: 50,
        width: '90%',
        marginTop: 20,
        marginLeft:20,
        justifyContent: "center",
        borderRadius: 5,
        borderWidth:1,
        color: "black",
      },
      desc: {
        height: 150,
        width: '90%',
        marginTop: 10,
        marginLeft:20,
        justifyContent: "center",
        paddingLeft: 0,
        borderRadius: 5,
        borderWidth:1,
        paddingLeft:20,
        color: "black",
        fontSize: 20,
      },
      descr:{
        marginTop:10,
        marginLeft:15,
        fontSize:25,
        fontWeight:"bold",
        color:"black",
      },
      presc:{
        height: 150,
        width: '90%',
        marginTop: 10,
        marginLeft:20,
        justifyContent: "center",
        borderRadius: 5,
        borderWidth:1,
        paddingLeft:20,
        color: "black",
        fontSize: 20
      },
      button:{
        
        marginLeft: 10,
      },
      add:{
          height: 50,
          width: 50,
          margin:20,
          justifyContent: 'center',
          borderRadius: 5,
          elevation: 2,
          backgroundColor: colors.button,
          marginLeft: 10,
          marginRight: 200,
      },
      text:{
        color: colors.grey4,
        fontWeight: 'bold',
        fontSize: 20
      }
})
