import { Dimensions,PixelRatio, TouchableOpacity, StyleSheet, Text, View, ImageBackground, Image, Linking, Button } from 'react-native'
import React from 'react'
import Menu from '../component/Menu';
import {LinearGradient} from 'expo-linear-gradient';

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

const Contacts = () => {
  
  return (
    <View>
      <ImageBackground source={{uri: "https://iphoneswallpapers.com/wp-content/uploads/2022/08/Astronomy-iPhone-Wallpaper-HD.jpg" }} resizeMode="cover" style={styles.backImage}>
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
        
        <View style={styles.footerLogo}>
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
        </View>

      </LinearGradient>
      <View style={[styles.menu,{transform: [
                            { translateY: normalize(-27)},
                        ],  }]}>
            <Menu ></Menu> 
      </View>
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  backImage:{
    height:"100%",
  },
  backLinearGradient:{
    height:'90%',
    width:'90%',
    marginHorizontal:'5%',
    marginTop:'8%',
    borderColor:'white',
    borderWidth:0.7,
    borderRadius:15,
  },
  descPart:{
    height:'80%',
    marginTop:'6%',
    marginBottom:'9%',
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
    marginTop:10,
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
    marginTop:30,
    marginBottom:'1.5%',
  },
  pointDesc:{
    fontSize:16,
    color:'rgb(230,230,230)',
    width:'80%',
    marginBottom:'1%',
  },
  pointMain:{
    color:'white',
    fontSize:normalize(15),
    width:'80%', 
  },
  footerLogo:{
    flex:1,
    flexDirection:'row',
    width:'50%',
    marginHorizontal:'25%',
    height:'5%',
  },
  logoStyle:{
    width:35,
    height:undefined,
    aspectRatio:1,
    resizeMode : 'stretch',
    borderRadius:50,
    marginRight:15,
  },


})
export default Contacts