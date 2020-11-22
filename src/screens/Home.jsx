import React from 'react';

import { DISHES_DATA } from '../data/data';
import { FlatListPacker } from '../components/FlatListPacker';
import { CardMap } from '../components/CardMap';

import { styles } from '../styles/Cards';


export const Home = () => {
    return (
        <FlatListPacker 
            data={DISHES_DATA}
            numColumns={2}
            keyExtractor = {item => item.id}
            contentContainerStyle={styles.homeContent}
            renderItem={({ item }) => 
                <CardMap 
                    image={item.image} 
                    title={item.title} 
                    subtitle={item.categories} 
                    imageStyle={styles.homeImage} 
                    cardStyle={styles.homeCard} 
                    titleStyle={styles.homeTitle}
                    subtitleStyle={styles.homeSubtitle}
                />
            }
        />
    )
}

