/* eslint-disable prettier/prettier */
import React from 'react';
import { View,Text,ImageBackground, TouchableWithoutFeedback} from 'react-native';
import styles from './MealsCard.style';

const MealsCard = ({product,onSelect}) =>{
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
 <View style={styles.container}>
     <View style={styles.body_container}>
        <ImageBackground style={styles.image} imageStyle={{borderRadius:15}} source={{uri: product.strMealThumb}}>
        <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>{product.strMeal}</Text>
            </View>
        </ImageBackground>
        </View>
        </View>
        </TouchableWithoutFeedback>
        );
};

export default MealsCard;
