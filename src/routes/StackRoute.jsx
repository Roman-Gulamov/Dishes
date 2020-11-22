import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import SearchContext from '../services/context';

import { HeaderMenuButton } from '../components/HeaderMenuButton';
import { HeaderSearchInput } from '../components/HeaderSearchInput';

import { Home } from '../screens/Home';
import { Categories } from '../screens/Categories';
import { Search } from '../screens/Search';

import { screenOptionStyle, headerTitle } from '../styles/Routes';


export const MainRoute = ({ screenName }) => {
    const navigation = useNavigation();
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>   
            <Stack.Screen 
                name={screenName} 
                component={
                    screenName === 'Home' ? Home : 
                    screenName === 'Categories' ? Categories : Search
                }
                options={{
                    headerLeft: () => (
                        screenName === 'Home' ? 
                            <HeaderMenuButton onPress={() => navigation.openDrawer()} /> : 
                            <HeaderBackButton onPress={() => navigation.goBack()} />
                    ),
                    headerTitle: () => (
                        screenName === 'Search' ? 
                            <HeaderSearchInput /> : 
                            <Text style={headerTitle}>{screenName}</Text> 
                    ),
                    headerRight: () => (
                        screenName === 'Search' ? 
                            <HeaderMenuButton onPress={() => navigation.openDrawer()} /> : null
                    )
                }}
            />
        </Stack.Navigator>
    )
}


