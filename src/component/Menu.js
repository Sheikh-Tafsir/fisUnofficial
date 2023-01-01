import { useNavigation } from "@react-navigation/native";
import React,{useState} from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { withSafeAreaInsets } from "react-native-safe-area-context";

const Menu = () => {
    const navigation=useNavigation();
    return(
        <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={()=>navigation.navigate("Homes")}>
                    <Image
                        style={styles.iconStyle}
                        source={{uri:"https://img.icons8.com/metro/344/home.png"}}
                    />
                    {/*<Text style={styles.textStyle}>Course</Text>*/}
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={()=>navigation.navigate("Fetc")}>
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
        width:'90%',
        flexDirection:"row",
        justifyContent:"space-evenly",
        backgroundColor:'rgba(255,255,255,0.7)',
        height:65,
        marginLeft:20,
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
        width:40,
        height:undefined,
        aspectRatio:1,
    },
});
export default Menu;
