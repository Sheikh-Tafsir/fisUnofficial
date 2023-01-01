import { KeyboardAvoidingView,Dimensions,PixelRatio, SafeAreaView, ScrollView, TouchableOpacity,TextInput, View, StyleSheet, Text, Image, Button, Pressable, ImageBackground, Platform } from "react-native";
import {React,useState, useEffect} from 'react'

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

const Logo = () => {
  return (
    <View>
        <Image
            style={{ width: normalize(120), height: normalize(37),aspectRatio:3,marginLeft:normalize(140) }}
            source={{uri:'https://i.ibb.co/mDF2GRy/logoo1.png'}}
        />
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({})