import { StatusBar,KeyboardAvoidingView,Dimensions,PixelRatio, SafeAreaView, ScrollView, TouchableOpacity,TextInput, View, StyleSheet, Text, Image, Button, Pressable, ImageBackground, Platform } from "react-native";
import {React,useState, useEffect} from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import AnimatedLoader from "react-native-animated-loader";
import AsyncStorage, { AsyncStorageHook } from "@react-native-async-storage/async-storage";

import { firebase } from '../component/Config';
import { db } from "../component/Config";
import { addDoc, collection, doc, getDoc, setDoc, getDocs, getFirestore } from 'firebase/firestore'

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

const Signup = () => {
    const navigation=useNavigation();
    const db = getFirestore();
    const [username, onChangeUsername] = useState();
    const [password, onChangePassword] = useState();
    const [email, onChangeEmail] = useState();
    const [respf, onChangeRespf] = useState();
    const [userinfo,onChangeUserinfo] = useState([]);
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        setInterval(() => {
        setVisible(visible);
        }, 4000);
    }, []);
    
    const CheckSignup = () => {
        setVisible(!visible);
        if(username==null || username == ''){
            onChangeRespf("username is empty");
            navigation.navigate("Signup");
        }
        else if(password==null || password == ''){
            onChangeRespf("password is empty");
            navigation.navigate("Signup");
        }
        else if(email==null || email == ''){
            onChangeRespf("email is empty");
            navigation.navigate("Signup");
        }
        else{
            let users = [];
            getDocs(collection(db,"login")).then(docSnap=>{
                
                docSnap.forEach((doc)=>{
                    if(doc.id == username){
                        users.push({ ...doc.data(),id:doc.id}); 
                    }
                });
                onChangeUserinfo([...users]);
                //console.log(users[0].password);
                //console.log(pass+"b");
                //alert(users.length);
                
                if(users.length >= 1){
                    onChangeRespf("username already taken");
                    navigation.navigate("Signup");
                }
                else{
                    setDoc(doc(db,"login",username),{
                        username:username,
                        password:password,
                        email:email,
                    }).then(()=>{
                        console.log('data submitted');
                    }).catch((error) =>{
                        console.log(error);
                    });
                    onChangeRespf("Signing up");
                    navigation.navigate("Tub");
                }
            });
        }
    };
    

  return (
    <KeyboardAvoidingView behaviour={Platform.OS === 'ios' ? 'padding' : null}>
        <ImageBackground source={require("../images/logsignback.jpg")} resizeMode="cover" style={styles.backImage}>
            <AnimatedLoader
                visible={visible}
                overlayColor="rgba(255,255,255,0.75)"
                animationStyle={styles.lottie}
                style={styles.lottieStyle}
                speed={1}>
                <Text>Matching Credentials...</Text>
            </AnimatedLoader>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}> 
                    <StatusBar
                        animated={true}
                        backgroundColor="#0b0f1e"
                        barStyle="dark-content"
                    />
                    <View style={styles.form}>
                        <Text style={styles.title}>Signup Here</Text>
                        <Text style={styles.subTitle}>We are happy to see you here!</Text>
                        <Text style={styles.submitresp}>{respf}</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeUsername}
                            value={username}
                            textAlignVertical={'top'}
                            placeholder="Username"
                            placeholderTextColor="rgb(30,30,30)" 
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEmail}
                            value={email}
                            multiline={true}
                            textAlignVertical={'top'}
                            placeholder="Email address"
                            placeholderTextColor="rgb(30,30,30)" 
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangePassword}
                            value={password}
                            multiline={true}
                            textAlignVertical={'top'}
                            placeholder="Password"
                            placeholderTextColor="rgb(30,30,30)" 
                        />
                        
                        <TouchableOpacity
                            style={styles.inputButton}
                            onPress={CheckSignup}>
                            <Text style={styles.inputButtontText}>Signup</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate("Login")}>
                            <Text style={styles.gotoLoginButton}>Already have an ccount? Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default Signup

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
    
    form:{
        width:'80%',
        height:'100%',
        marginTop:'20%',
        marginHorizontal:'10%',

    },
    title:{
        color:'white',
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:7,
        marginTop:normalize(12),
        marginBottom:normalize(5),
        
    },
    subTitle:{
        color:'white',
        fontSize:17,
        textAlign:'center',
        marginBottom:7,
        marginBottom:normalize(12),

    },
    submitresp:{
        textAlign:'center',
        color:'red',
        fontSize:15,
        marginBottom:normalize(12),
    },
    input:{
        backgroundColor:'rgba(255,255,255,0.4)',
        /*borderColor:'white',
        borderBottomWidth:2,*/
        color:'black',
        marginBottom:'10%',
        height:normalize(45),
        borderRadius:50,
        fontSize:17,
        paddingLeft:normalize(35),
        paddingTop:normalize(12),
        
    },
    
    inputButton:{
        backgroundColor:'#0b0f1e',
        height:normalize(45),
        borderRadius:50,
        marginBottom:normalize(20),
        
    },
    inputButtontText:{
        fontSize:20,
        color:'white',
        textAlign:'center',
        lineHeight:normalize(40),
        fontWeight:'bold',
        
    },
    gotoLoginButton:{
        color:'white',
        fontSize:15,
        textAlign:'center',
        fontWeight:'bold',
    }

})