import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Feather from 'react-native-vector-icons/Feather';

import { DRAWER_DATA } from "../data/DrawerData";
import { MainRoute } from "./StackRoute";

import { drawerStyles } from "../styles/Routes";


export const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
    
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContentOptions={drawerStyles}>
            {DRAWER_DATA.map(({ id, name, iconName }) =>
                <Drawer.Screen
                    key={id}
                    name={name.toUpperCase()} 
                    options={{ drawerIcon: () => <Feather name={iconName} size={25} /> }}
                >{() => <MainRoute screenName={name} />}
                </Drawer.Screen>
            )}
        </Drawer.Navigator>
    );
} 


