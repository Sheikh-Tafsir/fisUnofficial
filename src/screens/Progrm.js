import { StyleSheet, Text, View, Image, ImageBackground, Button, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import React from 'react'
import axios from 'axios';
const baseUrl = 'https://reqres.in';

const Progrm = () => {
    
  return (
    <ImageBackground source={{uri: "https://iphoneswallpapers.com/wp-content/uploads/2022/08/Astronomy-iPhone-Wallpaper-HD.jpg" }} resizeMode="cover" style={styles.backImage}>
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>       
                <Text style={styles.title}>Our Events</Text>
                <View style={styles.evePoints}>
                    <LinearGradient colors={['#023050', '#212022' ]} start={{x: 0.0, y: 0.7}} end={{x: 0.5, y: 1.0}} style={styles.backLinearGradient}>
                        <View style={styles.pntTxt}>
                            <Text style={styles.pntHead}>Space Summit</Text>
                            <Text style={styles.pntDesc}>
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be
                            </Text>
                            <View style={styles.btnStyle}>
                                <Button title="Learn More"></Button>
                            </View>                             
                        </View>
                        <Image
                            style={styles.imgStyle}
                            source={{uri:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/283191875_148757877670485_3775245651421002430_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=H0lQrqy9su8AX8H8mxZ&_nc_ht=scontent.fdac140-1.fna&oh=00_AT82ITeHVhSJrg4PPLy20mb9HMCsNZ-0la6owmevrLr3Eg&oe=634819A5"}}
                        />
                    </LinearGradient>
                </View>
                <View style={styles.evePoints}>
                    <LinearGradient colors={['#023050', '#212022' ]} start={{x: 0.0, y: 0.7}} end={{x: 0.5, y: 1.0}} style={styles.backLinearGradient}>
                        <View style={styles.pntTxt}>
                            <Text style={styles.pntHead}>Club Day</Text>
                            <Text style={styles.pntDesc}>
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be
                            </Text>
                            <View style={styles.btnStyle}>
                                <Button title="Learn More"></Button>
                            </View>   
                        </View>
                        <Image
                            style={styles.imgStyle}
                            source={{uri:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/307190732_173818658497740_5382873762848506753_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=f7GPflrl2E4AX8BzE-l&_nc_ht=scontent.fdac140-1.fna&oh=00_AT9OR9JkDwHF-8WWFIUwfxTxFm3eZCghsalf_Aa9ZwBfCA&oe=6347C9A1"}}
                        />
                    </LinearGradient>
                </View>
                <View style={[styles.evePoints,{marginBottom:20}]}>
                    <LinearGradient colors={['#023050', '#212022' ]} start={{x: 0.0, y: 0.7}} end={{x: 0.5, y: 1.0}} style={styles.backLinearGradient}>
                        <View style={styles.pntTxt}>
                            <Text style={styles.pntHead}>Whatever</Text>
                            <Text style={styles.pntDesc}>
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be
                            </Text>
                            <View style={styles.btnStyle}>
                                <Button title="Learn More"></Button>
                            </View>   
                        </View>
                        <Image
                            style={styles.imgStyle}
                            source={{uri:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/279445798_156323473537719_4451012393238925662_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=ro5K1-jtKLcAX-bupmN&tn=FtGUgm2mD6coLSGF&_nc_ht=scontent.fdac140-1.fna&oh=00_AT_3m92wKdNhpb9vBD4vLTxnacKHRrGI8Y9TJ2SzPnol8g&oe=63480372"}}
                        />
                    </LinearGradient>
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
          
    },
    title:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:5,
        marginTop:10,
    },
    evePoints:{
        width:'84%',
        marginHorizontal: '8%',  
        marginTop:30,
    },
    backLinearGradient:{
        borderColor:'white',
        borderWidth:0.7,
        borderRadius:15,
        /*shadowColor:'white',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.5,
        shadowRadius:8
        elevation:8,*/
    },
    pntTxt:{
        width:'86%',
        marginHorizontal: '7%',
        marginTop:30,
        
    },
    pntHead:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
    },
    pntDesc:{
        color:'white',
        fontSize:16,
        marginBottom:10,
    },
    btnStyle:{
        width:'50%',
        marginBottom:25,
    },
    imgStyle:{
        width:'86%',
        height:undefined,
        aspectRatio:1,
        marginHorizontal: '7%',
        marginBottom:25,
        borderRadius:7,
    },
})

export default Progrm

