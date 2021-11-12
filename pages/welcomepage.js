/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
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
   TouchableOpacity
 } from 'react-native';
 

 
 
 import backgroundImg from "../asserts/backgroundimg.png";
 import welcomeImg from "../asserts/welcomeimg.png";
 
 
 
 const WelcomePage = ({navigation}) => {
   const isDarkMode = useColorScheme() === 'dark';
 
 
   return (
     <View style={styles.container}>
     
       <View style={{justifyContent:"center",alignItems:"center"}}>
       <Image source={welcomeImg} style={{height:200,width:200}} />
       <Text style={styles.text}>Let's Get Started!</Text>
       <TouchableOpacity onPress={()=>{navigation.navigate("login")}}>
       <View style={styles.container3}><Text style={styles.text2}>Login</Text></View>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{navigation.navigate("signup")}}>
       <View style={styles.container2}><Text style={styles.text2}>Sign Up</Text></View>
       </TouchableOpacity>
       </View>
     
   </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     flexDirection: "column"
   },
   container2:{
     paddingHorizontal:100,
     paddingVertical:10,
     borderColor:"#098D73",
     borderWidth:1,
     marginBottom:10,
     marginTop:10,
     borderRadius:25
 
   },
   container3:{
     paddingHorizontal:110,
     paddingVertical:10,
     borderColor:"#098D73",
     borderWidth:1,
     marginBottom:10,
     marginTop:10,
     borderRadius:25,
     backgroundColor:"#098D73",
 
   },
   image: {
     flex: 1,
     resizeMode: "cover",
     justifyContent: "center"
   },
   text: {
     color: "white",
     fontSize: 20,
     fontWeight: "bold",
     textAlign: "center",
     marginBottom:25,
     
   },
   text2:{
     color:"white",
     fontSize:16,
 
   }
 });
 
 export default WelcomePage;
 