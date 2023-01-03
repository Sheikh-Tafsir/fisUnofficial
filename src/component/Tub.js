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
import Viewevents from "../screens/Viewevents";

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

const Tub = () => {
    const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator>
        <Tab.Screen name="Homes" component={Homes} 
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
            }
            
          }}
        />

        <Tab.Screen name="Fetc" component={Fetc} 
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
                source={{uri:"https://img.icons8.com/ios-filled/344/trophy.png"}}
                style={styles.iconStyle}
              />
            ),
            shifting:true,
            tabBarStyle:{
              height:'8%',
            }
          }}
        />

        <Tab.Screen name="Gallery" component={Gallery} 
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
                source={{uri:"https://i.ibb.co/RNkCRyQ/pngwing-com.png"}}
                style={styles.iconStyle}
              />
            ),
            shifting:true,
            tabBarStyle:{
              height:'8%',
            }
          }}
        />
        
        <Tab.Screen name="Viewevents" component={Viewevents} 
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
                source={{uri:"https://img.icons8.com/external-glyph-geotatah/344/external-company-conflict-resolution-glyph-glyph-geotatah.png"}}
                style={styles.iconStyle}
              />
            ),
            shifting:true,
            tabBarStyle:{
              height:'8%',
            }
          }}
        />

        <Tab.Screen name="About" component={About} 
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
                source={{uri:"https://img.icons8.com/pastel-glyph/344/person-male--v3.png"}}
                style={styles.iconStyle}
              />
            ),
            shifting:true,
            tabBarStyle:{
              height:'8%',
            }
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

export default Tub