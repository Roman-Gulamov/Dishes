import React, { useContext } from 'react';
import { Text } from 'react-native';
import SearchContext  from '../services/context';

import { styles } from '../styles/Search';

export const Search = () => {
    const {searchValue, setSearchValue} = useContext(SearchContext);

    return (
        <Text>
            {searchValue}
        </Text>
    )
}
