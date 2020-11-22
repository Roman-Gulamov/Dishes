import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import SearchContext from './src/services/context';
import { DrawerNavigator } from './src/routes/DrawerNavigator';

const App = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <SearchContext.Provider value={{searchValue, setSearchValue}}>
            <NavigationContainer>
                <DrawerNavigator />
            </NavigationContainer>
        </SearchContext.Provider>
    )
}

export default App;