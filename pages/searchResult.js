import React from 'react';
import {
View, Text, StyleSheet, Image, TextInput, ScrollView, Pressable
} from 'react-native';

import MartCard from "../components/MartCard"

const data=[{
    title:"Porus Grocery",
    sybtitle:"Fresh Veggies",
    rating:"3.5",
    image:require("../asserts/grocery2.jpeg")
     },
     {
      title:"Sharma Grocery",
      sybtitle:"Fresh Veggies",
      rating:"3.8",
      image:require("../asserts/grocery2.jpeg")
       }]

export default function SearchResult({navigation}){
    return(
        <View>
        {data.map((d)=>(
            <Pressable onPress={()=>{navigation.navigate("MartProfile")}}> 
            <MartCard image={d.image}
            title={d.title} subtitle={d.subtitle} rating={d.rating}/>
            </Pressable>
            ))}
            </View>
    );
}