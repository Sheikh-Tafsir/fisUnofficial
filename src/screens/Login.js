import { KeyboardAvoidingView,Dimensions,PixelRatio, SafeAreaView, ScrollView, TouchableOpacity,TextInput, View, StyleSheet, Text, Image, Button, Pressable, ImageBackground, Platform } from "react-native";
import {React,useState} from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

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
    const CheckLogin = () => {
        if(username == null){
            onChangeRespf("username is empty");
        }
        else if(password == null){
            onChangeRespf("password is empty");
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
                let pass = users[0].password;
                //console.log(pass+"b");
  
                if(pass === password){
                    onChangeRespf("Loggin in");
                    navigation.navigate("Homes");
                }
                else{
                    onChangeRespf("username or password is wrong");
                }
            });

            
        }
    };
    

  return (
    <KeyboardAvoidingView behaviour={Platform.OS === 'ios' ? 'padding' : null}>
        <ImageBackground source={{uri: "https://mcdonaldobservatory.org/sites/default/files/styles/7col/public/images/news/gallery/McDonald_Observatory-243_0.jpg?itok=mQSfLJxq" }} resizeMode="cover" style={styles.backImage}>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}> 
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
                            onPress={CheckLogin}>
                            <Text style={styles.inputButtontText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate("Signup")}>
                            <Text style={styles.gotoSignButton}>Don't have an ccount? Signup</Text>
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
        marginBottom:7,
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
        marginBottom:7,
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
    gotoSignButton:{
        color:'white',
        fontSize:15,
        textAlign:'center',
        fontWeight:'bold',
    }

})