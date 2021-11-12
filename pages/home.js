import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import DeviceInfo from "react-native-device-info";

import { sendDeviceToken } from "../api/apifunction";
import MartCard from "../components/MartCard";
import SearchItem from "../components/searchItem";
import _ from "lodash";
import Logo from "../asserts/logo2.png";
import MaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Carousel from "../components/Carousel";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import Tileone from "../asserts/tile1.png";
import Tiletwo from "../asserts/tile2.png";
import Tilethree from "../asserts/tile3.png";
import Tilefour from "../asserts/tile4.png";
import Catone from "../asserts/cat1.png";
import Cattwo from "../asserts/cat2.png";
import Catthree from "../asserts/cat3.png";
import Catfour from "../asserts/cat4.png";
import Catfive from "../asserts/cat5.png";
import Catsix from "../asserts/cat6.png";
import DiscountedItem from "../components/discounteditem";
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
const dummyData = [
  {
    title: "Anise Aroma Art Bazar",
    url: "https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 1,
  },
  {
    title: "Food inside a Bowl",
    url: "https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 2,
  },
  {
    title: "Vegatable Salad",
    url:
      "https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 3,
  },
];

const Home = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [queryData, setQueryData] = useState(null);
  const [queryData2, setQueryData2] = useState(null);

  useEffect(() => {
    async function deviceToken() {
      try {
        const deviceId = DeviceInfo.getUniqueId();
        const res = await sendDeviceToken(deviceId);
        console.log("res", res);
      } catch (e) {
        console.log("errorrrrr", e);
      }
    }

    deviceToken();
  }, []);

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
                name="bell-outline"
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
              <MaIcon name="cart-outline" size={25} color="white" />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderWidth: 0.4,
            borderColor: "#fff",
            borderRadius: 10,
            paddingHorizontal: 8,
            width: "95%",
            alignItems: "center",
            alignSelf: "center",
            marginBottom: 20,
          }}
        >
          <FaIcon name={"search"} size={18} color={"#CCC"} />
          <TextInput
            placeholder="Search any item or store"
            placeholderTextColor={"#DDD"}
            style={{ flex: 1, height: 40, color: "white", marginLeft: 5 }}
            value={query}
            onChangeText={(text) => handleSearch(text)}
          ></TextInput>
        </View>
      </View>

      {queryData === null && queryData2 === null && (
        <>
          <View style={{ flex: 1, backgroundColor: "#098D73" }}>
            <View
              style={{
                flex: 1,
                backgroundColor: "#fff",
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
              }}
            >
              <View style={{ marginTop: 30 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Pressable
                    onPress={() => {
                      navigation.navigate("schedule");
                    }}
                  >
                    <Image source={Tiletwo} style={styles.tile} />
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      navigation.navigate("deliverydetails");
                    }}
                  >
                    <Image source={Tileone} style={styles.tile} />
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    marginTop: 30,
                  }}
                >
                  <Pressable
                    onPress={() => {
                      navigation.navigate("Trao Marts");
                    }}
                  >
                    <Image source={Tilethree} style={styles.tile} />
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      navigation.navigate("Local Shops");
                    }}
                  >
                    <Image source={Tilefour} style={styles.tile} />
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
          <View style={{ margin: 10, marginTop: 20 }}>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderWidth: 1,
                  borderColor: "#eee",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 3,
                }}
              >
                <Image source={Catone} style={{ height: 50, width: 50 }} />
              </View>
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderWidth: 1,
                  borderColor: "#eee",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 3,
                }}
              >
                <Image source={Cattwo} style={{ height: 50, width: 50 }} />
              </View>
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderWidth: 1,
                  borderColor: "#eee",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 3,
                }}
              >
                <Image source={Catthree} style={{ height: 50, width: 50 }} />
              </View>
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderWidth: 1,
                  borderColor: "#eee",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 3,
                }}
              >
                <Image source={Catfour} style={{ height: 50, width: 50 }} />
              </View>
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderWidth: 1,
                  borderColor: "#eee",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 3,
                }}
              >
                <Image source={Catfive} style={{ height: 50, width: 50 }} />
              </View>
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderWidth: 1,
                  borderColor: "#eee",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 3,
                }}
              >
                <Image source={Catsix} style={{ height: 50, width: 50 }} />
              </View>
              <View
                style={{
                  height: 70,
                  width: 70,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></View>
              <View
                style={{
                  height: 70,
                  width: 70,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></View>
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Carousel data={dummyData} />
          </View>

          <View style={{ margin: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>Discounted</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <DiscountedItem />
              <DiscountedItem />
              <DiscountedItem />
              <DiscountedItem />
            </ScrollView>
          </View>
          <View style={{ margin: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Top Marts Near You
            </Text>
          </View>
          {data.map((d, index) => (
            <Pressable
              key={index}
              onPress={() => {
                navigation.navigate("MartProfile");
              }}
            >
              <MartCard
                image={d.image}
                title={d.title}
                subtitle={d.subtitle}
                rating={d.rating}
              />
            </Pressable>
          ))}
        </>
      )}
      <View>
        {queryData !== null && (
          <View>
            <Text>Marts</Text>
          </View>
        )}
        {queryData !== null &&
          queryData.map((item) => {
            return (
              <TouchableWithoutFeedback>
                <SearchItem
                  type={item.type}
                  name={item.name}
                  navigation={navigation}
                />
              </TouchableWithoutFeedback>
            );
          })}

        {queryData2 !== null && (
          <View>
            <Text>Items</Text>
          </View>
        )}

        {queryData2 !== null &&
          queryData2.map((item) => {
            return (
              <TouchableWithoutFeedback>
                <SearchItem
                  type={item.type}
                  name={item.name}
                  navigation={navigation}
                />
              </TouchableWithoutFeedback>
            );
          })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tile: {
    height: 100,
    width: 150,
    borderRadius: 10,
  },
});

export default Home;

{
  /*  */
}
