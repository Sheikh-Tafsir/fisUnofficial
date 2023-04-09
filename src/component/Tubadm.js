import { KeyboardAvoidingView,Dimensions,PixelRatio, SafeAreaView, ScrollView, TouchableOpacity,TextInput, View, StyleSheet, Text, Image, Button, Pressable, ImageBackground, Platform } from "react-native";
import {React,useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homes from '../screens/Homes';
import About from '../screens/About';
import Gallery from '../screens/Gallery';
import Logo from './Logo';
import Fetc from './Fetc';
import Team from '../screens/Team';
import Home from "../screens/Home";
import Homesadm from "../screens/Homesadm";
import Pushc from "./Pushc";
import Eventadm from "../screens/Eventadm";
import Vieweventpartadm from "../screens/Vieweventpartadm"

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;
const normalize = (size) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};


const Tubadm = () => {
    const Tab = createBottomTabNavigator();
    
  return (
      <Tab.Navigator initialRouteName="Homesadm">
        <Tab.Screen name="Homesadm" component={Homesadm} 
          options={{ 
            headerShown:false,
            headerTitle: (props) => <Logo {...props} />,
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
            tabBarActiveBackgroundColor:'white',
            tabBarInactiveBackgroundColor:'#0b0f1e',
            tabBarIcon:({focused, tintColor}) =>(
              <Image
                focused={focused}
                source={{uri:"https://img.icons8.com/metro/344/home.png"}}
                style={styles.iconStyle}
              />
            ),
            shifting:true,
            tabBarStyle:{
              height:'8%',
            },
            tabBarLabel: "Home",
            
          }}
        />
      
        <Tab.Screen name="Pushc" component={Pushc} 
          options={{ //this component create blog
            headerShown:false,
            headerTitle: (props) => <Logo {...props} />,
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
            tabBarActiveBackgroundColor:'white',
            tabBarInactiveBackgroundColor:'#0b0f1e',
            tabBarHideOnKeyboard: true,
            tabBarIcon:({focused, tintColor}) =>(
              <Image
                focused={focused}
                source={{uri:"https://img.icons8.com/ios-filled/344/trophy.png"}}
                style={styles.iconStyle}
              />
            ),
            shifting:true,
            tabBarStyle:{
              height:'8%',
            },
            tabBarLabel: "New post",
          }}
        />

        <Tab.Screen name="Vieweventpartadm" component={Vieweventpartadm} 
          options={{ //this component checks participant couns in events
            headerShown:false,
            headerTitle: (props) => <Logo {...props} />,
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
            tabBarActiveBackgroundColor:'white',
            tabBarInactiveBackgroundColor:'#0b0f1e',
            tabBarIcon:({focused, tintColor}) =>(
              <Image
                focused={focused}
                source={{uri:"https://i.ibb.co/RNkCRyQ/pngwing-com.png"}}
                style={styles.iconStyle}
              />
            ),
            shifting:true,
            tabBarStyle:{
              height:'8%',
            },
            tabBarLabel: "View Events",
          }}
        />

        
        <Tab.Screen name="Eventadm" component={Eventadm} 
          options={{ //this component create events
            headerShown:false,
            headerTitle: (props) => <Logo {...props} />,
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
            tabBarActiveBackgroundColor:'white',
            tabBarInactiveBackgroundColor:'#0b0f1e',
            tabBarHideOnKeyboard: true,
            tabBarIcon:({focused, tintColor}) =>(
              <Image
                focused={focused}
                source={{uri:"https://img.icons8.com/external-glyph-geotatah/344/external-company-conflict-resolution-glyph-glyph-geotatah.png"}}
                style={styles.iconStyle}
              />
            ),
            shifting:true,
            tabBarStyle:{
              height:'8%',
            },
            tabBarLabel: "Create Events",
          }}
        />

        <Tab.Screen name="About" component={About} 
          options={{ //this component is profile of admin
            headerShown:false,
            headerTitle: (props) => <Logo {...props} />,
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
            tabBarActiveBackgroundColor:'white',
            tabBarInactiveBackgroundColor:'#0b0f1e',
            tabBarIcon:({focused, tintColor}) =>(
              <Image
                focused={focused}
                source={{uri:"https://img.icons8.com/pastel-glyph/344/person-male--v3.png"}}
                style={styles.iconStyle}
              />
            ),
            shifting:true,
            tabBarStyle:{
              height:'8%',
            },
            tabBarLabel: "Dashboard",
          }}
        />
      </Tab.Navigator>
  )
}
const styles = StyleSheet.create({

  iconStyle:{
      width:normalize(25),
      height:undefined,
      aspectRatio:1,
  },
});

export default Tubadm