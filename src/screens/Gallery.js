import { Dimensions,PixelRatio,StyleSheet, Text, View, Image, ImageBackground, Button, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import React from 'react'
import Menu from '../component/Menu';
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
const Gallery = () => {
  return (
    <ImageBackground source={{uri: "https://iphoneswallpapers.com/wp-content/uploads/2022/08/Astronomy-iPhone-Wallpaper-HD.jpg" }} resizeMode="cover" style={styles.backImage}>
        
        <SafeAreaView style={styles.container}>

        <View style={[styles.menu,{transform: [
                            { translateY: normalize(585)},
                        ],  }]}>
            <Menu ></Menu> 
        </View>
        
            <ScrollView style={styles.scrollView}>   
                <Text style={styles.title}>Gallery</Text>   
                <View style={styles.galBox}>
                    <Image
                        style={[styles.imgStyle,{width:'63%',height:undefined,aspectRatio:1}]}
                        source={require("../images/g1.jpg")}
                    />
                    <Image
                        style={[styles.imgStyle,{width:'31.5%',height:undefined,aspectRatio:0.5}]}
                        source={require("../images/g2.jpg")}
                    />

                    <Image
                        style={styles.imgStyle}
                        source={require("../images/g3.jpg")}
                    />
                    <Image
                        style={[styles.imgStyle,{width:'63%',height:undefined,aspectRatio:2}]}
                        source={require("../images/g4.jpg")}
                    />
                    
                    <Image
                        style={styles.imgStyle}
                        source={require("../images/g5.jpg")}
                    />
                    <Image
                        style={styles.imgStyle}
                        source={require("../images/g6.jpg")}
                    />
                    <Image
                        style={styles.imgStyle}
                        source={require("../images/g7.jpg")}
                    />
                    <Image
                        style={[styles.imgStyle,{width:'63%',height:undefined,aspectRatio:2}]}
                        source={require("../images/g8.jpg")}
                    />
                    <Image
                        style={styles.imgStyle}
                        source={require("../images/g9.jpg")}
                    />


                    <Image
                        style={[styles.imgStyle,{width:'48%',height:undefined,aspectRatio:1.5}]}
                        source={require("../images/g10.jpg")}
                    />
                    <Image
                        style={[styles.imgStyle,{width:'48%',height:undefined,aspectRatio:1.5}]}
                        source={require("../images/g11.jpg")}
                    />
                    <Image
                        style={styles.imgStyle}
                        source={require("../images/g12.jpg")}
                    />
                    <Image
                        style={styles.imgStyle}
                        source={require("../images/g13.jpg")}
                    />
                </View>   
            </ScrollView>
        </SafeAreaView> 
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    backImage:{
        height:"100%",
    },
    scrollView: {
        width:'92%',
        marginHorizontal: '4%',    
    },
    title:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:5,
        marginTop:10,
    },
    galBox:{
        flex:3,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        flexWrap:'wrap',
        
    },
    imgStyle:{
        width:'31.5%',
        aspectRatio:1,
        margin:normalize(4),
        borderWidth:0.7,
        borderColor:'white',
        borderRadius:10,
    },
    menu:{
        marginTop:normalize(-50),
        zIndex:100,

    }

})

export default Gallery