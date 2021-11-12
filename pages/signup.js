/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
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
   TouchableOpacity
 } from 'react-native';
 
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 

 
 
 
 const Signup = ({route, navigation}) => {
   const isDarkMode = useColorScheme() === 'dark';
   const [email,setEmail] =useState('');
   const [password,setPassword] = useState('');
   const [name,setName] = useState('');
   const [phonenumber,setPhonenumber] = useState('');
   const [confirmPassword,setConfirmPassword] = useState('');
 
 
   return (
     <View style={styles.container}>
     
       <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
       <View style={{justifyContent:"center"}}>
       
       <Text style={styles.texthead}>Sign Up</Text>
       <View style={styles.inputcontainer}>
       <TextInput style={styles.input} value={name} placeholderTextColor="#000"  onChangeText={setName} placeholder={"Name"} />
       <TextInput style={styles.input} value={email} placeholderTextColor="#000"  onChangeText={setEmail} placeholder={"Email"} />
       <TextInput keyboardType={'phone-pad'} style={styles.input} placeholderTextColor="#000"  value={phonenumber} onChangeText={setPhonenumber} placeholder={"Phone Number"} />
       <TextInput secureTextEntry={true} style={styles.input} placeholderTextColor="#000"  value={password} onChangeText={setPassword} placeholder={"Password"} />
       <TextInput secureTextEntry={true} style={styles.input} placeholderTextColor="#000"  value={confirmPassword} onChangeText={setConfirmPassword} placeholder={"Confirm Password"} />
       </View>
       <View style={styles.policytext}>
       <Text style={{textAlign:"center",color:"black"}}>By continuing and agree to our <Text style={{color:"#098D73"}}>terms of service</Text> and <Text style={{color:"#098D73"}}>privacy policies</Text></Text>
       </View>
 
       <TouchableOpacity onPress={()=>{ navigation.replace("maintabscreen")}}>
        <View style={styles.container3}><Text style={styles.text2}>Register</Text></View>
       </TouchableOpacity>
        
       </View>
       </ScrollView>
     
   </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     flexDirection: "column"
   },
   input:{
     borderBottomColor:"#0E7783",
     borderBottomWidth:1,
     marginTop:15,
     marginBottom:15,
     color:"#000"
 
   },
   inputcontainer:{
     marginLeft:20,
     marginRight:20,
     marginBottom:20,

   },
   image: {
     flex: 1,
     resizeMode: "cover",
     justifyContent: "center"
   },
   texthead: {
     color: "black",
     fontSize: 20,
     fontWeight: "bold",
     textAlign: "center",
     marginBottom:15,
     marginTop:20
     
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
   authcontainer:{
     flexDirection:"row",
     justifyContent:"space-evenly",
     marginTop:20
   },
   authitem:{
     height:25,
     width:100
   },
   policytext:{
     maxWidth:250,
    
     alignSelf:"center",
     textAlign:"center",
   },
   
   
 });
 
 export default Signup;
 