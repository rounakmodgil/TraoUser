import React, { useState, useEffect } from "react";
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

import CartSearchCard from "../components/CartSearchCard";
import { getTraoMart, getTraoMartCategories } from "../api/apifunction";
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

const martsearch = [
  {
    name: "FJ Trade",
  },
  {
    name: "FJ Trade",
  },
  {
    name: "FJ Trade",
  },
  {
    name: "FJ Trade",
  },
  {
    name: "FJ Trade",
  },
  {
    name: "FJ Trade",
  },
  {
    name: "FJ Trade",
  },
];

const TraoMarts = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [queryData, setQueryData] = useState(null);
  const [queryData2, setQueryData2] = useState(null);
  useEffect(() => {
  const traoMarts=getTraoMart();

 
  });
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
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }} showsVerticalScrollIndicator={false}>
     <View>
          <View>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 0.4,
                borderColor: "#aaa",
                borderRadius: 10,
                padding: 0,
                width: "95%",
                alignItems: "center",
                alignSelf: "center",
                marginBottom: 20,
              }}
            >
              <Image
                source={require("../asserts/search.png")}
                style={{ marginLeft: 10, marginRight: 2 }}
              />
              <TextInput
                placeholder="Search any item"
                placeholderTextColor="gray"
                style={{
                  flex: 1,
                  height: 40,
                  color: "black",
                  paddingLeft: 5,
                }}
                value={query}
                onChangeText={(text) => handleSearch(text)}
              ></TextInput>
            </View>
          </View>
        </View>
      <View>
        <Text style={{ marginLeft: 15, marginTop: 4, color: "green" }}>
          265 Marts in Hyderabad
        </Text>
      </View>
      <View style={{}}>
        {martsearch.map((m) => (
          <Pressable
            onPress={() => {
              navigation.navigate("MartProfile");
            }}
          >
            <CartSearchCard />
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

export default TraoMarts;

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
