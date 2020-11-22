import React, { useContext } from 'react';
import { SearchBar } from 'react-native-elements';
import SearchContext  from '../services/context';

import { styles } from '../styles/Search';


export const HeaderSearchInput = () => {
    const {searchValue, setSearchValue} = useContext(SearchContext);

    return (
        <> 
            <SearchBar
                placeholder="Search"
                lightTheme={true}
                containerStyle={styles.containerStyle}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                onChangeText={setSearchValue}
                value={searchValue}
            />
        </>
    )
}
