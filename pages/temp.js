import React from 'react';
import {
View, Text, StyleSheet,ScrollView
} from 'react-native';


import OrderItem from "../components/orderItem";

const Orders = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={{fontWeight:"bold"}}>Your Orders</Text>
      
      <View>
        <OrderItem pack={1} />
        <OrderItem pack={0} />
        <OrderItem pack={0} />

      </View>
      </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    paddingTop:30
  }

});

export default Orders;
