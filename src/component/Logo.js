import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View>
        <Image
            style={{ width: 120, height: 40,aspectRatio:3,marginLeft:160 }}
            source={{uri:'https://i.ibb.co/mDF2GRy/logoo1.png'}}
        />
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({})