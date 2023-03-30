import React from 'react';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { colors } from '../../utils/colors';

function SearchBar(props) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textfield}
                placeholder={props.placeholderText}
                placeholderTextColor={colors.primaryBlackColor}
            />
            <TouchableOpacity
                activeOpacity={0}
                onPress={props.onPress}>
                <Image
                    style={styles.image}
                    source={require('../../assets/icons/search.png')}
                />
            </TouchableOpacity>
        </View>
    );
}

export default SearchBar;
