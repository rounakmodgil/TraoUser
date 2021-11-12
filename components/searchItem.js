import React from 'react';
import {
View, Text, StyleSheet, Image, TextInput, ScrollView, Pressable,TouchableOpacity
} from 'react-native';


export default function SearchItem({name,type,navigation}){
    return(
        <TouchableOpacity onPress={()=>{navigation.navigate("MartSearch")}}>
        <View style={styles.container}>
            <Image style={styles.container2} source={type==="mart"? require("../asserts/shop.png") : require("../asserts/item.png") } />

            
            <View style={{justifyContent:"center",paddingLeft:15}}>
            <Text style={{color:"black"}}>{name}</Text>
            <Text style={styles.type}>{type}</Text>
            </View>
        </View>
        </TouchableOpacity>

    )
};
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:10,

    },
    container2:{
        height:50,
        width:50,
        
        
    },
    type:{
        color:"#838383"
    }
     });