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
    /*const teamCard = ({item}) =>{
        return(
            <View style={styles.mainContainer}>
                <LinearGradient colors={['#023050', '#212022' ]} start={{x: 0.0, y: 0.7}} end={{x: 0.5, y: 1.0}} style={styles.backLinearGradient}>
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
    };*/
  return (
    <ImageBackground source={require("../images/menuback.jpg")} resizeMode="cover" style={styles.backImage}>
        <SafeAreaView style={styles.container}>
            <View style={[styles.menu,{transform: [
                                { translateY: normalize(585)},
                            ],  }]}>
                <Menu ></Menu> 
            </View>
            <ScrollView style={styles.scrollView}> 
                <Text style={styles.title}>Our Team</Text>
                {/*<FlatList
                    keyExtractor={(item)=> item.id}
                    data={Teamgal}
                    renderItem={teamCard}
                    style={styles.scrollPart}
                />*/}
                {Teamgal.map((item) => {
                    return (
                    <View key={item.id}>
                        <View style={styles.mainContainer}>
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
                    </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>

    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
    backImage:{
        height:'100%',
        backgroundColor:'tranparent',
    },
    title:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:5,
        marginTop:10,
    },
    container:{

    },
    scrollView:{
        
    
    },
    mainContainer:{
        width:'70%',
        marginHorizontal:60,
        marginVertical:15,
        
    },
    backLinearGradient:{
        borderColor:'white',
        borderWidth:0.7,
        borderRadius:15,
    },
    imgStyle:{
        height:undefined,
        width:'85%',
        aspectRatio:1,
        marginHorizontal: 20,
        marginTop:30,
        marginBottom:10,
        borderRadius:10,
        shadowColor: 'black',
    },
    cardDesc:{
        width:'83%',
        marginHorizontal: 20,
        marginBottom:20,
        

    },
    cardName:{
        textAlign:'center',
        color:'white',
        fontSize:20,
        fontWeight:'bold',
    },
    cardPos:{
        textAlign:'center',
        color:'white',
        fontSize:20,
    },
    menu:{
        marginTop:normalize(-50),
        zIndex:100,
    }
})
export default Team

