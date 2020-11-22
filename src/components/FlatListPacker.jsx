import React from 'react';
import { View, FlatList } from 'react-native';

import { styles } from '../styles/Cards';


export const FlatListPacker = ({ data, renderItem, keyExtractor, numColumns, contentContainerStyle }) => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                contentContainerStyle={contentContainerStyle}
                numColumns={numColumns}
            />
        </View>
    )
}