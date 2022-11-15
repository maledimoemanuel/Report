import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Image,
  Button,
  FlatList
} from "react-native";
import firebase from 'firebase';
import { colors } from "../Constants/color";
import HistoryHeader from "../Components/HistoryHeader";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default function MedicalHistory({navigation}){
    /*const [med, setMed] = useState('');
    function readData(){
    const user = firebase.auth().currentUser;
    firebase.database().ref(`/medicalRecord/${user.uid}`)
        .on('value',snapshot => {
            const data = snapshot.val();
            console.log('User data: ', data);
            setMed(data.med)
        });
    }*/
    const user = firebase.auth().currentUser;
    const [med, setMed] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = () => {
        //TODO: order by date
        firebase.database().ref(`/medicalRecord/${user.uid}`).orderByChild('timestamp').on('value', snapshot => {
            let responselist = Object.values(snapshot.val())
            setMed(responselist)
            console.log(snapshot.val())
            setLoading(true);
        });
        }

        useEffect(() => {
            getData();
          }, []);
    /*const renderItem = ({ item }) => {
        return (
          <View style={{ marginRight: 10, marginLeft: 10 }}>
            <TouchableOpacity>
              <NoteCard title={item.noteTitle} icerik={item.noteDetails} date={item.timestamp} />
            </TouchableOpacity>
          </View>
        );
      };
      const split = () => {
        let icerik = data.map((item, key) => item.icerik);
        return icerik.slice(0, 1) + '...';
      };*/
    return(
  <View  style={styles.container}>
    <HistoryHeader/>
                <View>

                    <View style={styles.button}>
                        <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => navigation.navigate('Form')}>
                            <Text style={styles.text}>ADD</Text>
                        </TouchableOpacity>
                    </View>   

                    <View style={styles.button}>
                    <FlatList
                        data={med}
                        
                        renderItem={( {item}) =>(
                            <View style={styles.file}>
                                
                                <Text style={styles.text}>Name Of Patient: {item.patientsName}</Text>  
                                <Text style={styles.text}>Name Of Doctor: {item.doctorsName}</Text> 
                                <Text style={styles.text}>Description: {item.description}</Text> 
                                <Text style={styles.text}>Prescription: {item.prescribed}</Text>   
                            </View>   
                        )}
                    /> 
                     </View>
                </View>
                <StatusBar style="auto" />
</View>   
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grey2,
      },
      Header:{
        marginTop:40,
        marginLeft:30,
        fontSize:25,
        fontWeight:"bold",
        color:"black",
    },
    Box:{
        backgroundColor:"white",
        height:60,
        width:350,
        marginTop:20,
        marginLeft:15,
        borderRadius:5,
        display:"flex",
        flexDirection:"row",
    },
    TextStyle:{
        color:"black",
        fontSize:15,
        marginTop:15,
        marginLeft:10,
        display:"flex",
        flex:1 
    },
    button:{
        fontSize:12,
        marginRight:20,
        marginTop:15,

    },
    Date:{
        color:"black",
        fontSize:15,
        marginRight:15,
        marginTop:15
    },
    addButton:{
        marginTop:10,
        justifyContent: 'center',
        elevation: 2,
        borderWidth:1,
        color: colors.button,
        backgroundColor: colors.button,
        width: 50,
        height: 50,
        borderRadius: 5,
        marginLeft: '5%'
        
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        margin: 5
      }
    ,
    file:{
        height: 200,
        backgroundColor: colors.grey1,
        padding: 20                                                             
    }
});