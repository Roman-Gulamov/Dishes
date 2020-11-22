import React from 'react';

import { getDishesCount } from '../components/getDishesCount';
import { FlatListPacker } from '../components/FlatListPacker';
import { CardMap } from '../components/CardMap';

import { CATEGORIES_DATA } from '../data/data';

import { styles } from '../styles/Cards';



export const Categories = () => {
    return (
        <FlatListPacker 
            data={CATEGORIES_DATA}
            numColumns={1}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.categoriesContent}
            cardStyle={styles.categoriesCard}
            renderItem={({ item }) => 
                <CardMap 
                    image={item.image} 
                    title={item.name} 
                    subtitle={`${getDishesCount(item.dishesId)} recipes`}
                    imageStyle={styles.categoriesImage}
                    cardStyle={styles.categoriesCard} 
                    titleStyle={styles.categoriesTitle}
                    subtitleStyle={styles.categoriesSubtitle}
                />
            }
        />
    )
}
