import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Modal,
  Pressable,
  Image,
  TextInput,
} from "react-native";

import ScheduleItem from "../components/scheduleitem";

const listing = [
  {
    name: "Amul Milk",
    subtitle: "dairy",
    price: 100,
    quantity: 1,
    schedule: 0,
  },
  {
    name: "Amul Milk",
    subtitle: "dairy",
    price: 100,
    quantity: 3,
    schedule: 0,
  },
];
const listing2 = [
  {
    title: "All",
    bool: true,
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
    bool: true,
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
export default function Schedule({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("wallet");
  const [query, setQuery] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView>
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

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {listing2.map((l) => (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#098D73",
                  backgroundColor: l.bool ? "#098D73" : "#fff",
                  height: 30,
                  width: 80,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 7,
                  marginHorizontal: 10,
                }}
              >
                <Text style={{ color: l.bool ? "#fff" : "#098D73" }}>
                  {l.title}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {listing3.map((l) => (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#098D73",
                  backgroundColor: l.bool ? "#098D73" : "#fff",
                  height: 30,
                  width: 80,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 7,
                  marginHorizontal: 10,
                }}
              >
                <Text style={{ color: l.bool ? "#fff" : "#098D73" }}>
                  {l.title}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={{marginTop:15}}>
          <View>
            {listing.map((item) => {
              return (
                <ScheduleItem
                  name={item.name}
                  subtitle={item.subtitle}
                  price={item.price}
                  quantity={item.quantity}
                  schedule={item.schedule}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  container2: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    paddingBottom: 5,
    paddingTop: 5,
    color: "white",
  },
  text2: {
    color: "#098D73",
  },
});

// import React, { useState, useRef } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   ImageBackground,
//   ScrollView,
//   Image,
//   Pressable,
//   Picker,
//   Modal,
// } from "react-native";
// import MultiSelect from "react-native-multiple-select";
// import AddButton from "./AddButton";

// const items = [
//   {
//     id: "92iijs7yta",
//     name: "All Days",
//   },
//   {
//     id: "a0s0a8ssbsd",
//     name: "Monday",
//   },
//   {
//     id: "16hbajsabsd",
//     name: "Tuesday",
//   },
//   {
//     id: "nahs75a5sg",
//     name: "Wednesday",
//   },
//   {
//     id: "667atsas",
//     name: "Thursday",
//   },
//   {
//     id: "hsyasajs",
//     name: "Friday",
//   },
//   {
//     id: "djsjudksjd",
//     name: "Saturday",
//   },
// ];
// export default function ScheduleItem({
//   name,
//   subtitle,
//   price,
//   quantity,
//   schedule,
// }) {
//   const [vargetonce, setVargetonce] = useState(null);
//   const [varschedule, setVarschedule] = useState(null);
//   const [allcount, allsetCount] = useState(0);
//   const [moncount, monsetCount] = useState(0);
//   const [tuecount, tuesetCount] = useState(0);
//   const [wedcount, wedsetCount] = useState(0);
//   const [thucount, thusetCount] = useState(0);
//   const [fricount, frisetCount] = useState(0);
//   const [satcount, satsetCount] = useState(0);
//   const [suncount, sunsetCount] = useState(0);

//   const [count, setCount] = useState(quantity);
//   const [modalVisible, setModalVisible] = useState(false);
//   const onSelectedItemsChange = (selectedItems) => {
//     setSelectedValue(selectedItems);
//   };
//   return (
//     <View style={styles.container} style={{ opacity: modalVisible ? 0.5 : 1 }}>
//       <View style={styles.itemContainer}>
//         <View style={{ flexDirection: "row", alignItems: "center" }}>
//           <Image
//             style={styles.itemImage}
//             source={require("../asserts/milk.png")}
//           />
//           <View>
//             <Text style={styles.title}>{name}</Text>
//             <Text style={styles.subtitle}>{subtitle}</Text>
//             <Text style={{ fontWeight: "bold" }}>Rs. {price}</Text>
//           </View>
//         </View>
//         <View>
//           <View>
//             {!vargetonce && !varschedule && (
//               <View>
//                 <Pressable
//                   onPress={() => {
//                     setVargetonce(true);
//                   }}
//                 >
//                   <View
//                     style={{
//                       height: 30,
//                       width: 65,
//                       backgroundColor: "#eee",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       borderRadius: 5,
//                       backgroundColor: "#098D73",
//                     }}
//                   >
//                     <Text style={{ fontSize: 11, color: "#fff" }}>
//                       Get Once
//                     </Text>
//                   </View>
//                 </Pressable>
//                 <Pressable
//                   onPress={() => {
//                     setModalVisible(true);
//                   }}
//                 >
//                   <View
//                     style={{
//                       height: 30,
//                       width: 65,
//                       backgroundColor: "#eee",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       marginTop: 5,
//                       borderRadius: 5,
//                       backgroundColor: "#098D73",
//                     }}
//                   >
//                     <Text style={{ fontSize: 11, color: "#fff" }}>
//                       Schedule
//                     </Text>
//                   </View>
//                 </Pressable>
//               </View>
//             )}
//             {varschedule && (
//               <>
//                 <Pressable
//                   onPress={() => {
//                     setModalVisible(true);
//                   }}
//                 >
//                   <View
//                     style={{
//                       height: 30,
//                       width: 70,
//                       backgroundColor: "#eee",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       marginTop: 5,
//                       borderRadius: 5,
//                       backgroundColor: "#098D73",
//                     }}
//                   >
//                     <Text style={{ fontSize: 11, color: "#fff" }}>
//                       Re-Schedule
//                     </Text>
//                   </View>
//                 </Pressable>
//               </>
//             )}
//             {vargetonce && (
//               <>
//                 {schedule === 0 && count === 0 && (
//                   <TouchableOpacity onPress={() => setCount(count + 1)}>
//                     <View style={styles.addContainer}>
//                       <Text style={{ color: "white" }}>Add +</Text>
//                     </View>
//                   </TouchableOpacity>
//                 )}
//                 {schedule === 0 && count !== 0 && (
//                   <View style={styles.buttonContainer}>
//                     <TouchableOpacity onPress={() => setCount(count - 1)}>
//                       <Text style={styles.minus}>-</Text>
//                     </TouchableOpacity>
//                     <Text>{count}</Text>
//                     <TouchableOpacity onPress={() => setCount(count + 1)}>
//                       <Text style={styles.plus}>+</Text>
//                     </TouchableOpacity>
//                   </View>
//                 )}
//               </>
//             )}
//           </View>
//         </View>
//       </View>
//       <View>
// <Modal
//   animationType="slide"
//   transparent={true}
//   visible={modalVisible}
//   onRequestClose={() => {
//     handlereport();
//   }}
// >
//   <View style={styles.centeredView}>
//     <View style={styles.modalView}>
//       <View
//         style={{
//           flexDirection: "row",
//           alignItems: "center",
//           width: 200,
//           justifyContent: "space-evenly",
//           backgroundColor: "#fff",
//         }}
//       >
//         <Image
//           style={styles.itemImage}
//           source={require("../asserts/milk.png")}
//         />
//         <View>
//           <Text style={styles.title}>{name}</Text>
//           <Text style={styles.subtitle}>{subtitle}</Text>
//           <Text style={{ fontWeight: "bold" }}>Rs. {price}</Text>
//         </View>
//       </View>
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginVertical: 10,
//           width: 150,
//         }}
//       >
//         <View>
//           <Text>Monday</Text>
//         </View>
//         <View>
//           {moncount === 0 && (
//             <TouchableOpacity onPress={() => monsetCount(moncount + 1)}>
//               <View style={styles.addContainer}>
//                 <Text style={{ color: "white" }}>Add +</Text>
//               </View>
//             </TouchableOpacity>
//           )}
//           {moncount !== 0 && (
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 onPress={() => monsetCount(moncount - 1)}
//               >
//                 <Text style={styles.minus}>-</Text>
//               </TouchableOpacity>
//               <Text>{moncount}</Text>
//               <TouchableOpacity
//                 onPress={() => monsetCount(moncount + 1)}
//               >
//                 <Text style={styles.plus}>+</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//       </View>
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginVertical: 10,
//           width: 150,
//         }}
//       >
//         <View>
//           <Text>Tuesday</Text>
//         </View>
//         <View>
//           {tuecount === 0 && (
//             <TouchableOpacity onPress={() => tuesetCount(tuecount + 1)}>
//               <View style={styles.addContainer}>
//                 <Text style={{ color: "white" }}>Add +</Text>
//               </View>
//             </TouchableOpacity>
//           )}
//           {tuecount !== 0 && (
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 onPress={() => tuesetCount(tuecount - 1)}
//               >
//                 <Text style={styles.minus}>-</Text>
//               </TouchableOpacity>
//               <Text>{tuecount}</Text>
//               <TouchableOpacity
//                 onPress={() => tuesetCount(tuecount + 1)}
//               >
//                 <Text style={styles.plus}>+</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//       </View>
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginVertical: 10,
//           width: 150,
//         }}
//       >
//         <View>
//           <Text>Wednesday</Text>
//         </View>
//         <View>
//           {wedcount === 0 && (
//             <TouchableOpacity onPress={() => wedsetCount(wedcount + 1)}>
//               <View style={styles.addContainer}>
//                 <Text style={{ color: "white" }}>Add +</Text>
//               </View>
//             </TouchableOpacity>
//           )}
//           {wedcount !== 0 && (
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 onPress={() => wedsetCount(wedcount - 1)}
//               >
//                 <Text style={styles.minus}>-</Text>
//               </TouchableOpacity>
//               <Text>{wedcount}</Text>
//               <TouchableOpacity
//                 onPress={() => wedsetCount(wedcount + 1)}
//               >
//                 <Text style={styles.plus}>+</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//       </View>
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginVertical: 10,
//           width: 150,
//         }}
//       >
//         <View>
//           <Text>Thursay</Text>
//         </View>
//         <View>
//           {thucount === 0 && (
//             <TouchableOpacity onPress={() => thusetCount(thucount + 1)}>
//               <View style={styles.addContainer}>
//                 <Text style={{ color: "white" }}>Add +</Text>
//               </View>
//             </TouchableOpacity>
//           )}
//           {thucount !== 0 && (
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 onPress={() => thusetCount(thucount - 1)}
//               >
//                 <Text style={styles.minus}>-</Text>
//               </TouchableOpacity>
//               <Text>{thucount}</Text>
//               <TouchableOpacity
//                 onPress={() => thusetCount(thucount + 1)}
//               >
//                 <Text style={styles.plus}>+</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//       </View>
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginVertical: 10,
//           width: 150,
//         }}
//       >
//         <View>
//           <Text>Friday</Text>
//         </View>
//         <View>
//           {fricount === 0 && (
//             <TouchableOpacity onPress={() => frisetCount(fricount + 1)}>
//               <View style={styles.addContainer}>
//                 <Text style={{ color: "white" }}>Add +</Text>
//               </View>
//             </TouchableOpacity>
//           )}
//           {fricount !== 0 && (
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 onPress={() => frisetCount(fricount - 1)}
//               >
//                 <Text style={styles.minus}>-</Text>
//               </TouchableOpacity>
//               <Text>{fricount}</Text>
//               <TouchableOpacity
//                 onPress={() => frisetCount(fricount + 1)}
//               >
//                 <Text style={styles.plus}>+</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//       </View>
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginVertical: 10,
//           width: 150,
//         }}
//       >
//         <View>
//           <Text>Saturday</Text>
//         </View>
//         <View>
//           {satcount === 0 && (
//             <TouchableOpacity onPress={() => satsetCount(satcount + 1)}>
//               <View style={styles.addContainer}>
//                 <Text style={{ color: "white" }}>Add +</Text>
//               </View>
//             </TouchableOpacity>
//           )}
//           {satcount !== 0 && (
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 onPress={() => satsetCount(satcount - 1)}
//               >
//                 <Text style={styles.minus}>-</Text>
//               </TouchableOpacity>
//               <Text>{satcount}</Text>
//               <TouchableOpacity
//                 onPress={() => satsetCount(satcount + 1)}
//               >
//                 <Text style={styles.plus}>+</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//       </View>
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginVertical: 10,
//           width: 150,
//         }}
//       >
//         <View>
//           <Text>Sunday</Text>
//         </View>
//         <View>
//           {suncount === 0 && (
//             <TouchableOpacity onPress={() => sunsetCount(suncount + 1)}>
//               <View style={styles.addContainer}>
//                 <Text style={{ color: "white" }}>Add +</Text>
//               </View>
//             </TouchableOpacity>
//           )}
//           {suncount !== 0 && (
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 onPress={() => sunsetCount(suncount - 1)}
//               >
//                 <Text style={styles.minus}>-</Text>
//               </TouchableOpacity>
//               <Text>{suncount}</Text>
//               <TouchableOpacity
//                 onPress={() => sunsetCount(suncount + 1)}
//               >
//                 <Text style={styles.plus}>+</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//       </View>
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-evenly",
//           width: 200,
//           marginTop: 10,
//         }}
//       >
//         <Pressable
//           style={[styles.button, styles.buttonOpen]}
//           onPress={() => setModalVisible(!modalVisible)}
//         >
//           <Text style={styles.textStyle}>Update</Text>
//         </Pressable>
//         <Pressable
//           style={[styles.button, styles.buttonClose]}
//           onPress={() => setModalVisible(!modalVisible)}
//         >
//           <Text style={styles.textStyle}>Cancel</Text>
//         </Pressable>
//       </View>
//     </View>
//   </View>
// </Modal>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     paddingTop: 10,
//     backgroundColor: "white",
//     marginVertical: 10,
//   },
//   itemContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingLeft: 15,
//     paddingRight: 15,
//   },
//   itemImage: {
//     height: 70,
//     width: 70,
//   },
//   addContainer: {
//     height: 25,
//     width: 60,
//     backgroundColor: "#098D73",
//     borderRadius: 5,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   buttonContainer: {
//     height: 25,
//     width: 60,
//     borderRadius: 5,
//     borderColor: "#098D73",
//     borderWidth: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   minus: {
//     paddingHorizontal: 6,
//     paddingLeft: 7,
//   },
//   plus: {
//     paddingHorizontal: 6,
//     paddingRight: 7,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     color: "#838383",
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "#eeeeef",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 10,
//     height: 40,
//     width: 90,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   buttonOpen: {
//     backgroundColor: "#098D73",
//   },
//   buttonClose: {
//     backgroundColor: "#f0505c",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   modalText: {
//     marginBottom: 20,
//     textAlign: "center",
//     fontSize: 16,
//   },
// });
