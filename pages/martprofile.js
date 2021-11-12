import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
  TextInput,
  Picker,
} from "react-native";
import SellerComponent from "../components/sellerComponent";
import SellerItem from "../components/sellerItem";
import SellerReview from "../components/sellerReview";
import Cart from "../pages/cart";
import Sanatize from "../asserts/sanatize.png";
import Authorize from "../asserts/authorize.png";
import Delivery from "../asserts/delivery.png";
import CartItem from "../components/cartItem";
import ScheduleItem from "../components/scheduleitem";
import MartItem from "../components/martitem";
const listing = [
  {
    title: "All",
    bool:true
  },
  {
    title: "Cat 1",
  },
  {
    title: "Cat 2",
  },
  {
    title: "Cat 3",
  },
  {
    title: "Cat 4",
  },
  {
    title: "Cat 5",
  },
];
const listing3 = [
  {
    title: "All",
    bool:true
  },
  {
    title: "Brand 1",
  },
  {
    title: "Brand 2",
  },
  {
    title: "Brand 3",
  },
  {
    title: "Brand 4",
  },
  {
    title: "Brand 5",
  },
];
const review = [
  {
    name: "John Doe",
    review:
      "Shopping was a nice change. I will never go to another grocery store in the city. Love the service of their staff, love the grocery items. Best of all it was really very very easy to shop groceries here... very easy! ",
  },
  {
    name: "John Doe",
    review:
      "Shopping was a nice change. I will never go to another grocery store in the city. Love the service of their staff, love the grocery items. Best of all it was really very very easy to shop groceries here... very easy! ",
  },
  {
    name: "John Doe",
    review:
      "Shopping was a nice change. I will never go to another grocery store in the city. Love the service of their staff, love the grocery items. Best of all it was really very very easy to shop groceries here... very easy! ",
  },
];


export default function MartProfile({ navigation }) {
  const [query, setQuery] = useState("");
  const [bool, setBool] = useState(true);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ paddingLeft: 15 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 18, paddingBottom: 8 }}
              >
                FJ Trade
              </Text>
              <Text style={{ color: "#838383", marginBottom: 2 }}>
                0.9 km, Vivekananda Nagar
              </Text>
              <Text style={{ color: "#838383", marginBottom: 2 }}>28 min</Text>
              <Text style={{ color: "#838383", marginBottom: 2 }}>
                1294 Products Available
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setBool(false);
                }}
              >
                <View
                  style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 10,
                    paddingRight: 25,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    backgroundColor: "#23973F",
                  }}
                >
                  <Text style={{ color: "white" }}>4.1</Text>
                  <Text style={{ color: "white" }}>Ratings</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              marginRight: 10,
              marginLeft: 10,
              marginTop: 35,
            }}
          ></View>

          {bool && (
            <View>
              <View>
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      borderWidth: 0.4,
                      borderColor: "#aaa",
                      borderRadius: 50,
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

              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row", height:40, justifyContent:"center", alignItems:'center' }}>
                  {listing.map((l) => (
                    <View
                      style={{
                        borderWidth:1,
                        borderColor:"#098D73",
                        backgroundColor:l.bool?"#098D73":"#fff",
                        height: 30,
                        width: 80,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 7,
                        marginHorizontal: 10,
                      }}
                    >
                      <Text style={{ color: l.bool?"#fff":"#098D73" }}>{l.title}</Text>
                    </View>
                  ))}
                </View>
              </ScrollView>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row", marginTop: 10, height:40, justifyContent:"center", alignItems:'center' }}>
                  {listing3.map((l) => (
                    <View
                      style={{
                        borderWidth:1,
                        borderColor:"#098D73",
                        backgroundColor:l.bool?"#098D73":"#fff",
                        height: 30,
                        width: 80,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 7,
                        marginHorizontal: 10,
                      }}
                    >
                      <Text style={{ color: l.bool?"#fff":"#098D73"  }}>{l.title}</Text>
                    </View>
                  ))}
                </View>
              </ScrollView>
              <View>
                <MartItem
                  name="Amul Milk"
                  subtitle="500ml"
                  price={50}
                  quantity={0}
                  schedule={0}
                />
                <MartItem
                  name="Amul Milk"
                  subtitle="500ml"
                  price={50}
                  quantity={0}
                  schedule={0}
                />
                <MartItem
                  name="Amul Milk"
                  subtitle="500ml"
                  price={50}
                  quantity={0}
                  schedule={0}
                />
                <MartItem
                  name="Amul Milk"
                  subtitle="500ml"
                  price={50}
                  quantity={0}
                  schedule={0}
                />
                <MartItem
                  name="Amul Milk"
                  subtitle="500ml"
                  price={50}
                  quantity={0}
                  schedule={0}
                />
              </View>
            </View>
          )}
          {!bool && (
            <View>
              {review.map((item) => {
                return <SellerReview name={item.name} review={item.review} />;
              })}
            </View>
          )}
        </View>
      </ScrollView>
      {bool &&
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderTopColor: "black",
          borderTopWidth: 0.5,
          paddingTop: 20,
          paddingBottom: 15,
          backgroundColor: "#098D73",
          paddingHorizontal: 15,
        }}
      >
        <View style={{ paddingLeft: 10 }}>
          <Text style={styles.text}>2 items added</Text>

          <Text style={styles.text}>Total - 230.00</Text>
        </View>
        <View style={{ paddingRight: 10, justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("cart");
            }}
          >
            <View
              style={{
                height: 30,
                width: 90,
                backgroundColor: "white",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.text2}>Go to cart</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 10,
    backgroundColor: "white",
  },
  buttonContainerActive: {
    padding: 20,
    paddingHorizontal: 40,
    backgroundColor: "#098D73",
    borderRadius: 10,
    flex: 1,
  },
  buttonContainer: {
    padding: 20,
    paddingHorizontal: 40,
    backgroundColor: "#F5F5F5",
    flex: 1,
    borderRadius: 10,
  },
  buttonTextActive: {
    fontSize: 16,
    color: "white",
  },
  buttonText: {
    fontSize: 16,
    color: "#B3B3B3",
  },
  text: {
    color: "#fff",
  },
});
