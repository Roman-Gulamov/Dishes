import React from 'react';
import { Text } from 'react-native';

import { NavButton } from '../components/NavButton';


export const Categories = ({ navigation }) => {
    return (
        <>
            <NavButton iconName="arrow-back" onPress={() => navigation.goBack()} />
            <Text>Categories</Text>
        </>
    )
}
