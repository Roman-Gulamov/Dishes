import React from 'react';
import { Text } from 'react-native';

import { NavButton } from '../components/NavButton';


export const Search = ({ navigation }) => {
    return (
        <> 
            <NavButton iconName="arrow-back" onPress={() => navigation.goBack()} />
            <Text>Search</Text>
        </>
    )
}
