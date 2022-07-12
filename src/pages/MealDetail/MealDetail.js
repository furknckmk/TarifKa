/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, View } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import MealDetailCard from '../../components/MealDetailCard';
const MealDetail = (props)=>{
    const {idMeal} = props.route.params;
    console.log(idMeal);
    const {data} = useFetch(`${Config.FOOD_DETAIL}${idMeal}`);
    const onPressYoutube = ()=>{
        props.navigation.navigate()
    };
    const renderMealDetail = ({item})=><MealDetailCard meals={item} />;
    return (
        <View>
            <FlatList data={data.meals} renderItem={renderMealDetail}/>
        </View>
        );
};

export default MealDetail;
