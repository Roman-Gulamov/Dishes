import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptionStyle } from '../styles/Routes';

import { Home } from '../screens/Home';
import { Categories } from '../screens/Categories';
import { Search } from '../screens/Search';

const Stack = createStackNavigator();

export const MainRoute = ({ screenName }) => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}> 
            <Stack.Screen 
                name={screenName} 
                component={
                    screenName === 'Home' ? Home : 
                    screenName === 'Categories' ? Categories : 
                    Search
                }
            />
        </Stack.Navigator>
    )
}


