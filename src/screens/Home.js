import {  TouchableOpacity, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import {React, Children, useState } from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import Menu from '../component/Menu';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import {BlurView} from '@react-native-community/blur';
import AsyncStorage, { AsyncStorageHook } from "@react-native-async-storage/async-storage";

const Home = (props) => {
    const description="In publishing and graphic design, Lore ipsum is a placeholder text commonly used to demonstrate ";
    const navigation=useNavigation();
    const [asyncVal,setAsyncVal]=useState('');
    const checkNav = ()=>{
        AsyncStorage.getItem('any_key_here')
        .then((value)=>{
            setAsyncVal(value);
            //alert(value);
            if(value === null){
                navigation.navigate("Login");
            }
            else if(value === ''){
                navigation.navigate("Login");
            }
            else{
                navigation.navigate("Tub");
            }
        })
    };

    return (
    <View style={styles.mainContainer}>
        <ImageBackground source={require("../images/homeback.jpg")} resizeMode="cover" style={styles.image}>
        {/*<LinearGradient colors={['rgb(27,26,31)', 'rgb(36,55,35)','rgb(27,26,31)' ]} style={styles.linearGradient}>*/}
            <View style={styles.homeTop}>
                <View style={styles.headerImageVw}>
                    <Image
                        style={[styles.headerImage,{transform: [
                            
                            { translateX: 75},
                            { translateY: 40},
                            { rotateZ: '25deg'},
                            
                        ],  }]}
                        source={require("../images/3.jpg")}
                        //source={{uri:"https://w0.peakpx.com/wallpaper/282/480/HD-wallpaper-black-panther-avengers-black-panther-dark-dhrubo2002-hero-marvel-theme.jpg"}}  
                        //source={{uri:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/271985824_131197406050326_8841516075399285771_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=z1SnARuSv68AX83N8FG&_nc_ht=scontent.fdac140-1.fna&oh=00_AT_qlefCedWfbcjXABci-IC1ikFjLD24oA0GN-TTvQ83nA&oe=6345F8D5"}} 
                    />
                    <Image
                        style={styles.headerImage}
                        source={require("../images/2.jpg")}
                        //source={{uri:"https://i.pinimg.com/736x/ef/a9/39/efa9393c1b466b04b82a910a0a6a3b88.jpg"}}
                        //source={{uri:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/257159197_106607948509272_5433450592906532420_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lUIkMVAp--0AX_wJwd1&_nc_ht=scontent.fdac140-1.fna&oh=00_AT_0IVq5ciLmP9rfl6YefkmmUop90C2241hURNE5ZQ03IQ&oe=6346C60A"}}
                    />
                    <Image
                        style={[styles.headerImage,{transform: [
                            
                            { translateX: -75},
                            { translateY: 60},
                            { rotateZ: '-25deg'},
                            
                        ],  }]}
                        source={require("../images/1.png")}
                        //source={{uri:"https://i.pinimg.com/originals/b7/cd/e9/b7cde96479855eea38846f6e8a7c3930.jpg"}}  
                        //source={{uri:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/277772041_150419630794770_3841383816995013476_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=lsID571Y4gwAX-09yBc&_nc_ht=scontent.fdac140-1.fna&oh=00_AT_mhuYC7iUTK3ud-gfhqu8aRnUjxBpJMn7d_H73gx8oEA&oe=63462DBB"}}
                        
                    />
                </View>
                <View style={styles.homeDesc}>
                    <Text style={styles.mainHeader}>Look up to</Text>
                    <Text style={[styles.mainHeader,{color:'red',textShadowColor:'white',textShadowOpacity:0.5,textShadowRadius:10,textShadowOffset:{width:0,height:0},marginTop:0}]}>{props.channelName}</Text>
                    <Text style={styles.mainHeader}>With us</Text>
                </View>
                
                {/*<Text style={styles.paraStyle}>{description}</Text>*/}
                <View>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        /*onPress={()=>navigation.navigate("Homes")}>*/
                        onPress={()=>checkNav()}>
                        <Text style={styles.startTextStyle}>Start</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
        {/*LinearGradient>*/}      
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        height:'100%',
        display:'flex',
        textAlign:'center',
        backgroundColor:"white",
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    image:{
        flex: 1,
        justifyContent: "center"
    },
    homeTop:{
        padding:30,
        marginTop:50,
    },
    headerImageVw:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerImage:{
        position: 'absolute',
        top:0,
        height: undefined, 
        width: "55%", 
        resizeMode: 'contain',
        aspectRatio:1,
        borderRadius:20,
        borderColor:'white',
        borderWidth:0.7,
    },
    homeDesc:{
        marginTop:'100%',
        marginBottom:'20%',
    },
    mainHeader:{
        fontSize:40,
        textTransform:'uppercase',
        textAlign:'center',
        position:'relative',
        fontWeight:'bold',
        color:'white',        
    },
    
    paraStyle:{
        fontSize:20,
        color:'#7d7d7d',
        textAlign:'left',
        marginTop:30,
        lineHeight:26,
    },
    startTextStyle:{
        height:70,
        //backgroundColor:'rgb(36,55,35)',
        backgroundColor:'rgba(255,255,255,0.3)',
        borderColor:'white',
        textAlign:'center',
        borderWidth:1,
        borderRadius:50,
        shadowColor:'grey',
        shadowOffset:{height:0,width:0},
        shadowOpacity:0.5,
        shadowRadius:20,
        fontWeight:'bold',
        fontSize:20,
        color:'white',
        textShadowColor:'grey',
        textShadowOpacity:1,
        textShadowRadius:10,textShadowOffset:{width:0,height:0},
        lineHeight:65,
    },
    
})
export default Home