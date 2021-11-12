import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";

import _ from "lodash";

const data = [
  {
    title: "Porus Grocery",
    sybtitle: "Fresh Veggies",
    rating: "3.5",
    image: require("../asserts/grocery2.jpeg"),
  },
  {
    title: "Sharma Grocery",
    sybtitle: "Fresh Veggies",
    rating: "3.8",
    image: require("../asserts/grocery2.jpeg"),
  },
];
const listing = [
  {
    id: 1,
    name: "john Doe Shop",
    type: "mart",
  },
  {
    id: 2,
    name: "john Doe Shop",
    type: "mart",
  },
  {
    id: 3,
    name: "john Doe Shop",
    type: "mart",
  },
];

const listing1 = [
  {
    id: 1,
    name: "Milk",
    type: "Item",
  },
  {
    id: 2,
    name: "Milk",
    type: "Item",
  },
  {
    id: 3,
    name: "Milk",
    type: "Item",
  },
];

const CartSearchCard = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 15,
        marginTop: 15,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#EEE",
      }}
    >
      <Image
        source={require("../asserts/grocery2.jpeg")}
        style={{ height: 90, width: 90 }}
      />
      <View style={{ marginLeft: 30 }}>
        <Text>FJ Trade</Text>
        <Text>0.9km, Vivekananda Nagar</Text>
        <Text>28 min </Text>
        <View style={{ flexDirection: "row", marginTop:4, alignItems:"center" }}>
          <View style={{ flexDirection: "row", alignItems:'center' }}>
            <Text style={{marginRight:5}}>3.5</Text>
            <Image
              source={require("../asserts/star2.png")}
              style={{
                width: 15,
                height: 15,
                marginRight: 5,
              }}
            />
             
          </View>
          <View
                    style={{
                      height: 23,
                      width: 73,
                      backgroundColor: "#eee",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 5,
                      backgroundColor: "#098D73",
                      opacity:0.8,
                      marginLeft:10
                    }}
                  >
                    <Text style={{ fontSize: 11, color: "#fff", opacity:1 }}>
                      Free Delivery
                    </Text>
                  </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    height: 100,
    width: 160,
  },
});

export default CartSearchCard;

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TextInput,
//   ScrollView,
//   Pressable,
//   FlatList,
//   TouchableWithoutFeedback,
// } from "react-native";
// const Home = ({ navigation }) => {
//   return(
//     <View style={{flex:1, justifyContent:"center", alignItems:"center"}}><Text>Home</Text></View>
//   );
// };
// export default Home;
