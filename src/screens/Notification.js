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
const Notification = () => {

    const isFocused = useIsFocused();
    const navigation=useNavigation();
    const db = getFirestore();
    const [employeeList,setEmployeeList] = useState([]);
    const [username,onChaneusername] = useState();
    const [refreshing, setRefreshing] = useState(false);
    

    const findUserName = () =>{
        AsyncStorage.getItem('any_key_here')
            .then((value)=>{
                onChaneusername(value);  
        })
        
    };
    const Read = () => {
        let users = [];
            getDocs(collection(db,"eventnotifications")).then(docSnap=>{
                docSnap.forEach((doc)=>{
                    var dateString = doc.data().eventsnotifiy.eventdate;
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
                
                setEmployeeList([...users]);
            });
    };  

    useEffect(() => {
        if (isFocused) {
            // refresh the page here
        }
        findUserName();
        Read();
      }, [isFocused]);

    return(
        <ImageBackground source={{uri:"https://img.freepik.com/premium-photo/beautiful-moon-galaxy-with-wolf_342788-224.jpg?w=2000" }} resizeMode="cover" style={styles.backImage}>
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollview}> 

                <Text style={styles.title}>Notifications</Text>
                <View style={styles.subContainer}>
                {
                    employeeList.map((curElem, id) => {
                        return (
                            username === curElem.username ? (
                            <View key={id} style={styles.evePoints}>  
                                {curElem.eventsnotifiy.map((event, index) => (
                                    <LinearGradient key={index} colors={['#fe428e','#ff4869']} start={{x: 0.0, y: 0.7}} end={{x: 0.5, y: 1.0}} style={styles.backLinearGradient}>
                                        <Text style={styles.pntName}>Event: {event.eventname}</Text>
                                        <Text style={styles.pntDate}>Date: {event.eventdate}</Text>
                                    </LinearGradient>
                                ))}
                            </View>
                            ) : (
                                <View key={id}></View>
                            )
                        );
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
        width:'74%',
        marginHorizontal:'13%',
    },
    backLinearGradient:{
        borderColor:'white',
        borderWidth:0.7,
        borderRadius:15,
        height:responsiveHeight(100),
        width:'100%',
        marginBottom:responsiveHeight(20),
    },
    pntName:{
        color:'white',
        fontSize:responsiveHeight(20),
        fontWeight:'bold',
        marginTop:responsiveHeight(15),
        marginLeft:responsiveWidth(15),
    },
    pntDate:{
        color:'white',
        fontSize:responsiveHeight(19),
        marginTop:responsiveHeight(5),
        marginLeft:responsiveWidth(15),
    },
})
export default Notification