import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Header } from './src/screens/Header';
import { Test1 } from './src/screens/test1';
import { Test2 } from './src/screens/test2';

import { Main } from './src/styles/Main';


const App = () => {
    return (
        <NavigationContainer >
            <Header />
                <Drawer.Navigator initialRouteName="Test1">
                    <Drawer.Screen
                        name="Test1"
                        component={Test1}
                        options={{ drawerLabel: 'Test1' }}
                    />
                    <Drawer.Screen
                        name="Test2"
                        component={Test2}
                        options={{ drawerLabel: 'Test2' }}
                    />
                </Drawer.Navigator>
        </NavigationContainer>
    )
}

const Drawer = createDrawerNavigator();
export default App;
