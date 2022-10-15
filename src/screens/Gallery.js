import { Dimensions,PixelRatio,StyleSheet, Text, View, Image, ImageBackground, Button, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import React from 'react'
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
const Gallery = () => {
  return (
    <ImageBackground source={{uri: "https://iphoneswallpapers.com/wp-content/uploads/2022/08/Astronomy-iPhone-Wallpaper-HD.jpg" }} resizeMode="cover" style={styles.backImage}>
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>   
            <Text style={styles.title}>Gallery</Text>   
            <View style={styles.galBox}>
                <Image
                    style={[styles.imgStyle,{width:'63%',height:undefined,aspectRatio:1}]}
                    source={{uri:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/274984732_142825838220816_7105808281179408607_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=6_beSZg0DIMAX_Dx42k&_nc_ht=scontent.fdac140-1.fna&oh=00_AT8f45awFBHymfUw62kcZIzYJV1ClSmV5Xh1AWjQErlraw&oe=634876E9"}}
                />
                <Image
                    style={[styles.imgStyle,{width:'31.5%',height:undefined,aspectRatio:0.5}]}
                    source={{uri:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/271328152_127882136381853_2918768760490766943_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5mLJk4_hteIAX_a-cJT&_nc_ht=scontent.fdac140-1.fna&oh=00_AT-9WIzwY5SGI7hHv2rGVPZm-u4tULwqktvJit8ntmKYQQ&oe=6348CE12"}}
                />

                <Image
                    style={styles.imgStyle}
                    source={{uri:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/307173844_173365628543043_663565295781957389_n.jpg?stp=dst-jpg_s851x315&_nc_cat=101&ccb=1-7&_nc_sid=da31f3&_nc_ohc=08gX8uzqGXMAX99zDjJ&_nc_ht=scontent.fdac140-1.fna&oh=00_AT_k4tRxyKPfb5ttce-Q9WLHYsV4wH7BylE8PgwthpKC2A&oe=6348C9C8"}}
                />
                <Image
                    style={[styles.imgStyle,{width:'63%',height:undefined,aspectRatio:2}]}
                    source={{uri:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/307190732_173818658497740_5382873762848506753_n.jpg?stp=c640.0.1000.1000a_dst-jpg_s851x315&_nc_cat=107&ccb=1-7&_nc_sid=da31f3&_nc_ohc=f7GPflrl2E4AX8BzE-l&_nc_ht=scontent.fdac140-1.fna&oh=00_AT9v7Ecu0EKyvuiyS0hKODGLfYn0J1HL1BPZlO7kO2A4Ng&oe=6347C9A1"}}
                />
                 
                <Image
                    style={styles.imgStyle}
                    source={{uri:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/302358563_170644282148511_4888702197697428701_n.jpg?stp=dst-jpg_s851x315&_nc_cat=103&ccb=1-7&_nc_sid=da31f3&_nc_ohc=iL25rkzPNHIAX9HH7TI&tn=FtGUgm2mD6coLSGF&_nc_ht=scontent.fdac140-1.fna&oh=00_AT8-PmN6nRnahn9v6mEXmTTvMdByBdxNp4Fynpj1nu-rgQ&oe=634863A6"}}
                />
                <Image
                    style={styles.imgStyle}
                    source={{uri:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/275667595_145574227945977_1270025990964407054_n.jpg?stp=dst-jpg_s851x315&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_ohc=JqqXaGLu9P0AX9kFzCA&_nc_ht=scontent.fdac140-1.fna&oh=00_AT8pyTr2vWtFPtqWiOAZh65jtdnryLH98tM99CCtSUSXBA&oe=634855F3"}}
                />
                <Image
                    style={styles.imgStyle}
                    source={{uri:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/304859694_171063765439896_6982930107857282350_n.jpg?stp=c129.0.733.733a_dst-jpg_s851x315&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=hPluRP0lBTMAX9lFS2V&tn=FtGUgm2mD6coLSGF&_nc_ht=scontent.fdac140-1.fna&oh=00_AT_U2Q7fBHPemzKgQEfF7M6LtRgRGWtQVaFNhPE-ZLIqtg&oe=63484C96"}}
                />
                <Image
                    style={[styles.imgStyle,{width:'63%',height:undefined,aspectRatio:2}]}
                    source={{uri:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/283188103_148757967670476_2357144034690868641_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=g8ppiPsJ1nEAX-dkgoj&_nc_ht=scontent.fdac140-1.fna&oh=00_AT-U_2Q_jbc9JtIgciIEbaL3z30WKOdRStIz7PS6E-5D0Q&oe=6347FFAF"}}
                />
                <Image
                    style={styles.imgStyle}
                    source={{uri:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/290907062_157623480117258_3582712659186332108_n.jpg?stp=dst-jpg_s851x315&_nc_cat=109&ccb=1-7&_nc_sid=da31f3&_nc_ohc=EU7sEAbtLYoAX-SKGHf&_nc_ht=scontent.fdac140-1.fna&oh=00_AT9oroS-IZ36vxuw9YmvSXQcX_SQdSO9FJZS4nPtXJpEYQ&oe=63483DE3"}}
                />


                <Image
                    style={[styles.imgStyle,{width:'48%',height:undefined,aspectRatio:1.5}]}
                    source={{uri:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/275737220_145574154612651_403751523913829061_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7-UUyHPUyMIAX9HVM_3&_nc_ht=scontent.fdac140-1.fna&oh=00_AT_KWEqnBwz2otvZLj0wd_7lLANCx1xKEtNcVcycC3d-VQ&oe=63480279"}}
                />
                <Image
                    style={[styles.imgStyle,{width:'48%',height:undefined,aspectRatio:1.5}]}
                    source={{uri:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/304803201_171063698773236_8531583709783848385_n.jpg?stp=c272.0.451.451a_dst-jpg_s851x315&_nc_cat=107&ccb=1-7&_nc_sid=da31f3&_nc_ohc=YYY1Y5XGV8sAX81P3iG&_nc_ht=scontent.fdac140-1.fna&oh=00_AT-Y57F_ENzdUYAyUwwbWF7gvS6kjTjhdGk_rqd1DcDBfg&oe=6347CF91"}}
                />
                <Image
                    style={styles.imgStyle}
                    source={{uri:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/302048992_173211195225153_7694206091314366491_n.jpg?stp=dst-jpg_s851x315&_nc_cat=102&ccb=1-7&_nc_sid=da31f3&_nc_ohc=CwhGBMxC1SIAX_C2SRA&_nc_ht=scontent.fdac140-1.fna&oh=00_AT8sNdngvYY1BlMoS1_YcZyUvYt2WpIq0tk6IA22K-mMBQ&oe=63488090"}}
                />
                <Image
                    style={styles.imgStyle}
                    source={{uri:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/275057853_142287708274629_1637913901415872923_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=0hhbkxSBN1UAX-U3xCy&_nc_ht=scontent.fdac140-1.fna&oh=00_AT8QP6NnMNJ701TrjFunYyTmnPRAsFJiQtVFfZ7_ij2gKA&oe=63488B7E"}}
                />
            </View> 
            </ScrollView>
        </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    backImage:{
        height:"100%",
    },
    scrollView: {
        width:'92%',
        marginHorizontal: '4%',    
    },
    title:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:5,
        marginTop:10,
    },
    galBox:{
        flex:3,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        flexWrap:'wrap',
        
    },
    imgStyle:{
        width:'31.5%',
        aspectRatio:1,
        margin:normalize(4),
        borderWidth:0.7,
        borderColor:'white',
        borderRadius:10,
    }
})

export default Gallery