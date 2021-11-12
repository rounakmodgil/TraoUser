import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";

export default function SellerReview({name, review}){
    return(
        <View style={styles.container}> 
        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingRight:10}}>
        <Text style={styles.name}>{name}</Text>
        <View style={{flexDirection:"row"}}>
        <Image
              source={require("../asserts/star2.png")}
              style={{
                width: 15,
                height: 15,
                marginRight: 5,
              }}
            />
             <Image
              source={require("../asserts/star2.png")}
              style={{
                width: 15,
                height: 15,
                marginRight: 5,
              }}
            />
             <Image
              source={require("../asserts/star2.png")}
              style={{
                width: 15,
                height: 15,
                marginRight: 5,
              }}
            />
             <Image
              source={require("../asserts/star2.png")}
              style={{
                width: 15,
                height: 15,
                marginRight: 5,
              }}
            />
             <Image
              source={require("../asserts/star2.png")}
              style={{
                width: 15,
                height: 15,
                marginRight: 5,
              }}
            />
            </View>
        </View>
        <Text style={styles.review}>{review}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      paddingTop: 35,
      backgroundColor:"white",
      paddingLeft:10,
      paddingBottom:15,
      borderBottomColor:"#eee",
      borderBottomWidth:1
    },
    name:{
        fontWeight:"bold",
        fontSize:16
    },
    review:{
        paddingTop:5,
        color:"#838383"
    }
  });