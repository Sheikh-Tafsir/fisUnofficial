import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView,Dimensions,PixelRatio, SafeAreaView, ScrollView, TouchableOpacity,TextInput, View, StyleSheet, Text, Image, Button, Pressable, ImageBackground, Platform } from "react-native";
import {React,useState, useEffect} from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { withSafeAreaInsets } from "react-native-safe-area-context";

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

const Menuadm = () => {
    const navigation=useNavigation();
    return(
        <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={()=>navigation.navigate("Homesadm")}>
                    <Image
                        style={styles.iconStyle}
                        source={{uri:"https://img.icons8.com/metro/344/home.png"}}
                    />
                    {/*<Text style={styles.textStyle}>Course</Text>*/}
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={()=>navigation.navigate("Pushc")}>
                    <Image
                        style={styles.iconStyle}
                        source={{uri:"https://img.icons8.com/ios-filled/344/trophy.png"}}
                    />
                    {/*<Text style={styles.textStyle}>Contacts</Text>*/}
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={()=>navigation.navigate("About")}>
                    <Image
                        style={styles.iconStyle}
                        source={{uri:"https://img.icons8.com/pastel-glyph/344/person-male--v3.png"}}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={()=>navigation.navigate("Gallery")}>
                    <Image
                        style={styles.iconStyle}
                        source={{uri:"https://i.ibb.co/RNkCRyQ/pngwing-com.png"}}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={()=>navigation.navigate("Team")}>
                    <Image
                        style={styles.iconStyle}
                        source={{uri:"https://img.icons8.com/external-glyph-geotatah/344/external-company-conflict-resolution-glyph-glyph-geotatah.png"}}
                    />
                </TouchableOpacity>
                
        </View>
    );
}

const styles = StyleSheet.create({
    menuContainer:{
        width:'84%',
        flexDirection:"row",
        justifyContent:"space-evenly",
        backgroundColor:'rgba(255,255,255,0.7)',
        height:normalize(50),
        marginHorizontal:'8%',
        borderRadius:40,
        borderColor:'white',
        borderWidth:1,
    },

    textStyle:{
        textTransform:"uppercase",
    },
    buttonStyle:{
        
        justifyContent:"space-evenly",
    },
    iconStyle:{
        width:normalize(34),
        height:undefined,
        aspectRatio:1,
    },

});
export default Menuadm;