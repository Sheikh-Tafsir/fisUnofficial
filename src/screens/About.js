import { SafeAreaView,ScrollView, Dimensions,PixelRatio, TouchableOpacity, StyleSheet, Text, View, ImageBackground, Image, Linking, Button, StatusBar } from 'react-native'
import {React,useState,useEffect} from 'react'
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
  const [username, setUsername] = useState();
  const navigation=useNavigation();
  
  const LogoutFunc = ()=>{
    AsyncStorage.setItem('any_key_here','');
    navigation.navigate("Home");
  }
  const findUserName = () =>{
    AsyncStorage.getItem('any_key_here')
        .then((value)=>{
          setUsername(value);  
        })
  };
  useEffect(() => {
    findUserName();
  }, []);
  
  return (
    <LinearGradient colors={['#0b0f1e', '#212022' ]} start={{x: 0.0, y: 0.7}} end={{x: 0.5, y: 1.0}} style={styles.backLinearGradient}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}> 
          <StatusBar
            animated={true}
            backgroundColor="#0b0f1e"
            barStyle="dark-content"
          />
          <View style={styles.mainContainer}>
            <Text style={styles.titleUserName}>Hi {username}</Text>
            <Text style={styles.titleUserText}>Have a great day</Text>
              
              <View style={styles.devContainer}>
                <Text style={styles.devContainerTitle}>Mobile App design Team</Text>
                <Text style={styles.devContainerSubTitle}>Tafsir, Rifa & Fateen</Text>
                <View style={styles.devSubContainer}>
                  <Image style={styles.devImgStyle}
                    source={{uri:"https://avatars.githubusercontent.com/u/83116065?v=4"}}
                    resizeMode="contain"  
                  />
                  <Image style={styles.devImgStyle}
                    source={require("../images/m2.jpg")}
                    resizeMode="contain"  
                  />
                  <Image style={styles.devImgStyle}
                    source={{uri:"https://avatars.githubusercontent.com/u/84742960?v=4"}}
                    resizeMode="contain"  
                  />
                </View>
              </View>
              
              <View style={styles.contactsContainer}>
                <View style={styles.descPart}>
                  <Text style={styles.contTitle}>Get in touch</Text>
                  <Text  style={styles.contDesc}>We'd love to hear from you. Our team is always here to help</Text>
                </View>

          
                <View style={styles.footerLogo}>
                  <View style={styles.footerLogoSub}>
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
                  </View>
                  <View style={styles.footerLogoSub}>
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
                  </View>
                </View>
              </View>
              <View style={styles.contactsContainer}>
                <View style={styles.logoutButCont}>
                  <TouchableOpacity onPress={() => LogoutFunc()} style={styles.logoutBut}>
                    <Image
                          style={styles.logooutButImg}
                          source={{uri:"https://thumbs.dreamstime.com/b/logout-isolated-special-cyan-blue-round-button-abstract-illustration-logout-special-cyan-blue-round-button-103957079.jpg"}}
                        />
                  </TouchableOpacity>
                </View>
              </View>
              

          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}


const styles = StyleSheet.create({
  backLinearGradient:{
    height:'100%',
    width:'100%',
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
  titleUserName:{
    color:'white',
    fontSize:normalize(25),
    fontWeight:'bold',
    marginHorizontal:'5%',
    marginTop:normalize(25),
  },
  titleUserText:{
    color:'white',
    fontSize:normalize(16),
    fontWeight:'bold',
    marginHorizontal:'5%',
    marginBottom:normalize(20),
  },

  devContainer:{
    height:normalize(120),
    width:'90%',
    marginHorizontal:'5%',
    backgroundColor:"#fdab00",
    borderRadius:15,
    paddingHorizontal:'5%',
    marginBottom:'3.5%',
    borderWidth:0.5,
    borderColor:'white',
  },
  devContainerTitle:{
    color:'white',
    fontSize:normalize(17),
    marginTop:normalize(15),
    marginBottom:normalize(4),
    fontWeight:'bold',
    
  },  
  devContainerSubTitle:{
    color:'white',
    fontSize:normalize(12),
    marginBottom:normalize(12),
  },
  devSubContainer:{
    flex: 1,
    flexDirection:'row'
  },
  devImgStyle:{
    width:'15%',
    aspectRatio:1,
    borderRadius:50,
    marginRight:normalize(2),
    borderWidth:1.2,
    borderColor:'white',
  },

  contactsContainer:{
    flex:1,
    flexDirection:'row',
    marginHorizontal:'5%',
    marginVertical:'3%',
    
    
  },
  descPart:{
    height:normalize(130),
    width:'47%',
    backgroundColor:"#ff4869",
    borderRadius:15,
    paddingHorizontal:'5%',
    marginRight:'5%',
    paddingTop:'5%',
    borderWidth:0.5,
    borderColor:'white',
  },
  contTitle:{
    color:'white',
    fontSize:normalize(17),
    marginBottom:normalize(10),
    fontWeight:'bold',
    
  },
  contDesc:{
    color:'white',
    fontSize:normalize(13),
    lineHeight:normalize(16),
    
  },

  footerLogo:{
    height:normalize(130),
    width:'47%',
    backgroundColor:"#02bade",
    borderRadius:15,
    paddingHorizontal:'5%',
    paddingTop:'5%',
    borderWidth:0.5,
    borderColor:'white',
  },
  footerLogoSub:{
    flex:1,
    flexDirection:'row',

  },
  logoStyle:{
    width:'62%',
    height:undefined,
    aspectRatio:1,
    resizeMode : 'contain',
    borderRadius:10,
  },

  logoutButCont:{
    height:normalize(130),
    width:'48%',
    backgroundColor:"#8364f9",
    borderRadius:15,
    paddingHorizontal:'5%',
    paddingVertical:'4%',
    marginRight:'5%',
    borderWidth:0.5,
    borderColor:'white',

  },
  logoutBut:{
    width:'100%',
    aspectRatio:1,
 
  },
  logooutButImg:{
    width:'97%',
    aspectRatio:1,
    borderRadius:50,
    marginTop:'2%',
  },

  menu:{
    marginTop:normalize(-70),
    zIndex:100,
  }


})
export default About

