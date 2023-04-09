import { Dimensions,PixelRatio,StyleSheet, Text, View, Image, ImageBackground, Button, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {BoxShadow} from 'react-native-shadow'
import React from 'react'
import Menu from '../component/Menu';
import Teamgal from '../component/Teamgal';
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
const Team = () => {
  return (
    <ImageBackground source={{uri:"https://www.pixelstalk.net/wp-content/uploads/2016/04/Beautiful-night-sky-background-wallpapers-HD.jpg" }} resizeMode="cover" style={styles.backImage}>
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}> 
                <StatusBar
                    animated={true}
                    backgroundColor="#0b0f1e"
                    barStyle="dark-content"
                />
                <LinearGradient colors={['#47abbf','#317cce']} start={{x: 0.0, y: 0.7}} end={{x: 0.5, y: 1.0}}  style={styles.headContainer}>
                    <Text style={styles.title}>Team</Text>
                    <Text style={styles.subTitle}>Come and meet our excellet team. They are competend and qualitiful in thier fields. With thier contribution we will go on with our journey</Text>
                </LinearGradient>
                
                <View style={styles.wrapContainer}>
                    {Teamgal.map((item) => {
                        return (
                            <View style={styles.mainContainer} key={item.id}>
                                <LinearGradient colors={['#023050', '#212022' ]} start={{x: 0.0, y: 0.7}} end={{x: 0.5, y: 1.0}} style={styles.backLinearGradient} >
                                    <Image style={styles.imgStyle}
                                            source={item.image}
                                            resizeMode="contain"  
                                        />
                                    <View style={styles.cardDesc}>
                                        <Text style={styles.cardName}>{item.name}</Text>
                                        <Text style={styles.cardPos}>{item.pos}</Text>
                                    </View>
                                </LinearGradient>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>

    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
    backImage:{
        height:'100%',
        
    },

    container:{
        height:'100%',
    },
    scrollView:{
        height:'100%',
    },
    headContainer:{
        width:'90%',
        height:normalize(130),
        marginHorizontal:'5%',
        marginTop:normalize(20),
        marginBottom:normalize(80),
        paddingHorizontal:'5%',
        borderWidth:1,
        borderColor:'white',
        borderRadius:10,
    },
    title:{
        color:'white',
        fontSize:normalize(21),
        fontWeight:'bold',
        marginBottom:normalize(10),
        marginTop:normalize(20),
    },
    subTitle:{
        color:'white',
        fontSize:normalize(14),
 
    },
    wrapContainer:{
        flex:1,
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal:'3%',
    },
    mainContainer:{
        width:'46%',
        marginHorizontal:'2%',
        height:normalize(188),
        marginBottom:normalize(90),
    },

    backLinearGradient:{
        borderColor:'white',
        borderWidth:0.7,
        borderRadius:15,
        height:'100%',
        
    },
    imgStyle:{
        height:undefined,
        width:'100%',
        aspectRatio:1,
        marginHorizontal: '0%',
        marginTop:normalize(-50),
        marginBottom:normalize(15),
        borderRadius:100,
        shadowColor: 'black',
        borderWidth:0.5,
        borderColor:'white',
    },
    cardDesc:{
        width:'84%',
        marginHorizontal: '8%',
    },
    cardName:{
        textAlign:'center',
        color:'white',
        fontSize:normalize(17),
        fontWeight:'bold',
    },
    cardPos:{
        textAlign:'center',
        color:'white',
        fontSize:normalize(17),
    },
    menu:{
        marginTop:normalize(-70),
        zIndex:100,
    }
})
export default Team

