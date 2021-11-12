import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";

export default function SellerComponent() {
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          height: 30,
          width: 30,
          borderRadius: 25,
          backgroundColor: "black",
          marginRight: 10,
        }}
      ></View>
      <View>
        <Text>Mode</Text>
        <Text>delivery</Text>
      </View>
    </View>
  );
}