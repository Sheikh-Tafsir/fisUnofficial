import React,{useState, useEffect} from "react";
import { addDoc, collection, doc, getDoc, setDoc,getDocs,updateDoc } from "firebase/firestore";
import { StatusBar } from "react-native";
import { Dimensions,PixelRatio,SafeAreaView, ScrollView, TouchableOpacity,TextInput, View, StyleSheet, Text, Image, Button, Pressable, ImageBackground } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { firebase } from '../component/Config';
import { db } from "../component/Config";
import { getFirestore } from 'firebase/firestore'
import AsyncStorage, { AsyncStorageHook } from "@react-native-async-storage/async-storage";
import AnimatedLoader from "react-native-animated-loader";

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

const Vieweventpartadm = () => {

    const navigation=useNavigation();
    const db = getFirestore();
    const [userDoc, setUserDoc]=useState(null);
    const [eventName,setEventName]=useState(null);
    const [asyncVal,setAsyncVal]=useState('');
    const [employeeList,setEmployeeList] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setInterval(() => {
        setVisible(visible);
        }, 4000);
        Read();
    }, []);

    const Read = () => {
        let users = [];
            getDocs(collection(db,"events")).then(docSnap=>{
                
                docSnap.forEach((doc)=>{
                    users.push({ ...doc.data(),id:doc.id}); 
                });
                //console.log("document data:", users[0].username);
                setEmployeeList([...users]);
                //func(users);
            });
    }; 
  return (
    <ImageBackground source={{uri: "https://iphoneswallpapers.com/wp-content/uploads/2022/08/Astronomy-iPhone-Wallpaper-HD.jpg" }} resizeMode="cover" style={styles.backImage}>
        <AnimatedLoader
            visible={visible}
            overlayColor="rgba(255,255,255,0.75)"
            animationStyle={styles.lottie}
            style={styles.lottieStyle}
            speed={1}>
            <Text>Please Wait...</Text>
        </AnimatedLoader>
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollview}> 
            <Text style={styles.title}>Join Events</Text>
                {
                    employeeList.map((curElem,id)=>{
                        return (
                            <View key={id} style={styles.evePoints}>
                                <LinearGradient colors={['#023050', '#212022' ]} start={{x: 0.0, y: 0.7}} end={{x: 0.5, y: 1.0}} style={styles.backLinearGradient}>
                                    <View  style={styles.pntTxt}>
                                        <Text style={styles.pntHead}>Name: {curElem.eventname}</Text>
                                        <Text style={styles.pntDate}>Date: {curElem.eventdate}</Text>
                                        <Text style={styles.pntDesc}>Description: {curElem.eventdec}</Text>
                                        <Image
                                            style={styles.imgStyle}
                                            source={{uri:(curElem.eventimg)}}
                                        />
                                        <Text style={styles.pntMem}>Participant No: {curElem.eventmem.length}</Text>
                                        
                                    </View>
                                    
                                    
                                </LinearGradient>
                            </View>
                            
                        )
                    })
                }

            
            </ScrollView>
        </SafeAreaView>
    </ImageBackground>

  );
}
const styles = StyleSheet.create({
    backImage:{
        height:"100%",
    },

    container:{
        height:"100%",
    },
    scrollview:{
        height:'100%',
    },
    title:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:5,
        marginTop:normalize(15),
        marginBottom:normalize(0),
    },

    backLinearGradient:{
        borderColor:'white',
        borderWidth:0.7,
        borderRadius:15,
    },
    evePoints:{
        width:'84%',
        marginHorizontal: '8%',  
        marginVertical:'6%',
        
    },
    pntTxt:{
        width:'86%',
        marginHorizontal: '7%',
        marginTop:30,
        
    },
    pntHead:{
        color:'white',
        fontSize:normalize(20),
        fontWeight:'bold',
        marginBottom:normalize(10),
    },
    pntDate:{
        color:'white',
        fontSize:18,
        marginBottom:normalize(10),
    },
    pntDesc:{
        color:'white',
        fontSize:16,
        marginBottom:normalize(20),
    },
    
    imgStyle:{
        width:'94%',
        height:undefined,
        aspectRatio:1.3,
        marginHorizontal: '3%',
        marginBottom:25,
        borderRadius:7,
    },
    pntMem:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        marginBottom:normalize(20),
    },
    lottie: {
        width: 100,
        height: 100,
        
    },
    lottieStyle:{
        
    },
});
export default Vieweventpartadm