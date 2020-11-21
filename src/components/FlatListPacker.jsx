import React from 'react';
import { View, FlatList } from 'react-native';

import { styles } from '../styles/Cards';


export const FlatListPacker = ({ data, renderItem, numColumns, contentContainerStyle }) => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor = {item => item.id}
                contentContainerStyle={contentContainerStyle}
                numColumns={numColumns}
            />
        </View>
    )
}