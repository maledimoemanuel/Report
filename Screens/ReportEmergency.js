import { View, Text, StyleSheet, ScrollView,StatusBar,TouchableOpacity,
  TextInput,
  Dimensions
 } from 'react-native'
import React, {useState} from 'react'
import Toast from 'react-native-toast-message';
import { colors } from '../Constants/color'
import { CheckBox } from "react-native-elements";
import firebase from 'firebase';
import ReportHeader from '../Components/ReportHeader';

const ReportEmergency = ({navigation}) => {
    const [carAccident, setCarAccident] = useState(false);
    const [labour, setLabour] = useState(false);
    const [difficultyBreathing, setDifficultyBreathing] = useState(false);
    const [gunShot, setGunShot] = useState(false);
    const [someoneCollapsed, setSomeoneCollapsed] = useState(false);
    const [severePain, setSeverePain] = useState(false);
    const [seizure, setSeizure] = useState(false);
    const [heartAttack, setHeartAttack] = useState(false);
    const [stroke, setStroke] = useState(false);
    const [burns, setBurns] = useState(false);
    const [brokenBone, setBrokenBone] = useState(false);
    const [poisoning, setPoisoning] = useState(false);
    const [asthmaAttack, setAsthmaAttack] = useState(false);
    const [other, setOther] = useState("");
    const [location, setLocation] = useState(false);
    const [contactNumbers, setContactNumber] = useState(false);  
    const user = firebase.auth().currentUser;

    const report = () => {
        //var emergency = ["Car Accident", "Labour", "Difficulty Breathing", "Gun Shot", "Someone Collapsed", "Severe Pain", "Seizure", "Heart Attack", "Stroke", "Burns", "Broken Bone", "Poisoning", "Asthma Attack", other];
        const emergency=[]
        
        if (carAccident === true) {
          emergency.push("Car Accident");
          //delete emergency[0];
        }
        if (labour === true) {
          //delete emergency[1];
          emergency.push("Labour");
        }
        if (difficultyBreathing === true) {
          //delete emergency[2];
          emergency.push("Difficulty Breathing");
        }
        if (gunShot === true) {
          //delete emergency[3];
          emergency.push("Gun Shot");
        }
        if (someoneCollapsed === true) {
          //delete emergency[4];
          emergency.push("Someone Collapsed");
        }
        if (severePain === true) {
          //delete emergency[5];
          emergency.push("Severe Pain");
        }
        if (seizure === true) {
          //delete emergency[6];
          emergency.push("Seizure");
        }
        if (heartAttack === true) {
          //delete emergency[7];
          emergency.push("Heart Attack");
        }
        if (stroke === true) {
          //delete emergency[8];
          emergency.push("Stroke");
        }
        if (burns === true) {
          //delete emergency[9];
          emergency.push("Burns");
        }
        if (brokenBone === true) {
          //delete emergency[10];
          emergency.push("Broken Bone");
        }
        if (poisoning === true) {
          //delete emergency[11];
          emergency.push("Poisoning");
        }
        if (asthmaAttack === true) {
          //delete emergency[12];
          emergency.push("Asthma Attack");
        }
        if (other){
          //delete emergency[13];
          emergency.push(other)
        }
        else if(emergency.length===0){
    
            alert("No Emergency Specified!")
        }
        else if(emergency.length===emergency.length){
          //TODO: change /NewE../user.uid to just /NewE
          firebase.database().ref(`/Emergencies`).push({
            Emergency: emergency,
            userId:user.uid,
            request:true,
            accepted:false,
            done:false,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
            Toast.show({
                type: 'success',
                text1: "Emergency Reported"
            })
            navigation.navigate("HomeScreen");
        }
        console.log(emergency);        
      };
    

  return (
    <View style= {styles.container}>
      <ReportHeader/>
      <ScrollView style={styles.content}>
         <View style={styles.cont}>
          <StatusBar style="auto"/>
            <Text style={styles.TextStyle}>
              Select Type
            </Text>
            <CheckBox
              title="Car Accident"
              checked={carAccident}
              onPress={() => setCarAccident(!carAccident)}
            />
            <CheckBox
              title="Labour"
              checked={labour}
              onPress={() => setLabour(!labour)}
            />
            <CheckBox
              title="Difficulty Breathing"
              checked={difficultyBreathing}
              onPress={() => setDifficultyBreathing(!difficultyBreathing)}
            />
            <CheckBox
              title="Gun Shot"
              checked={gunShot}
              onPress={() => setGunShot(!gunShot)}
            />
            <CheckBox
              title="Someone Collapsed"
              checked={someoneCollapsed}
              onPress={() => setSomeoneCollapsed(!someoneCollapsed)}
            />
            <CheckBox
              title="Severe Pain"
              checked={severePain}
              onPress={() => setSeverePain(!severePain)}
            />
            <CheckBox
              title="Heart Attack"
              checked={heartAttack}
              onPress={() => setHeartAttack(!heartAttack)}
            />
            <CheckBox
              title="Stroke"
              checked={stroke}
              onPress={() => setStroke(!stroke)}
            />
            <CheckBox
              title="Burns"
              checked={burns}
              onPress={() => setBurns(!burns)}
            />
            <CheckBox
              title="Broken Bone"
              checked={brokenBone}
              onPress={() => setBrokenBone(!brokenBone)}
            />
            <CheckBox
              title="Poisoning"
              checked={poisoning}
              onPress={() => setPoisoning(!poisoning)}
            />
            <CheckBox
              title="Asthma Attack"
              checked={asthmaAttack}
              onPress={() => setAsthmaAttack(!asthmaAttack)}
            />
            <CheckBox
              title="Seizure"
              checked={seizure}
              onPress={() => setSeizure(!seizure)}
            />
            <Text style={styles.TextStyle}>Other:</Text>
            
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <TextInput 
                  onChangeText={(text) => {
                    setOther(text);
                  }}
                  value={other}
                  placeholder={"Specify Emergency!"}
                  style={styles.TextInputStyle}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Map");
              }}
              style={styles.Button}
            >
              <Text style={styles.TextStyle1}>Location</Text>
            </TouchableOpacity>
            
            
            <TouchableOpacity onPress={report} style={styles.Button}>
              <Text style={styles.TextStyle1}>Submit</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.grey2
    },
    TextStyle:{
      fontWeight: 'bold',
      color: colors.grey4,
      fontSize: 15
    },
    Button:{
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.button,
      marginTop: 12.0,
      elevation: 5,
      borderRadius: 10
    },
    TextStyle1:{
      fontWeight: 'bold',
      color: colors.grey4,
      fontSize: 25
    },
    TextInputStyle:{
      borderWidth: 1,
      height: 50,
      width: '98%',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center'
    }
})

export default ReportEmergency