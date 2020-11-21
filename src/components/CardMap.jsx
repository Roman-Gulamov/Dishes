import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from '../styles/Cards';


export const CardMap = ({ image, title, subtitle, imageStyle, cardStyle, titleStyle, subtitleStyle }) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.7} 
            onPress={() => alert('Click!')}
            style={cardStyle} 
        >
            <View>
                <Image 
                    style={imageStyle}
                    source={{
                        uri: image
                    }}
                />
            </View>
            <View style={styles.textWrapper}>
                <Text style={titleStyle}>{title}</Text>
                <Text style={subtitleStyle}>{subtitle}</Text>
            </View>
        </TouchableOpacity>
    )
}
