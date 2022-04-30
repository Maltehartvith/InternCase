import React from 'react';
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { Ionicons } from "@expo/vector-icons";
import { StackParamList } from "../typings/navigations";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import News from "../screens/News";
import Invest from "../screens/Invest";
import Academy from "../screens/Academy";
import mClub from "../screens/mClub";
import { Entypo } from '@expo/vector-icons'; 

const Navigation = props => {

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ScreenNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2} />
            <Stack.Screen name="Screen3" component={Screen3} />
        </Stack.Navigator>
    );
}



    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
              <Tab.Screen
                name="Home"
                component={ScreenNavigator}
                options={{
                  tabBarLabel: "Chat",
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="chatbox" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen 
              name="News" 
              component={News} 
              options={{
                tabBarLabel: "news",
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="news"  color={color} size={size}/>
                ),
              }}
              />
              <Tab.Screen name="Invest" component={Invest} />
              <Tab.Screen name="Academy" component={Academy} />
              <Tab.Screen name="mClub" component={mClub} />
            </Tab.Navigator>
        </NavigationContainer>
      );
    } 


export default Navigation;