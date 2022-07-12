/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, View,Text } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading/Loading';
import MealsCard from '../../components/MealsCard';
const Meals = (props)=>{
    const {strCategory} = props.route.params;

    const {loading,error,data} = useFetch(`${Config.API_FOODS}${strCategory}`);

    if (loading){
        return <Loading />;
    }
    const handleMealSelected = idMeal=>{

        props.navigation.navigate('MealsDetailPage',{idMeal});

    };
    const renderMeals = ({item})=>(<MealsCard product={item} onSelect={()=>handleMealSelected(item.idMeal)}/>);
    return (
        <View>
        <FlatList data={data.meals} renderItem={renderMeals} />
        </View>
        );
};

export default Meals;
