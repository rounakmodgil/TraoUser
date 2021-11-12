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

export default function SellerItem({name,subtitle,price,content}){
    const [count,setCount] = useState(0);
    return(
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={{fontWeight:"bold"}}>Rs. {price}</Text>
            <Text style={{color:"#838383"}}>{content}</Text>
            </View>
            <View>
                <Image style={styles.itemImage} source={require("../asserts/milk.png")} />
                {count===0 &&
                <TouchableOpacity onPress={()=>setCount(count+1)}>
                <View style={styles.addContainer}>
                    <Text style={{color:"white"}}>
                        Add +
                    </Text>
                </View>
                </TouchableOpacity>
                }
                {count!==0 &&<View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={()=>setCount(count-1)}>
                    <Text style={styles.minus}>-</Text>
                    </TouchableOpacity>
                    <Text>{count}</Text>
                    <TouchableOpacity onPress={()=>setCount(count+1)}>
                    <Text style={styles.plus}>+</Text>
                    </TouchableOpacity>
                    </View>}

            </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      paddingTop: 40,
      backgroundColor:"white",
    },
    itemContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingLeft:15,
        paddingRight:15,
    },
    itemImage:{
        height:70,
        width:70,
    },
    addContainer:{
        paddingHorizontal:20,
        paddingVertical:5,
        backgroundColor:"#098D73",
        borderRadius:10,
    },
    buttonContainer:{
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius:10,
        borderColor:"#098D73",
        borderWidth:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"

    },
    minus:{
        
        paddingRight:5,
    },
    plus:{
        paddingLeft:5,
    },
    title:{
        fontSize:16,
        fontWeight:"bold",
    },
    subtitle:{
        color:"#838383",
    }
    
  });