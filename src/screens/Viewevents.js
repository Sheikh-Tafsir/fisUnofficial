import React,{useState, useEffect} from "react";
import { addDoc, collection, doc, getDoc, setDoc,getDocs,updateDoc } from "firebase/firestore";
import { RefreshControl, StatusBar, Dimensions,PixelRatio,SafeAreaView, ScrollView, TouchableOpacity,TextInput, View, StyleSheet, Text, Image, Button, Pressable, ImageBackground} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { firebase } from '../component/Config';
import { db } from "../component/Config";
import { getFirestore } from 'firebase/firestore'
import AsyncStorage, { AsyncStorageHook } from "@react-native-async-storage/async-storage";
import AnimatedLoader from "react-native-animated-loader";
import { useIsFocused } from '@react-navigation/native';


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
const { width, height } = Dimensions.get('window');
const responsiveWidth = (value) => {
    const widthPercentage = (value / 375) * 100; // 375 is the standard width for iPhone 11
    const pixelWidth = (widthPercentage * width) / 100;
    return pixelWidth;
};
  
const responsiveHeight = (value) => {
    const heightPercentage = (value / 812) * 100; // 812 is the standard height for iPhone 11
    const pixelHeight = (heightPercentage * height) / 100;
    return pixelHeight;
};

