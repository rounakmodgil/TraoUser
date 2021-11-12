import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image
} from "react-native";
import SellerComponent from "../components/sellerComponent";
import SellerItem from "../components/sellerItem";
import SellerReview from "../components/sellerReview";
import Cart from "../pages/cart";
import Sanatize from "../asserts/sanatize.png"
import Authorize from "../asserts/authorize.png";
import Delivery from "../asserts/delivery.png";
const listing = [
  {
    name: "Milk",
    subtitle: "dairy",
    price: 100,
    content: "lorem ipsum lorem ipsum",
  },
  {
    name: "Milk",
    subtitle: "dairy",
    price: 100,
    content: "lorem ipsum lorem ipsum",
  },
  {
    name: "Milk",
    subtitle: "dairy",
    price: 100,
    content: "lorem ipsum lorem ipsum",
  },
  {
    name: "Milk",
    subtitle: "dairy",
    price: 100,
    content: "lorem ipsum lorem ipsum",
  },
];

const listing2 = [
  {
    name: "John Doe",
    review: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
  },
  {
    name: "John Doe",
    review: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
  },
  {
    name: "John Doe",
    review: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
  },
];

export default function SellerProfile() {
  const [review, setReview] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ paddingLeft: 15 }}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                John Doe Shop
              </Text>
              <Text style={{ color: "#838383", marginTop: 5 }}>
                Grocery, Dairy
              </Text>
              <Text style={{ color: "#838383", marginTop: 5 }}>
                Jubliee Hills
              </Text>
            </View>
            <View>
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
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginRight: 10,
              marginLeft: 10,
              marginTop: 35,
            }}
          >
            <TouchableOpacity onPress={() => setReview(false)}>
              <View
                style={
                  review ? styles.buttonContainer : styles.buttonContainerActive
                }
              >
                <Text
                  style={review ? styles.buttonText : styles.buttonTextActive}
                >
                  Delivery
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setReview(true)}>
              <View
                style={
                  review ? styles.buttonContainerActive : styles.buttonContainer
                }
              >
                <Text
                  style={review ? styles.buttonTextActive : styles.buttonText}
                >
                  Reviews
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 10,
              paddingRight: 10,
              marginTop: 25,
            }}
          >
            <View style={{ flexDirection: "row", alignItems:"center" }}>
            <Image source={Authorize} style={{height:40, width:40, borderRadius:20, resizeMode:"contain"}}/>
              <View>
                <Text style={{textAlign:"center", fontSize:11, color:"#555"}}>Authorized</Text>
                <Text style={{textAlign:"center", fontSize:11, color:"#555"}}>Products</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems:'center' }}>
              <Image source={Sanatize} style={{height:40, width:40, borderRadius:20, resizeMode:"contain"}}/>
              <View>
                <Text style={{textAlign:"center", fontSize:11, color:"#555"}}>Sanatized</Text>
                <Text style={{textAlign:"center", fontSize:11, color:"#555"}}>Partner</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems:'center' }}>
            <Image source={Delivery} style={{height:40, width:40, borderRadius:20, resizeMode:"contain"}}/>
              <View>
                <Text style={{textAlign:"center", fontSize:11, color:"#555"}}>Mode</Text>
                <Text style={{textAlign:"center", fontSize:11, color:"#555"}}>delivery</Text>
              </View>
            </View>
          </View>
          {review === false && (
            <View>
              {listing.map((item) => {
                return (
                  <SellerItem
                    name={item.name}
                    subtitle={item.subtitle}
                    price={item.price}
                    content={item.content}
                  />
                );
              })}
            </View>
          )}
          {review === true && (
            <View>
              {listing2.map((item) => {
                return <SellerReview name={item.name} review={item.review} />;
              })}
            </View>
          )}
          <View></View>
        </View>
      </ScrollView>
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
});
