/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Carousel from "../components/Carousel";
const dummyData = [
  {
    title: "Anise Aroma Art Bazar",
    url: "https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 1,
  },
  {
    title: "Food inside a Bowl",
    url: "https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 2,
  },
  {
    title: "Vegatable Salad",
    url:
      "https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 3,
  },
];
const DeliveryDetails = ({navigation}) => {
  const isDarkMode = useColorScheme() === "dark";

  const [parcelDetails, setParcelDetails] = useState("");
  const [weight, setWeight] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
       <View style={{ marginTop: 15 }}>
          <Carousel data={dummyData} />
          </View>
      <View style={styles.inputcontainer}>
        <Text style={{marginTop:-10}}>Parcel Details</Text>
        <TextInput
          style={styles.input}
          value={parcelDetails}
          onChangeText={setParcelDetails}
        />
        <Text>Approx Weight (in kgs)</Text>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={setWeight}
        />
         <Text>Reciever's Name</Text>
        <TextInput
          style={styles.input}
          keyboardType={"number-pad"}
          value={contactNumber}
          onChangeText={setContactNumber}
        />
        <Text>Reciever's Contact Number</Text>
        <TextInput
          style={styles.input}
          keyboardType={"number-pad"}
          value={contactNumber}
          onChangeText={setContactNumber}
        />
      </View>
      <View>
        <Text style={{color:"#777", fontSize:10, width:"90%", alignSelf:"center", marginBottom:10, marginTop:-15}}>By confirming I accept this order does not contain illegal/restricted items. Trao partner may ask to verify the contents of the package and could choose to refuse the task if the items are not verified</Text>
      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate("pickupadd")}}>
        <View style={styles.container3}>
          <Text style={styles.text2}>Proceed</Text>
        </View>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
    flexDirection: "column",
  },
  input: {
    borderBottomColor: "#0E7783",
    borderBottomWidth: 1,
    marginBottom: 25,
    marginTop:-10
  },
  inputcontainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 0,
    marginBottom: 20,
    marginTop: 35,
  },
  container3: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginHorizontal: 35,
    borderColor: "#098D73",
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 25,
    backgroundColor: "#098D73",
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    color: "white",
    fontSize: 16,
  },
});

export default DeliveryDetails;
