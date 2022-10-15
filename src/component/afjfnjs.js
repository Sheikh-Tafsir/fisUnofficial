import React,{useState, useEffect} from "react";
import { doc, getDoc } from "firebase/firestore";
import { FlatList, StatusBar } from "react-native";
import { TouchableOpacity, View, StyleSheet, Text, Image, Button, Pressable } from "react-native";
import { firebase } from './Config';
import { db } from "./Config";

const Fetc = () => {
    const [users, setUsers] = useState([]);
    const todoRef = firebase.firestore().collection('todos');

    useEffect(async()=>{
        todoRef
        .onSnapshot(
            querySnapshot => {
                const users = []
                querySnapshot.forEach((doc) => {
                    const {heading,text} = doc.data()
                    users.push({
                        id:doc.id,
                        heading,
                        text,
                    })
                })
                setUsers(users)
            }
        )
    }, [])
    return(
        <View style={{flex:1, marginTop:100}}>
            <FlatList
                style={{height:"100%"}}
                data={users}
                numColumns={1}
                renderItem={({item})=>(
                    <Pressable
                        style={StyleSheet.container}
                    >
                        <View style={StyleSheet.innerContainer}>
                            <Text style={StyleSheet.itemHeading}>{item.heading}</Text>
                            <Text style={StyleSheet.itemText}>{item.text}</Text>
                        </View>
                    </Pressable>
                )}
            />
        </View>
    )
}
export default Fetc

const styles = StyleSheet.create({
    container:{
        backgroundColor:'grey',
        padding:15,
        borderRadius:15,
        marginHorizontal:10,
    }
})
