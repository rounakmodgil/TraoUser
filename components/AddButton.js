import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View, 
  Text,
  TouchableOpacity
} from "react-native";


export default function AddButton(count, setCount) {
  return (
    <View>
            
    {count === 0 && (
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
}

const styles = StyleSheet.create({
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
