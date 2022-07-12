/* eslint-disable prettier/prettier */
import {StyleSheet,Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {flex:1 },
    subContainer: {paddingBottom:7,borderBottomWidth:2,borderBottomColor:'#a9a9a9'},
    image: {width: deviceSize.width, height: deviceSize.height / 2.5},
    title: {fontSize: 30,color: '#a52a2a',fontWeight:'bold'},
    subTitle: {fontSize:25,color: '#a52a2a',fontWeight:'bold'},
    description: {fontSize:17,fontWeight:'italic',color: 'black'},
    buttonStyle: {},
    button: {
        width: deviceSize.width / 1.1,
        height: deviceSize.height / 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin:17,
        borderRadius:5,
        backgroundColor: 'red'},
        buttonText:{color:'white',fontSize:16,fontWeight:'bold'},

    }
    );
