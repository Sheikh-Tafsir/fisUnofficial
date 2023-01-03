import { SafeAreaView,ScrollView,Dimensions,PixelRatio,TouchableOpacity, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import React from 'react';
import Menu from '../component/Menuadm';
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
const Homesadm = () => {
  return (
    <ImageBackground source={require("../images/menuback.jpg")} resizeMode="cover" style={styles.image}>
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}> 
        <View style={styles.menudesc}>
          <Text style={styles.header}>Xplore</Text>
          <Text style={styles.header}>The greatness</Text>
          <Text style={styles.headdesc}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</Text>
          <Image
                style={styles.imgStyle}
                source={require("../images/1.png")}
                //source={{uri:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/257159197_106607948509272_5433450592906532420_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lUIkMVAp--0AX_wJwd1&_nc_ht=scontent.fdac140-1.fna&oh=00_AT_0IVq5ciLmP9rfl6YefkmmUop90C2241hURNE5ZQ03IQ&oe=6346C60A"}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  </ImageBackground>
  )
}

const styles = StyleSheet.create({
    image:{
      height:'100%',
      
    },
    menudesc:{
      textAlign:'center',
      height:'80%',
      paddingTop:normalize(40),
      marginBottom:normalize(20),
    },
    header:{
      textAlign:'center',
      color:'white',
      fontSize:normalize(30),
      textTransform:'uppercase',
      fontWeight:'bold',
    },
    headdesc:{
      fontSize:normalize(15),
      color:'rgb(150,150,150)',
      textAlign:'center',
      width:'90%',
      marginHorizontal:'5%',
      marginTop:normalize(20),
    },
    imgStyle:{
      height:undefined,
      width:'80%',
      aspectRatio:1,
      borderRadius:200,
      marginHorizontal:'10%',
      marginTop:normalize(30),
    },
    menu:{
      marginTop:normalize(-70),
      zIndex:100,
    }
})
export default Homesadm