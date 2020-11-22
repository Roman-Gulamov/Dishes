import React from 'react';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export const HeaderMenuButton = ({ onPress }) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.4} 
            onPress={onPress} 
            style={{paddingLeft: 10, paddingRight: 10}}
        >
            <MaterialIcons
                name='menu'
                size={32}
                color='black'
            />
        </TouchableOpacity>
    )
}