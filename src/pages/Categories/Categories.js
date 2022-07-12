/* eslint-disable prettier/prettier */
import React from 'react';
import {View, FlatList} from 'react-native';
import CategoriesCard from '../../components/CategoriesCard';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading/Loading';
const Categories = (props)=>{

    const {loading,error,data} = useFetch(Config.API_URL);

    if (loading){
        return <Loading />;
    }


    function handleCategorySelected (strCategory) {
        props.navigation.navigate('MealsPage',{strCategory});
    }

    const renderCategories = ({item})=><CategoriesCard product={item} onSelect={()=>handleCategorySelected(item.strCategory)}/>;



    return (
        <View>
       <FlatList data={data.categories} renderItem={renderCategories} />

        </View>);

};

export default Categories;

