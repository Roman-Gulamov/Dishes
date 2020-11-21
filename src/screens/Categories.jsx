import React from 'react';

import { CATEGORIES_DATA } from '../data/data';
import { FlatListPacker } from '../components/FlatListPacker';
import { CardMap } from '../components/CardMap';

import { styles } from '../styles/Cards';


export const Categories = () => {
    return (
        <FlatListPacker 
            data={CATEGORIES_DATA}
            renderItem={({ item }) => 
                <CardMap 
                    image={item.image} 
                    title={item.name} 
                    subtitle={item.recipeCount} 
                    imageStyle={styles.categoriesImage}
                    cardStyle={styles.categoriesCard} 
                    titleStyle={styles.categoriesTitle}
                    subtitleStyle={styles.categoriesSubtitle}
                />
            }
            numColumns={1}
            contentContainerStyle={styles.categoriesContent}
            cardStyle={styles.categoriesCard}
        />
    )
}
