import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { NavButtonWrapper } from '../styles/NavButtonWrapper';


export const NavButton = ({ iconName, onPress }) => {
    return (
        <NavButtonWrapper activeOpacity={0.4} onPress={onPress}>
            <MaterialIcons
                name={iconName}
                size={32}
                color='black'
            />
        </NavButtonWrapper>
    )
}