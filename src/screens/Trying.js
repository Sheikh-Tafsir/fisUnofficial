import { StyleSheet, Text, View, Image, ImageBackground, Button, SafeAreaView, ScrollView, StatusBar, FlatList, TouchableHighlight } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import {BoxShadow} from 'react-native-shadow'
import React from 'react'
import Teamgal from '../component/Teamgal';
import Fetc from '../component/Fetc';

const Trying = (props) => {

  return (
    <ImageBackground source={{uri: "https://iphoneswallpapers.com/wp-content/uploads/2022/08/Astronomy-iPhone-Wallpaper-HD.jpg" }} resizeMode="cover" style={styles.backImage}>
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}> 
                <Fetc>{employeeList[1].username}</Fetc>
            </ScrollView>
        </SafeAreaView>

    </ImageBackground>
    
  )
}
export default Trying

const styles = StyleSheet.create({

});