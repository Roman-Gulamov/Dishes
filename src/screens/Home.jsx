import React from 'react';
import { Text } from 'react-native';

import { NavButton } from '../components/NavButton';


export const Home = ({ navigation }) => {
    return (
        <> 
            <NavButton iconName="menu" onPress={() => navigation.toggleDrawer()} />
            <Text>Home</Text>
        </>
    )
}