const Viewevents = () => {
    
    const navigation=useNavigation();
    const db = getFirestore();
    const [userDoc, setUserDoc]=useState(null);
    const [eventName,setEventName]=useState(null);
    const [asyncVal,setAsyncVal]=useState('');
    const [employeeList,setEmployeeList] = useState([]);
    const [visible, setVisible] = useState(false);
    const [userinfo,onChangeUserinfo] = useState([]);
    const [respf, onChangeRespf] = useState();
    const isFocused = useIsFocused();

    const joinEvent = (eventclub,eventname,eventdate,eventdec,eventimg,eventmem) => {

        AsyncStorage.getItem('any_key_here')
        .then((value)=>{
            let users = [];
            //let eventNotification= [];
            getDocs(collection(db,"eventparticipants")).then(docSnap=>{
                let userEventName=value+eventname+eventclub;
                docSnap.forEach((doc)=>{
                    if(doc.id == userEventName){
                        users.push({ ...doc.data(),id:doc.id}); 
                    }
                });
                
                //console.log(users[0].password);
                //console.log(pass+"b");
                //alert(users.length);
                
                if(users.length >= 1){
                    onChangeRespf("Already participation taken");
                    navigation.navigate("Viewevents");
                }
                else{
                    setAsyncVal(value);
                    eventmem.push(value);
                    
                    //set data in events table
                    setDoc(doc(db,"events",eventname),{
                        eventclub:eventclub,
                        eventname:eventname,
                        eventdate:eventdate,
                        eventdec:eventdec,
                        eventimg:eventimg,
                        eventmem:eventmem,
                    }).then(()=>{
                        console.log('event data submitted in events');
                    }).catch((error) =>{
                        console.log(error);
                    });

                    //set data in eventparticipants table
                    setDoc(doc(db,"eventparticipants",value+eventname+eventclub),{
                        eventclub:eventclub,
                        eventname:eventname,
                        username:value,
                    }).then(()=>{
                        console.log('event data submitted in eventparticipants');
                    }).catch((error) =>{
                        console.log(error);
                    });

                    //set data in eventnotifications table
                    
                    getDocs(collection(db,"eventnotifications")).then(docSnap=>{
                        var eventsnotifiy=[];
                        docSnap.forEach((doc)=>{
                            if(doc.id == value){
                                eventsnotifiy.push( ...doc.data().eventsnotifiy); 
                            }
                        });
                        
                        eventsnotifiy.push({eventname,eventdate});
                        setDoc(doc(db,"eventnotifications",value),{
                            username:value,
                            eventsnotifiy:eventsnotifiy,
                        }).then(()=>{
                            console.log('event data submitted in eventnotification');
                        }).catch((error) =>{
                            console.log(error);
                        });
                    });

                    

                    navigation.navigate("Vieweventsresp");
                }
            });
        })
    };

    useEffect(() => {
        if (isFocused) {
            // refresh the page here
        }
        onChangeRespf("");
        Read();
    }, [isFocused]);

    const Read = () => {
        let users = [];
            getDocs(collection(db,"events")).then(docSnap=>{
                
                docSnap.forEach((doc)=>{
                    var dateString = doc.data().eventdate;
                    var date = new Date(dateString);
                    var today = new Date();
                    //console.log(date);
                    if(date<=today){
                        //do nothing
                    }
                    else{
                        users.push({ ...doc.data(),id:doc.id});
                    }
                });
                //console.log("document data:", users[0].username);
                setEmployeeList([...users]);
                //func(users);
            });
    };  
  return (
    <ImageBackground source={{uri:"https://img.freepik.com/premium-photo/beautiful-moon-galaxy-with-wolf_342788-224.jpg?w=2000" }} resizeMode="cover" style={styles.backImage}>
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

                {/* <StatusBar
                        animated={true}
                        backgroundColor="#0b0f1e"
                        barStyle="dark-content"
                    /> */}
                <Text style={styles.title}>Join Events</Text>
                <View style={styles.subContainer}>
                {
                    employeeList.map((curElem,id)=>{
                        return (
                            <View key={id} style={styles.evePoints}>
                                <LinearGradient colors={['#317cce','#47abbf']} start={{x: 0.0, y: 0.5}} end={{x: 0.5, y: 1.0}} style={styles.backLinearGradient}>
                                    <View  style={styles.pntTxt}>
                                        <Text style={styles.pntClub}>Club: {curElem.eventclub}</Text>
                                        <Text style={styles.pntHead}>Name: {curElem.eventname}</Text>
                                        <Text style={styles.pntDate}>Date: {curElem.eventdate}</Text>
                                        <Text style={styles.pntDesc}>Description: {curElem.eventdec}</Text>
                                        <Image
                                            style={styles.imgStyle}
                                            source={{uri:curElem.eventimg}}
                                        />
                                        <Text style={styles.submitresp}>{respf}</Text>
                                        <TouchableOpacity style={styles.joinBut} onPress={()=>joinEvent(curElem.eventclub, curElem.eventname, curElem.eventdate, curElem.eventdec, curElem.eventimg, curElem.eventmem)}>
                                            <Text style={styles.joinButText}>Join Now</Text>
                                        </TouchableOpacity>
                                    </View>
                                    
                                    
                                </LinearGradient>
                            </View>
                            
                        )
                    })
                }
                </View>

            
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
        fontSize:responsiveHeight(40),
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:5,
        marginTop:responsiveHeight(15),
        marginBottom:responsiveHeight(15),
    },
    subContainer:{
        // marginBottom:responsiveHeight(0),
        width:'84%',
        marginHorizontal:'8%',
    },

    backLinearGradient:{
        borderColor:'white',
        borderWidth:0.7,
        borderRadius:15,
        height:responsiveHeight(660),
        width:'100%',
        marginBottom:responsiveHeight(30),
    },
    /*evePoints:{
        width:'84%',
        marginHorizontal: '8%',  
        
    },*/
    pntTxt:{
        width:'86%',
        marginHorizontal: '7%',
        marginTop:responsiveHeight(30),
        
    },
    pntClub:{
        color:'white',
        fontSize:responsiveHeight(18),
        fontWeight:'bold',
        marginBottom:responsiveHeight(10),
    },
    pntHead:{
        color:'white',
        fontSize:responsiveHeight(20),
        fontWeight:'bold',
        marginBottom:responsiveHeight(10),
    },
    pntDate:{
        color:'white',
        fontSize:18,
        marginBottom:responsiveHeight(10),
    },
    pntDesc:{
        color:'white',
        fontSize:16,
        height:responsiveHeight(180),
        marginBottom:responsiveHeight(20),
        // borderWidth:1,
        // borderColor:'white',
    },
    imgStyle:{
        width:'94%',
        height:undefined,
        aspectRatio:1.25,
        marginHorizontal: '3%',
        marginBottom:responsiveHeight(10),
        borderRadius:7,
        // borderWidth:1,
        // borderColor:'white',
    },
    submitresp:{
        textAlign:'center',
        color:'red',
        fontSize:15,
        marginBottom:responsiveHeight(10),
    },
    joinBut:{
        color:'#023050',
        backgroundColor:'white',
        height:'6%',
        borderRadius:5,
        marginBottom:'6%',
        width:'90%',
        marginHorizontal:'5%',
    },
    joinButText:{
        color:'#023050',
        fontSize:responsiveHeight(17),
        fontWeight:'bold',
        textAlign:'center',
        lineHeight:responsiveHeight(32),
        
    },
    /*lottie: {
        width: 100,
        height: 100,
        
    },
    lottieStyle:{
        
    },*/
});

export default Viewevents