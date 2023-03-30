import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'

function Button(props) {
    return (
        <TouchableOpacity
        activeOpacity={0}
        onPress={props.onPress}
        style={[styles.container,props.containerStyle]}>
            <Text style={[styles.text,props.textStyle]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default Button;