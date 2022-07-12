/* eslint-disable prettier/prettier */
import React from 'react';
import LottieView from 'lottie-react-native';

const Loading = ()=>{
    return (
        <LottieView source={require('../../assets/lottieAnimated/29299-food-loading-animation.json')} autoPlay/>);
};

export default Loading;
