import React, { useState ,useEffect} from 'react';
import MapView ,{Marker}from 'react-native-maps';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import Toast from 'react-native-toast-message';
import firebase from 'firebase';
export default function MapPage({navigation}) {

  const [mapRegion, setmapRegion] = useState({
    latitude: 23,
    longitude: 23,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const user = firebase.auth().currentUser;

//get the current location
  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status === 'granted') {
        console.log('Approved!');
        const cood = await Location.getCurrentPositionAsync();
        console.log(cood)
        Toast.show({
          type: 'success',
          text1: "Location Captured"
      })
      navigation.navigate("ReportEmergency");
        //set the map region state
        setmapRegion({ 
            latitude: cood.coords.latitude,
            longitude: cood.coords.longitude, 
            latitudeDelta: 0.0522,
            longitudeDelta: 0.0421 
        })
        firebase.database().ref(`/NewEmergencies/${user.uid}`)
        .update({
         Location: cood,
        })
        return cood ;

    } else {
       console.log('Rejected!');
       throw new Error('Location permission not granted');
    }
    
}
//set new state of the location
  useEffect(() => {
    getLocationAsync();
  }, []);
     

  return (
  <ScrollView>
    <View style={styles.container}>
        <MapView 
            style={styles.map}
            region={mapRegion} 
        >
        <Marker coordinate={mapRegion} title='location' />
        </MapView>
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});