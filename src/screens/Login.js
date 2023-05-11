import { StatusBar,KeyboardAvoidingView,Dimensions,PixelRatio, SafeAreaView, ScrollView, TouchableOpacity,TextInput, View, StyleSheet, Text, Image, Button, Pressable, ImageBackground, Platform } from "react-native";
import {React,useState, useEffect} from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import AnimatedLoader from "react-native-animated-loader";
import AsyncStorage, { AsyncStorageHook } from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/native';

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



const Login = () => {
    const navigation=useNavigation();
    const db = getFirestore();
    const [username, onChangeUsername] = useState();
    const [password, onChangePassword] = useState();
    const [respf, onChangeRespf] = useState();
    const [userinfo,onChangeUserinfo] = useState([]);
    const [visible, setVisible] = useState(false);
    const [textInputValue, settextInputValue] = useState('');

    const [asyncVal,setAsyncVal]=useState(''); //local storage
    const isFocused = useIsFocused(); // refresh
    
    useEffect(() => {
        if (isFocused) {
            // refresh the page here
            //checkNav();
        }
        setInterval(() => {
        setVisible(visible);
        }, 4000);
        checkNav();
        
    }, [isFocused]);

    const CheckLogin = () => {
        setVisible(!visible);
        if(username == null || username == ''){
            onChangeRespf("username is empty");
            navigation.navigate("Login");
        }
        else if(password == null || password == ''){
            onChangeRespf("password is empty");
            navigation.navigate("Login");

        }
        else if(username == "tafsir" && password == "tafsir12"){
            onChangeRespf("Loggin in");
            AsyncStorage.setItem('any_key_here',username);
            navigation.navigate("Tubadm");
        }
        else if(username == "alif" && password == "alif12"){
            onChangeRespf("Loggin in");
            AsyncStorage.setItem('any_key_here',username);
            navigation.navigate("Tubadm");
        }
        else if(username == "rayan" && password == "rayan12"){
            onChangeRespf("Loggin in");
            AsyncStorage.setItem('any_key_here',username);
            navigation.navigate("Tubadm");
        }
        else if(username == "peal" && password == "peal2"){
            onChangeRespf("Loggin in");
            AsyncStorage.setItem('any_key_here',username);
            navigation.navigate("Tubadm");
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
                
                if(users.length == 0){
                    onChangeRespf("user don't exists");
                    navigation.navigate("Login");
                }
                else{
                    let pass = users[0].password;
                    //alert(pass);
                    if(pass === password){
                        onChangeRespf("Loggin in");
                        AsyncStorage.setItem('any_key_here',username);
                        navigation.navigate("Tub");
                    }
                    else{
                        onChangeRespf("username or password is wrong");
                        navigation.navigate("Login");
                    }
                }
            });   
        }
    };

    
    const checkNav = ()=>{
        AsyncStorage.getItem('any_key_here')
        .then((value)=>{
            setAsyncVal(value);
            //alert(value);
            if(value == null){
                navigation.navigate("Login");
            }
            else if(value == ""){
                navigation.navigate("Login");
            }
            else{
                if(value == "tafsir") navigation.navigate("Tubadm");
                else if(value == "alif") navigation.navigate("Tubadm");
                else if(value == "rayan") navigation.navigate("Tubadm");
                else if(value == "peal") navigation.navigate("Tubadm");
                else navigation.navigate("Tub");
            }
        })
    };
    

  return (
    <KeyboardAvoidingView behaviour={Platform.OS === 'ios' ? 'padding' : null}>
        <ImageBackground source={require("../images/logsignback.jpg")} resizeMode="cover" style={styles.backImage}>
            {/* <AnimatedLoader
                visible={visible}
                overlayColor="rgba(255,255,255,0.75)"
                animationStyle={styles.lottie}
                style={styles.lottieStyle}
                speed={1}>
                <Text>Matching Credentials...</Text>
            </AnimatedLoader> */}
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}> 
                    <StatusBar
                        animated={true}
                        backgroundColor="#0b0f1e"
                        barStyle="dark-content"
                    />
                    <View style={styles.form}>
                        <Text style={styles.headTitle}>Welcome</Text>
                        <Text style={styles.headTitle}>Back!</Text>
                        <Text style={styles.subTitle}>Hey! good to see you again</Text>
                        <Text style={styles.title}>Login Here</Text>
                        <Text style={styles.submitresp}>{respf}</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeUsername}
                            value={username}
                            textAlignVertical={'top'}
                            placeholder="Username"
                            placeholderTextColor="rgb(30,30,30)" 
                            /*ref={this.nameTextInput}*/
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangePassword}
                            value={password}
                            multiline={true}
                            textAlignVertical={'top'}
                            placeholder="Password"
                            placeholderTextColor="rgb(30,30,30)" 
                            /*ref={this.passTextInput}*/
                        />
                        
                        <TouchableOpacity
                            style={styles.inputButton}
                            onPress={()=>CheckLogin()}>
                            <Text style={styles.inputButtontText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate("Signup")}>
                            <Text style={styles.gotoSignButton}>Don't have an ccount? Signup</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate("Loginadm")}>
                            <Text style={styles.gotoAdmButton}>Login as admin</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default Login

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
        marginTop:'15%',
        marginHorizontal:'10%',

    },
    headTitle:{
        color:'white',
        fontSize:40,
        fontWeight:'bold',
        marginBottom:normalize(7),
        marginBottom:normalize(-5),
    },
    subTitle:{
        color:'white',
        fontSize:17,
        marginBottom:7,
        marginTop:normalize(12),
        marginBottom:normalize(20),

    },
    title:{
        color:'white',
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:normalize(7),
        marginTop:normalize(12),
        marginBottom:normalize(10),
        
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
        marginBottom:normalize(20),
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
    gotoSignButton:{
        color:'white',
        fontSize:15,
        textAlign:'center',
        fontWeight:'bold',
    },
    gotoAdmButton:{
        color:'white',
        borderWidth:normalize(2),
        borderColor:'white',
        borderRadius:50,
        width:'50%',
        height:normalize(22),
        lineHeight:normalize(19),
        fontSize:15,
        textAlign:'center',
        fontWeight:'bold',
        marginTop:normalize(70),
        marginLeft:'25%',
    },
    lottie: {
        width: 100,
        height: 100,
        
    },
    lottieStyle:{
        
    },

})