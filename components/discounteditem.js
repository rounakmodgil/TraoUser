import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

import _ from "lodash";

const windowWidth = Dimensions.get('window').width;
const DiscountedItem = ({ navigation }) => {
    const [count, setCount] = useState(0);
  return (
      <View style={{ 
        width:windowWidth-40,
        marginLeft: 15,
        marginRight:15,
        marginTop: 15,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#EEE",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'}}>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
       
      }}
    >
      <Image
        source={require("../asserts/grocery2.jpeg")}
        style={{ height: 70, width: 70 }}
      />
      <View style={{ marginLeft: 30 }}>
        <Text style={{fontWeight:"bold", marginBottom:5}}>Item One</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid', color:"#555"}}>300 </Text>
          <Text style={{paddingLeft:3}}>200</Text>
        </View>

    </View>
   
    </View>
    { count === 0 && (
            <TouchableOpacity onPress={() => setCount(count + 1)}>
              <View style={styles.addContainer}>
                <Text style={{ color: "white" }}>Add +</Text>
              </View>
            </TouchableOpacity>
          )}
          { count !== 0 && (
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => setCount(count - 1)}>
                <Text style={styles.minus}>-</Text>
              </TouchableOpacity>
              <Text>{count}</Text>
              <TouchableOpacity onPress={() => setCount(count + 1)}>
                <Text style={styles.plus}>+</Text>
              </TouchableOpacity>
            </View>
          )}
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    height: 100,
    width: 160,
  },
  addContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "#098D73",
    borderRadius: 10,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: "#098D73",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  minus: {
    paddingRight: 5,
  },
  plus: {
    paddingLeft: 5,
  },
});

export default DiscountedItem;

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
