import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/stack';

import { screenOptionStyle } from '../styles/Routes';

import { NavButton } from '../components/NavButton';
import { Home } from '../screens/Home';
import { Categories } from '../screens/Categories';
import { Search } from '../screens/Search';


export const MainRoute = ({ screenName }) => {
    const navigation = useNavigation();
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator screenOptions={screenOptionStyle} >   
                <Stack.Screen 
                    name={screenName} 
                    component={
                        screenName === 'Home' ? Home : 
                        screenName === 'Categories' ? Categories : Search
                    }
                    options={{
                        headerLeft: () => (
                        screenName !== 'Home' ? 
                            <HeaderBackButton onPress={() => navigation.goBack()} /> : 
                            <NavButton onPress={() => navigation.toggleDrawer()} />
                        ),
                    }}
                />
            </Stack.Navigator>
        </>
    )
}


