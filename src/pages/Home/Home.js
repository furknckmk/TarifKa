/* eslint-disable prettier/prettier */
import React from 'react';
import { View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import LottieViev from 'lottie-react-native';
const Home = ({navigation})=>{
    function OpenMenu(){
      navigation.navigate('CategoriesPage');
    }

    return (
        <View style={styles.container}>
        <LottieViev source={require('../../assets/lottieAnimated/4762-food-carousel.json')} autoPlay  style={{width:100,height:120,position: 'absolute',top: 300}} />
        <View style={styles.inner_container}>
         <Text style={styles.title_text}>TARIFKA</Text>
         <TouchableOpacity onPress={OpenMenu} style={styles.button}><Text style={styles.buttonText}>Open Menu</Text></TouchableOpacity>
         </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({

    container: { flex:1,
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center'},

        inner_container:{ position:'absolute',
        top:100,
        height:150,
        justifyContent:'space-between',
        alignItems:'center'},

        title_text:{color:'white',fontSize:50,fontWeight:'bold',fontFamily:'cursive',position:'absolute',top:80},
        button:{backgroundColor:'orange',width:150,height:40,alignItems:'center',justifyContent:'center',borderRadius:20,position: 'absolute',bottom:-80,borderWidth:2,borderColor:'white'},
        buttonText:{color:'white',fontWeight:'bold',fontSize:20},
});
