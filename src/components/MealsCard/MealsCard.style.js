/* eslint-disable prettier/prettier */
import {StyleSheet,Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');


export default StyleSheet.create({

container: {flex:1,backgroundColor: 'orange'},
body_container: {flex:1,marginVertical:10,flexDirection: 'row',justifyContent: 'center'},
image: {width:deviceSize.width / 1.1,height: deviceSize.height / 4,resizeMode: 'cover',flexDirection:'column-reverse'},
titleContainer: {backgroundColor: 'rgba(0, 0, 0, 0.4)',borderBottomRightRadius:15,borderBottomLeftRadius:15,alignItems: 'center',justifyContent: 'center'},
title: {color:'white',fontSize:21,fontWeight:'bold'},

});
