import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity,
} from 'react-native';
import { colors } from '../../../utils/colors';
import styles from './styles'

function VariationSection(props) {
    const [selected, setSelected] = useState(props.variation.items[0])
    return (
        <View>
            <Text style={[styles.textStyle, styles.boldStyle]}>{props.variation.title}</Text>
            <View style={styles.mainContainer}>
                {
                    props.variation.items.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={0}
                            onPress={() => setSelected(item)}
                            style={item === selected ? [styles.container, { borderColor: colors.blueColor }] : styles.container}>
                            <Text style={item === selected ? [styles.textStyle, { color: colors.blueColor }] : styles.textStyle}>{item}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

export default VariationSection;