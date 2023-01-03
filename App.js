import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions,PixelRatio,StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import About from './src/screens/About';
import Contacts from './src/screens/Contacts';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';
import Homes from './src/screens/Homes';
import Menu from './src/component/Menu';
import Logo from './src/component/Logo';
import Progrm from './src/screens/Progrm';
import Team from './src/screens/Team';
import Gallery from './src/screens/Gallery';
import Fetc from './src/component/Fetc';
import Pushc from './src/component/Pushc';
import Trying from './src/screens/Trying';
import Resp from './src/component/Resp';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Loginadm from './src/screens/Loginadm';
import Homesadm from './src/screens/Homesadm';
import Tub from './src/component/Tub';
import Tubadm from './src/component/Tubadm';
import Eventadm from './src/screens/Eventadm';
import Viewevents from './src/screens/Viewevents';
import Vieweventpartadm from './src/screens/Vieweventpartadm'

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

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" /*screenOptions={{headerShown: false}}*/>
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {(props)=> <Home {...props} channelName=
          {"wonder Intersteller"}/>}
        </Stack.Screen>
        

        <Stack.Screen name="Homes" component={Homes}
          options={{ 
            headerShown:false,
            headerTitle: (props) => <Logo {...props} />,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
          }}
        />
        
        <Stack.Screen name="UserData" component={UserData}
          /*options={{
            headerTitleStyle:{
              fontSize:25,
            },
            headerTitleAlign:'center',
          }}*/
          options={{
            /*headerBackVisible:false,*/
            headerTitleStyle:{
              fontSize:25,
            },
            headerTitleAlign:'center',
          }}
        />
     
        <Stack.Screen name="About" component={About}
           options={{ 
            headerTitle: (props) => <Logo {...props} />,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
          }}
        />
        
        <Stack.Screen name="Progrm" component={Progrm}
           options={{ 
            headerTitle: (props) => <Logo {...props} />,
            /*headerBackVisible:false,*/
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
          }}
        />

        <Stack.Screen name="Team" component={Team}
           options={{ 
            headerTitle: (props) => <Logo {...props} />,
            /*headerBackVisible:false,*/
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
          }}
        />

        <Stack.Screen name="Gallery" component={Gallery}
           options={{ 
            headerTitle: (props) => <Logo {...props} />,
            /*headerBackVisible:false,*/
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
          }}
        />

        <Stack.Screen name="Fetc" component={Fetc}
           options={{ 
            headerTitle: (props) => <Logo {...props} />,
            /*headerBackVisible:false,*/
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
          }}
        />

        <Stack.Screen name="Pushc" component={Pushc}
           options={{ 
            headerTitle: (props) => <Logo {...props} />,
            /*headerBackVisible:false,*/
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
          }}
        />

        <Stack.Screen name="Contacts" component={Contacts}
          options={{ 
            headerTitle: (props) => <Logo {...props} />,
            /*headerBackVisible:false,*/
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
          }}
        />

        <Stack.Screen name="Login" component={Login}
           options={{ 
            headerTitle: (props) => <Logo {...props} />,
            /*headerBackVisible:false,*/
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
          }}
        />

        <Stack.Screen name="Signup" component={Signup}
           options={{ 
            headerTitle: (props) => <Logo {...props} />,
            /*headerBackVisible:false,*/
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
          }}
        />

        <Stack.Screen name="Loginadm" component={Loginadm}
           options={{ 
            headerTitle: (props) => <Logo {...props} />,
            /*headerBackVisible:false,*/
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
          }}
        />

        <Stack.Screen name="Resp" component={Resp}
           options={{ 
            headerTitle: (props) => <Logo {...props} />,
            /*headerBackVisible:false,*/
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
          }}
        />

        <Stack.Screen name="Trying" component={Trying}
           options={{ 
            headerTitle: (props) => <Logo {...props} />,
            /*headerBackVisible:false,*/
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
          }}
        />

        <Stack.Screen name="Homesadm" component={Homesadm}
          options={{ 
            headerTitle: (props) => <Logo {...props} />,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
          }}
        />

        <Stack.Screen name="Tub" component={Tub}
          options={{ 
            headerShown:true,
            headerTitle: (props) => <Logo {...props} />,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
          }}
        />

        <Stack.Screen name="Tubadm" component={Tubadm}
          options={{ 
            headerTitle: (props) => <Logo {...props} />,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
          }}
        />

        <Stack.Screen name="Eventadm" component={Eventadm}
          options={{ 
            headerTitle: (props) => <Logo {...props} />,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
          }}
        />

        <Stack.Screen name="Viewevents" component={Viewevents}
          options={{ 
            headerTitle: (props) => <Logo {...props} />,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
          }}
        />

        <Stack.Screen name="Vieweventpartadm" component={Vieweventpartadm}
          options={{ 
            headerTitle: (props) => <Logo {...props} />,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0b0f1e',
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
