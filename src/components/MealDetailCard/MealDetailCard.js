/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View,Image,TouchableOpacity, Linking} from 'react-native';
import styles from './MealDetailCard.style';

const MealDetailCard = ({meals,onSelect})=>{
    const youtubeUrl = meals.strYoutube;
    function handlePress() {
        Linking.openURL(youtubeUrl);
    }
    return (
        <View>
        <View style={styles.subContainer}>
        <Image source={{uri: meals.strMealThumb}} style={styles.image}/>
            <Text style={styles.title}>{meals.strMeal}</Text>
            <Text style={styles.subTitle}>{meals.strArea}</Text>
            </View>
            <Text style={styles.description}>{meals.strInstructions}</Text>
            <View style={styles.buttonStyle}>
            {youtubeUrl ? (  <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Watch on Youtube</Text>
            </TouchableOpacity>) : null}


            </View>
        </View>
    );
};

export default MealDetailCard;
