import { StatusBar, KeyboardAvoidingView,Dimensions,PixelRatio, SafeAreaView, ScrollView, TouchableOpacity,TextInput, View, StyleSheet, Text, Image, Button, Pressable, ImageBackground, Platform, RefreshControl } from "react-native";
import React, {useState, useEffect} from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

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

const Vieweventsresp = () => {
    const navigation=useNavigation();

    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
      setRefreshing(true);
      // Perform the data fetching or other operations here
      setTimeout(() => {
        setRefreshing(false);
        navigation.navigate("Tub");
      }, 2000); // Simulate a delay
      
    };

  return (
    <ImageBackground source={{uri: "https://iphoneswallpapers.com/wp-content/uploads/2022/08/Astronomy-iPhone-Wallpaper-HD.jpg" }} resizeMode="cover" style={styles.backImage}>
        <LinearGradient colors={['#023050', '#212022' ]} start={{x: 0.0, y: 0.7}} end={{x: 0.5, y: 1.0}}  style={styles.respBar}>
          <StatusBar
              animated={true}
              backgroundColor="#0b0f1e"
              barStyle="dark-content"
            />
            <Text style={[styles.resp,{fontSize:normalize(27),marginTop:'10%'}]}> Response taken</Text>
            <Text style={styles.resp}>succesful</Text>
            <TouchableOpacity style={styles.butVw} onPress={()=>onRefresh()}>
                <Text style={styles.btn} >Done</Text>
            </TouchableOpacity>
        </LinearGradient>
    </ImageBackground>
  )
}

export default Vieweventsresp

const styles = StyleSheet.create({
    backImage:{
        height:"100%",
    },
    respBar:{
        height:"30%",
        width:'80%',
        borderColor:'white',
        borderWidth:0.7,
        borderRadius:8,
        textAlign:"center",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:'10%',
        marginVertical:"60%",
    },
    resp:{
        color:"white",
        fontSize:normalize(25),
    },
    butVw:{
        backgroundColor:'blue',
        width:'70%',
        height:'17%',
        marginTop:'7%',
    },
    btn:{
        textAlign:'center',
        color:'white',
        fontSize:normalize(15),
        lineHeight:normalize(30),
    },
})