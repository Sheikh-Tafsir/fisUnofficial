import React,{useState, useEffect} from "react";
import { addDoc, collection, doc, getDoc, setDoc,getDocs } from "firebase/firestore";
import { StatusBar } from "react-native";
import { Dimensions,PixelRatio,SafeAreaView, ScrollView, TouchableOpacity,TextInput, View, StyleSheet, Text, Image, Button, Pressable, ImageBackground } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { firebase } from './Config';
import { db } from "./Config";
import { getFirestore } from 'firebase/firestore'


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

const Fetc = () => {
//export default function Fetc() {
    const navigation=useNavigation();
    const db = getFirestore();
    const [userDoc, setUserDoc]=useState(null);
    const [employeeList,setEmployeeList] = useState([
        {
            userdec:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be",
            userimg:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/283191875_148757877670485_3775245651421002430_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=H0lQrqy9su8AX8H8mxZ&_nc_ht=scontent.fdac140-1.fna&oh=00_AT82ITeHVhSJrg4PPLy20mb9HMCsNZ-0la6owmevrLr3Eg&oe=634819A5",
            username:"Space Summit",
            id:"3IpMEbfMgg3hnAYRmAFi",
        },
        {
            userdec:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be",
            userimg:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/307190732_173818658497740_5382873762848506753_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=f7GPflrl2E4AX8BzE-l&_nc_ht=scontent.fdac140-1.fna&oh=00_AT9OR9JkDwHF-8WWFIUwfxTxFm3eZCghsalf_Aa9ZwBfCA&oe=6347C9A1",
            username:"Club Day",
            id:"3IpMEbfMgg3hnAYRmAFi",
        },
        {
            userdec:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be",
            userimg:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/279445798_156323473537719_4451012393238925662_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=ro5K1-jtKLcAX-bupmN&tn=FtGUgm2mD6coLSGF&_nc_ht=scontent.fdac140-1.fna&oh=00_AT_3m92wKdNhpb9vBD4vLTxnacKHRrGI8Y9TJ2SzPnol8g&oe=63480372",
            username:"whatever",
            id:"3IpMEbfMgg3hnAYRmAFi",
        }
    ]);

    const Create = (userName,userDec,userImg) => {
        addDoc(collection(db,"brw"),{
            username:userName,
            userdec:userDec,
            userimg:userImg
        }).then(()=>{
            console.log('data submitted');
        }).catch((error) =>{
            console.log(error);
        });
    }
    /*const Read = () => {
        getDoc(doc(db,"brw","jhbhjbvbzb")).then(docData=>{
            if(docData.exists()){
                console.log(docData.data());
            }
            else{
                console.log("not found");
            }
        }).catch((error)=>{
            console.log(error);
        })
    };*/

    useEffect(() => {
        Read();
      }, []);

    const Read = () => {
        let users = [];
            getDocs(collection(db,"users")).then(docSnap=>{
                
                docSnap.forEach((doc)=>{
                    users.push({ ...doc.data(),id:doc.id}); 
                });
                //console.log("document data:", users[0].username);
                setEmployeeList([...users]);
                //func(users);
            });
    };   
    /*const func = (users) => {
        //alert(JSON.stringify(employeeList));
        //console.log(employeeList);
        setEmployeeList([...users]);
        //console.log("tafsir " + employeeList[0].username);        
    }*/
    

    return (
        <ImageBackground source={{uri: "https://iphoneswallpapers.com/wp-content/uploads/2022/08/Astronomy-iPhone-Wallpaper-HD.jpg" }} resizeMode="cover" style={styles.backImage}>
            
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollview}> 
                <Text style={styles.title}>Our Events</Text>
                    {
                        employeeList.map((curElem,id)=>{
                            return (
                                <View key={id} style={styles.evePoints}>
                                    <LinearGradient colors={['#023050', '#212022' ]} start={{x: 0.0, y: 0.7}} end={{x: 0.5, y: 1.0}} style={styles.backLinearGradient}>
                                        <View  style={styles.pntTxt}>
                                            <Text style={styles.pntHead}>{curElem.username}</Text>
                                            <Text style={styles.pntDesc}>{curElem.userdec}</Text>
                                            
                                            
                                            <View style={styles.btnStyle}>
                                                <Button title="Learn More"></Button>
                                            </View> 
                                        </View>
                                        
                                        <Image
                                            style={styles.imgStyle}
                                            source={{uri:(curElem.userimg)}}
                                        />
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
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
    },
    pntDesc:{
        color:'white',
        fontSize:16,
        marginBottom:10,
    },
    btnStyle:{
        width:'50%',
        marginBottom:25,
    },
    imgStyle:{
        width:'86%',
        height:undefined,
        aspectRatio:1,
        marginHorizontal: '7%',
        marginBottom:25,
        borderRadius:7,
    },
});

export default Fetc