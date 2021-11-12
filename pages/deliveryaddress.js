import {Formik} from 'formik';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback,TextInput} from 'react-native';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import GetLocation from 'react-native-get-location';


export default function DeliveryAdd({navigation}) {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  function currentLocation() {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 10000,
    })
      .then((location) => {
        setLatitude(location.latitude);
        setLongitude(location.longitude);
      })
      .catch((error) => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }
  if (latitude === 0 || longitude === 0) {
    currentLocation();
  }

  return (
    <View style={styles.mapMainContainer}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          draggable
          coordinate={{latitude: latitude, longitude: longitude}}
          onDragEnd={(e) => {
            console.log('deng' + e);
            setLatitude(e.nativeEvent.coordinate.latitude);
            setLongitude(e.nativeEvent.coordinate.longitude);
          }}></Marker>
      </MapView>
      <View style={styles.saveLocationContainer}>
        <Formik
          initialValues={{address: ''}}
          onSubmit={()=>{navigation.navigate("deliveryadd")}}>
          {({handleChange, handleSubmit, errors}) => (
            <>
              <TextInput
                  style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Delivery Address"
                placeholderTextColor="#CBC8C8"
                keyboardType="text"
                onChangeText={handleChange('address')}
              />

              <TouchableNativeFeedback onPress={handleSubmit}>
              <View style={styles.container3}><Text style={styles.text2}>Proceed</Text></View>
              </TouchableNativeFeedback>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mapMainContainer: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor:"#fff"
  },
  map: {
    height: '70%',
  },
  addressInputBox: {
    backgroundColor: 'gray',
    width: '100%',
    marginBottom: 15,
  },
  saveLocationContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '20%',
  },
  saveLocationButton: {
    height: 50,
    width: 180,
    backgroundColor: '#ffcf08',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  saveLocationText: {
    color: '#fff',
  },
  input: {
    borderBottomColor: "#0E7783",
    borderBottomWidth: 1,
    marginBottom: 15,
    width:350
  },
  container3:{
    paddingHorizontal:50,
    paddingVertical:10,
    marginHorizontal:35,
    borderColor:"#098D73",
    borderWidth:1,
    marginBottom:10,
    marginTop:10,
    borderRadius:25,
    backgroundColor:"#098D73",
    justifyContent:"center",
    alignItems:"center",

  },
  text2:{
    color:"white",
    fontSize:16,

  },
});