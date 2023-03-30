import React from 'react';
import {
    Text, TouchableOpacity, View,
} from 'react-native';
import styles from './styles';

function CategoryCard(props) {
    return (
        <TouchableOpacity
            onPress={() => props.navigationObj.navigate('ProductListing')}
            style={styles.container}>
            <View style={styles.textViewContainer}>
                <Text numberOfLines={1} style={styles.textStyle}>{props.cardLabel}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryCard;