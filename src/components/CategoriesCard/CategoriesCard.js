/* eslint-disable prettier/prettier */
import {View, Text,Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './CategoriesCard.style';

const CategoriesCard = ({product,onSelect})=>{
    return (<TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
        <View style={styles.body_container}>
        <Image style={styles.image} source={{uri: product.strCategoryThumb}}/>
         <Text style={styles.title}>{product.strCategory}</Text>
         </View>
         </View>
         </TouchableWithoutFeedback>);
};

export default CategoriesCard;
