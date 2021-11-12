import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";

import _ from "lodash";
import Logo from "../asserts/logo2.png";
import MaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import CartSearchCard from "../components/CartSearchCard";
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

const martsearch=[
    {
        name:"FJ Trade"
    },
    {
        name:"FJ Trade"
    },
    {
        name:"FJ Trade"
    },
    {
        name:"FJ Trade"
    },
    {
        name:"FJ Trade"
    },
    {
        name:"FJ Trade"
    },
    {
        name:"FJ Trade"
    }
]


const CartSearch = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [queryData, setQueryData] = useState(null);
  const [queryData2, setQueryData2] = useState(null);

  const handleSearch = (text) => {
    const formatedQuery = text.toLowerCase();
    let data = null;
    let data2 = null;
    if (text === "") {
      setQuery(formatedQuery);
      setQueryData(data);
      setQueryData2(data2);
    } else {
      data = _.filter(listing, (user) => {
        return user.name.toLowerCase().includes(formatedQuery);
      });
      if (!(data.length > 0)) {
        data = null;
      }

      data2 = _.filter(listing1, (user) => {
        return user.name.toLowerCase().includes(formatedQuery);
      });
      if (!(data2.length > 0)) {
        data2 = null;
      }

      setQuery(formatedQuery);
      setQueryData(data);

      setQueryData2(data2);
    }
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          height: 120,
          backgroundColor: "#098D73",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 10,
          }}
        >
          <Image
            source={Logo}
            style={{ height: 50, width: 70, resizeMode: "contain" }}
          />
          <View style={{ flexDirection: "row" }}>
            <Pressable
              onPress={() => {
                navigation.navigate("notifications");
              }}
            >
              <MaIcon
                name="bell"
                size={25}
                color="white"
                style={{ marginRight: 15 }}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate("cart");
              }}
            >
              <MaIcon name="cart" size={25} color="white" />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderWidth: 0.4,
            borderColor: "#fff",
            borderRadius: 50,
            paddingHorizontal: 8,
            width: "95%",
            alignItems: "center",
            alignSelf: "center",
            marginBottom: 20,
          }}
        >
           <FaIcon name={"search"} size={18} color={"#CCC"}/>
           <TextInput
            placeholder="Search any item or store"
            placeholderTextColor={"#DDD"}
            style={{ flex: 1, height: 40, color: "white" , marginLeft:5}}
            value={query}
            onChangeText={(text) => handleSearch(text)}
          ></TextInput>
        </View>
      </View>
      <View>
          <Text style={{marginLeft:15, marginTop:4, color:"green"}}>265 Marts in Hyderabad</Text>
      </View>
      <View style={{}}>
         {martsearch.map((m)=>(
             <Pressable onPress={()=>{navigation.navigate("MartProfile")}}>
             <CartSearchCard/>
             </Pressable>
         ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tile: {
    height: 100,
    width: 160,
  },
});

export default CartSearch;

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
