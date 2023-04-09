import { KeyboardAvoidingView,Dimensions,PixelRatio, SafeAreaView, ScrollView, TouchableOpacity,TextInput, View, StyleSheet, Text, Image, Button, Pressable, ImageBackground, Platform } from "react-native";
import React from 'react'
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

const Resp = () => {
    const navigation=useNavigation();

  return (
    <ImageBackground source={{uri: "https://iphoneswallpapers.com/wp-content/uploads/2022/08/Astronomy-iPhone-Wallpaper-HD.jpg" }} resizeMode="cover" style={styles.backImage}>
        <LinearGradient colors={['#023050', '#212022' ]} start={{x: 0.0, y: 0.7}} end={{x: 0.5, y: 1.0}}  style={styles.respBar}>
            <Text style={[styles.resp,{fontSize:normalize(27),marginTop:'10%'}]}>Post created</Text>
            <Text style={styles.resp}>Successfully</Text>
            <View style={styles.butVw}>
                {/* <Text style={styles.btn}  onPress={()=>navigation.navigate("Pushc")}>Create another</Text> */}
                <Text style={styles.btn}  onPress={()=>navigation.navigate("Home")}>Go Back</Text>
            </View>
        </LinearGradient>
    </ImageBackground>
  )
}

export default Resp

const styles = StyleSheet.create({
    backImage:{
        height:"100%",
    },
    respBar:{
        backgroundColor:"blue",
        height:"30%",
        width:'80%',
        borderColor:'white',
        borderWidth:0.7,
        borderRadius:8,
        textAlign:"center",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:'10%',
        marginVertical:"57%",
    },
    resp:{
        color:"white",
        fontSize:normalize(25),
    },
    butVw:{
        flex:1,
        flexDirection:'row',
    },
    btn:{
        textAlign:'center',
        color:'white',
        backgroundColor:'blue',
        height:normalize(35),
        width:normalize(100),
        fontSize:normalize(15),
        lineHeight:normalize(33),
        marginHorizontal:'2%',
        marginVertical:'8%',
    },
})