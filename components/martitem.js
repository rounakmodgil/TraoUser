import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
  Pressable,
  Picker,
} from "react-native";
import MultiSelect from "react-native-multiple-select";

const items = [
  {
    id: "92iijs7yta",
    name: "All Days",
  },
  {
    id: "a0s0a8ssbsd",
    name: "Monday",
  },
  {
    id: "16hbajsabsd",
    name: "Tuesday",
  },
  {
    id: "nahs75a5sg",
    name: "Wednesday",
  },
  {
    id: "667atsas",
    name: "Thursday",
  },
  {
    id: "hsyasajs",
    name: "Friday",
  },
  {
    id: "djsjudksjd",
    name: "Saturday",
  },
];
export default function MartItem({
  name,
  subtitle,
  price,
  quantity,
  schedule,
}) {
  const [vargetonce, setVargetonce] = useState(null);
  const [varschedule, setVarschedule] = useState(null);
  const [selectedItems, setSelectedValue] = useState([]);
  var multiSelect = useRef(null);
  const [count, setCount] = useState(parseInt(quantity));
  const onSelectedItemsChange = (selectedItems) => {
    setSelectedValue(selectedItems);
  };
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={styles.itemImage}
            source={require("../asserts/milk.png")}
          />
          <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.subtitle}>Rs. {price}</Text>
          </View>
        </View>
        <View>
          <View>
            
              {schedule === 0 && count === 0 && (
                <TouchableOpacity onPress={() => setCount(count + 1)}>
                  <View style={styles.addContainer}>
                    <Text style={{ color: "white" }}>Add +</Text>
                  </View>
                </TouchableOpacity>
              )}
              {schedule === 0 && count !== 0 && (
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
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 10,
    backgroundColor: "white",
    marginVertical: 10,
    borderBottomWidth:1,
     borderBottomColor:"#EEE"
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  itemImage: {
    height: 90,
    width: 90,
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
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#838383",
    fontSize:12
  },
});
