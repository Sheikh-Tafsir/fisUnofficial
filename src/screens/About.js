import { SafeAreaView,ScrollView, Dimensions,PixelRatio, TouchableOpacity, StyleSheet, Text, View, ImageBackground, Image, Linking, Button } from 'react-native'
import React from 'react'
import Menu from '../component/Menu';
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage, { AsyncStorageHook } from "@react-native-async-storage/async-storage";

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

const About = () => {
  const navigation=useNavigation();
  const LogoutFunc = ()=>{
    AsyncStorage.setItem('any_key_here','');
    navigation.navigate("Home");
  }
  
  return (
    <ImageBackground source={require("../images/menuback.jpg")} resizeMode="cover" style={styles.backImage}>
      <SafeAreaView style={styles.container}>

        <ScrollView style={styles.scrollView}> 
          <View style={styles.mainContainer}>
            <LinearGradient colors={['#023050', '#212022' ]} start={{x: 0.0, y: 0.7}} end={{x: 0.5, y: 1.0}} style={styles.backLinearGradient}>
              <View style={styles.descPart}>
                <Text style={styles.title}>Get in touch</Text>
                <Text  style={styles.titleDesc}>We'd love to hear from you. Our team is always here to help</Text>
                
                <View style={styles.contPoints}>
                  <Text style={styles.pointHead}>Follow us</Text>
                  <Text style={styles.pointDesc}>You can follow us here</Text>
                  <Text style={styles.pointMain} onPress={() => Linking.openURL('https://twitter.com/al_iut')}>Twitter</Text>
                  <Text style={styles.pointMain} onPress={() => Linking.openURL('https://www.instagram.com/iut_interstellar_society/?fbclid=IwAR0-E3FFs0NCNpl5JQsDGGLNY4wNl2V_FLblPzmCyfnXu5YKgg9rkWrrgMs')}>Instagram</Text>
                </View>
                <View style={styles.contPoints}>
                  <Text style={styles.pointHead}>Our Location</Text>
                  <Text style={styles.pointDesc}>Come and greet us</Text>
                  <Text style={styles.pointMain} >Islamic University of Technology, Board Bazar Road, Gazipur, Bangladesh, 1704</Text>
                </View>
                <View style={styles.contPoints}>
                  <Text style={styles.pointHead}>Contact us</Text>
                  <Text style={styles.pointDesc}>We are always open</Text>
                  <Text  style={styles.pointMain} onPress={() => Linking.openURL('https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvqKMHmvPNNtQzcFXVtrtJBDzscxhJhXMxJMgzLSslBDFmPkXrPNhHXGvRSjgvgXlbLTsB')}>iutfis2061@gmail.com</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => LogoutFunc()} style={styles.logoutBut}>
                  <Text style={styles.logoutButText}>Log out</Text>
              </TouchableOpacity>
        
              {/*<View style={styles.footerLogo}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/IUTFIS')}>
                <Image
                    style={styles.logoStyle}
                    source={{uri:"https://png.pngtree.com/template/20190716/ourmid/pngtree-facebook-black-logo-free-png-image_227915.jpg"}}
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/iut_interstellar_society/?fbclid=IwAR0-E3FFs0NCNpl5JQsDGGLNY4wNl2V_FLblPzmCyfnXu5YKgg9rkWrrgMs')}>
                  <Image
                      style={styles.logoStyle}
                      source={{uri:"https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584911.png"}}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/al_iut')}>
                  <Image
                      style={styles.logoStyle}
                      source={{uri:"https://png.pngtree.com/element_our/sm/20180626/sm_5b3222809f06e.jpg"}}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvqKMHmvPNNtQzcFXVtrtJBDzscxhJhXMxJMgzLSslBDFmPkXrPNhHXGvRSjgvgXlbLTsB')}>
                  <Image
                      style={styles.logoStyle}
                      source={{uri:"https://png.pngtree.com/png-vector/20190120/ourmid/pngtree-email-vector-icon-png-image_470655.jpg"}}
                    />
                </TouchableOpacity>
              </View>*/}

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
  container:{
    height:'100%',
  },
  scrollView:{
    height:'100%',
  },
  mainContainer:{
    width:'100%',
    height:'100%',  
  },
  backLinearGradient:{
    height:normalize(480),
    width:'90%',
    marginHorizontal:'5%',
    marginTop:normalize(23),
    borderColor:'white',
    borderWidth:normalize(0.7),
    borderRadius:15,
    marginBottom:normalize(20),
  },
  descPart:{
    height:normalize(390),
    marginTop:normalize(17),
    marginBottom:normalize(15),
  },
  title:{
    color:'white',
    fontSize:normalize(30),
    marginHorizontal:'7%',
    fontWeight:'bold',
  },
  titleDesc:{
    color:'white',
    marginHorizontal:'7%',
    marginTop:normalize(10),
    fontSize:normalize(15),
    width:'80%',
  },
  contPoints:{
    marginHorizontal:'7%',
  },
  pointHead:{
    fontWeight:'bold',
    fontSize:normalize(19),
    color:'white',
    marginTop:normalize(26),
    marginBottom:'1.5%',
  },
  pointDesc:{
    fontSize:16,
    color:'rgb(230,230,230)',
    width:'80%',
    marginBottom:normalize(2),
  },
  pointMain:{
    color:'white',
    fontSize:normalize(15),
    width:'80%', 
  },
  /*footerLogo:{
    flex:1,
    flexDirection:'row',
    width:'50%',
    marginHorizontal:'25%',
    height:normalize(5),
  },
  logoStyle:{
    width:35,
    height:undefined,
    aspectRatio:1,
    resizeMode : 'stretch',
    borderRadius:50,
    marginRight:15,
  },*/
  logoutBut:{
    backgroundColor:'white',
    width:'70%',
    height:normalize(25),
    marginHorizontal:'15%',
    marginTop:normalize(20),
  },
  logoutButText:{
    textAlign:'center',
    color:'#023050',
    fontSize:20,
    fontWeight:'bold',
    lineHeight:normalize(24),
  },
  menu:{
    marginTop:normalize(-70),
    zIndex:100,
  }


})
export default About

