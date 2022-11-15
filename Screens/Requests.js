import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions, FlatList, ActivityIndicator} from 'react-native'
import firebase from 'firebase';
import { colors } from '../Constants/color';

export default function Requests({navigation}) {
    const user = firebase.auth().currentUser;
    const [loading, setLoading] = useState(false);
    const [ emergency, setEmergency] = useState([]);

    const getData = () => {
      firebase.database().ref(`/NewEmergencies/${user.uid}`).on('value', snapshot => {
          let responselist = Object.values(snapshot.val())
          setEmergency(responselist)
          console.log(snapshot.val())
          setLoading(true);
      });
      }
      useEffect(() => {
          getData();
        }, []);

    return (
        <View style={styles.container}>
            <View style={styles.pending}>
                
                <Text style= {styles.title}>Pending</Text>
            </View>
            

            <View style={styles.button}>
                    <FlatList
                        data={emergency}
                        renderItem={( {item}) =>(
                            <View style={styles.file}>
                                <Text style={styles.text}>Emergency Reported:{item.Emergency + ""}</Text>  
                                   
                            </View>   
                        )}
                    /> 
                     </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grey2,
      },
  title:{
    fontSize: 30,
    fontWeight: "bold",
    color: colors.grey4,
    padding: 5,
    marginTop: 10
  },
  file:{
      height: 200,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.grey1,
      paddingTop: 10,
      marginTop: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
})
