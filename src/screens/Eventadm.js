import { StatusBar,KeyboardAvoidingView,Dimensions,PixelRatio, SafeAreaView, ScrollView, TouchableOpacity,TextInput, View, StyleSheet, Text, Image, Button, Pressable, ImageBackground, Platform} from "react-native";
import {React, useState, useCallback} from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import Menu from '../component/Menuadm';
import { firebase } from '../component/Config';
import { db } from "../component/Config";
import { addDoc, collection, doc, getDoc, setDoc, getDocs, getFirestore } from 'firebase/firestore'
import DocumentPicker from "react-native-document-picker";
import * as ImagePicker from 'expo-image-picker';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;
const normalize = (size) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } 
  else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

const Eventadm = () => {
  const navigation=useNavigation();
  const db = getFirestore();
  const [club, onChangeClub] = useState();
  const [head, onChangeHead] = useState();
  const [date, onChangeDate] = useState();
  const [day, onChangeDay] = useState();
  const [month, onChangeMonth] = useState();
  const [year, onChangeYear] = useState();
  const [desc, onChangeDesc] = useState();
  const [imgg, onChangeImg] = useState();
  
  const [respf, onChangeRespf] = useState();
  const [image, setImage] = useState(null);

  const [selectedDate, setSelectedDate] = useState(new Date());


      
  const Create = () => {
    if(head==null || head==''){
        onChangeRespf("post title is empty");
    }
    else if(date==null || date==''){
        onChangeRespf("post date is empty");
    }
    else if(desc==null || desc==''){
        onChangeRespf("post description is empty");
    }
    else if(club==null || club==''){
        onChangeRespf("club description is empty");
    }
    else if((image==null || image=='') && (imgg==null || imgg=='')){
        onChangeRespf("image link is empty");
    }
    else{
        setDoc(doc(db,"events",head),{
            eventclub:club,
            eventname:head,
            eventdate:date,
            eventdec:desc,
            eventimg:imgg,
            eventmem:[],
        }).then(()=>{
              console.log('event data submitted');
        }).catch((error) =>{
              console.log(error);
        });
        navigation.navigate("Resp");
    }
  };
  
  const selectOneFile = async () => {
      // Pick a single file
      console.log("yssss");
      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          /*aspect: [4, 3],*/
          quality: 1,
      });
    
      console.log(result);
      //console.log(result.uri);
      setImage(result.uri);
      /*if (!result.cancelled) {
          setImage(result.assets[0].uri);
          console.log(result.assets[0].uri);
      }*/
      //console.log("we are");
  };

  return (
    <KeyboardAvoidingView behaviour={Platform.OS === 'ios' ? 'padding' : null}>
        <ImageBackground source={{uri: "https://iphoneswallpapers.com/wp-content/uploads/2022/08/Astronomy-iPhone-Wallpaper-HD.jpg" }} resizeMode="cover" style={styles.backImage}>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}> 
                    <StatusBar
                        animated={true}
                        backgroundColor="#0b0f1e"
                        barStyle="dark-content"
                    />
                    <Text style={styles.title}>Create Event</Text>
                    <LinearGradient colors={['#023050', '#212022' ]} start={{x: 0.0, y: 0.7}} end={{x: 0.5, y: 1.0}} style={styles.backLinearGradient}>
                            <View style={styles.form}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeClub}
                                    value={club}
                                    textAlignVertical={'top'}
                                    placeholder="Club name"
                                />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeHead}
                                    value={head}
                                    textAlignVertical={'top'}
                                    placeholder="Event name"
                                />
                                
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeDate}
                                    value={date}
                                    textAlignVertical={'top'}
                                    placeholder="Event Date: YYYY-MM-DD"
                                />
                                {/* <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeMonth}
                                    value={month}
                                    textAlignVertical={'top'}
                                    placeholder="Event Month: MM"
                                />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeYear}
                                    value={year}
                                    textAlignVertical={'top'}
                                    placeholder="Event Year: YYYY"
                                /> */}
                                <TextInput
                                    style={[styles.input,{height:normalize(180)}]}
                                    onChangeText={onChangeDesc}
                                    value={desc}
                                    multiline={true}
                                    textAlignVertical={'top'}
                                    placeholder="Event description"
                                 
                                />
                                <TextInput
                                    style={[styles.input,{height:normalize(75)}]}
                                    onChangeText={onChangeImg}
                                    value={imgg}
                                    multiline={true}
                                    textAlignVertical={'top'}
                                    placeholder="Event image link"
                                />
                                <TouchableOpacity onPress={Create} style={styles.eventBut}>
                                    <Text style={styles.eventButText}>Create</Text>
                                </TouchableOpacity>
                                <Text style={styles.res}>{respf}</Text>
                            </View>
                    </LinearGradient>
                
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    </KeyboardAvoidingView>
  );
}

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
  title:{
      color:'white',
      fontSize:normalize(26),
      fontWeight:'bold',
      textAlign:'center',
      marginBottom:normalize(10),
      marginTop:normalize(15),
  },
  backLinearGradient:{
      borderColor:'white',
      borderWidth:normalize(1),
      borderRadius:15,
      height:normalize(460),
      marginHorizontal:'5%',
      marginTop:normalize(5),
  },
  form:{
      width:'80%',
      marginHorizontal:'10%',
      marginTop:normalize(25),

  },
  input:{
      backgroundColor:'rgba(255,255,255,0.1)',
      borderColor:'white',
      borderBottomWidth:normalize(2),
      color:'black',
      marginBottom:normalize(10),
      height:normalize(35),
      borderRadius:5,
      paddingLeft:normalize(10),
      paddingTop:normalize(5),
      
  },
  eventBut:{
    backgroundColor:'white',
    height:'6%',
    borderRadius:5,
  },
  eventButText:{
    color:'#023050',
    fontSize:normalize(15),
    fontWeight:'bold',
    textAlign:'center',
    lineHeight:normalize(23),
    
  },
  res:{
      textAlign:'center',
      color:'white',
  },
  inputButtontText:{
      backgroundColor:'rgba(255,255,255,0.1)',
      color:'rgba(0,0,0,0.5)',
      borderRadius:5,
      height:normalize(30),
      borderColor:'white',
      borderBottomWidth:normalize(2),
      marginBottom:normalize(20),
      paddingLeft:normalize(10),
      paddingTop:normalize(5),
  },
  menu:{
      marginTop:normalize(-70),
      zIndex:100,
  }

})

export default Eventadm