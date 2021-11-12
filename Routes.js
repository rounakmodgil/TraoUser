import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import MaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Fontisto from "react-native-vector-icons/Fontisto";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Welcome from "./pages/welcomepage";
import Home from "./pages/home";
import Wallet from "./pages/wallet";
import Profile from "./pages/profile";
import Orders from "./pages/orders";
import SplashScreen from "./pages/splashscreen";
import DeliveryDetails from "./pages/deliveryDetails";
import PickupAdd from "./pages/pickupaddress";
import DeliveryAdd from "./pages/deliveryaddress";
import SellerProfile from "./pages/sellerProfile";
import Cart from "./pages/cart";
import SearchResult from "./pages/searchResult";
import ProfileEditProfile from "./pages/profileEditPage";
import Notification from "./pages/notification";
import PhoneNumber from "./pages/phonenumber";
import Otp from "./pages/otp";
import Schedule from "./pages/schedule";
import CartSearch from "./pages/cartsearch";
import MartProfile from "./pages/martprofile";
import Map from "./pages/map";
import TraoMarts from "./pages/traomarts";
import LocalShops from "./pages/localshops";

export default function Routes() {
  const [splashscreen, setSplashscreen] = useState(true);
  const [login, setLogin] = useState(false);
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    setTimeout(() => {
      setSplashscreen(false);
    }, 3000);
  }, []);

  const Loginstack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="login"
        component={Login}
        initialParams={{
          setLogin: setLogin,
        }}
      />
      <Stack.Screen name="phonenumber" component={PhoneNumber} />
      <Stack.Screen
        name="otp"
        component={Otp}
        initialParams={{
          setLogin: setLogin,
        }}
      />

      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  );

  const Tabstack = () => (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Home
            </Text>
          ),
          title: "Home",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <FaIcon
                name="home"
                size={23}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Orders
            </Text>
          ),
          title: "Orders",
          tabBarIcon: ({ focused }) => {
            return (
              <FaIcon
                name="shopping-bag"
                size={23}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Wallet
            </Text>
          ),
          title: "Wallet",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <MaIcon
                name="wallet"
                size={25}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Profile
            </Text>
          ),
          title: "Profile",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <FaIcon
                name="user-alt"
                size={23}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
  const Mainstack = () => (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="home"
        component={Tabstack}
      />
      <Stack.Screen name="deliverydetails" component={DeliveryDetails} />
      <Stack.Screen name="pickupadd" component={PickupAdd} />
      <Stack.Screen name="deliveryadd" component={DeliveryAdd} />
      <Stack.Screen name="sellerprofile" component={SellerProfile} />
      <Stack.Screen name="cart" component={Cart} />
      <Stack.Screen name="schedule" component={Schedule} />
      <Stack.Screen name="searchresult" component={SearchResult} />
      <Stack.Screen name="notifications" component={Notification} />
      <Stack.Screen name="editprofile" component={ProfileEditProfile} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="MartSearch"
        component={CartSearch}
      />
      <Stack.Screen name="MartProfile" component={MartProfile} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Trao Marts" component={TraoMarts} />
      <Stack.Screen name="Local Shops" component={LocalShops} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="mainsplashscreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="mainsplashscreen" component={SplashScreen} />
        <Stack.Screen name="mainloginscreen" component={Loginstack} />
        <Stack.Screen name="maintabscreen" component={Mainstack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
