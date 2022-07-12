import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home/Home';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import MealDetail from './pages/MealDetail';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={Home}
          options={{
            title: '',
            headerTitleAlign: 'center',
            headerTitleStyle: {color: 'white', fontWeight: '600', fontSize: 32},
            headerStyle: {backgroundColor: 'orange'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="CategoriesPage"
          component={Categories}
          options={{
            title: 'Menu',
            headerStyle: {backgroundColor: 'white'},
            headerTitleStyle: {color: 'orange', fontSize: 28},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="MealsPage"
          component={Meals}
          options={{
            title: 'Meals',
            headerStyle: {backgroundColor: 'white'},
            headerTitleStyle: {color: 'orange', fontSize: 28},
            headerTitleAlign: 'center',
            headerTintColor: 'orange',
          }}
        />
        <Stack.Screen
          name="MealsDetailPage"
          component={MealDetail}
          options={{
            title: 'Meal Detail',
            headerStyle: {backgroundColor: 'white'},
            headerTitleStyle: {color: 'orange', fontSize: 28},
            headerTitleAlign: 'center',
            headerTintColor: 'orange',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
