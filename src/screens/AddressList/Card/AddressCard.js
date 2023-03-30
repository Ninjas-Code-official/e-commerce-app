import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity, Image,
} from 'react-native';

import styles from './styles';
import { verticalScale } from '../../../utils/scaling';
import { SafeAreaView } from 'react-native-safe-area-context';

/* =============================================================================
<Card />
A component that displays address info.
--------------------------------------------------------------------------------
Props:
  ?
  name: Title of the address ie Home, Work
  country:
  city:
  address:
  poBox:
============================================================================= */

function Card(props) {
    const isDefault = props.default
    const buttonJSX = isDefault ? renderSelectedButton() : renderUnselectedButton();

    function toggleActive() {
        props.defaultSetter()
    }

    function renderSelectedButton() {
        return (
            <TouchableOpacity
                activeOpacity={0}
                onPress={() => { toggleActive() }} style={styles.selectedBtn}>

                <Image
                    style={styles.tickImage}
                    source={require('../../../assets/icons/tick.png')}
                />
                <Text style={styles.selectedText}>My Default Address</Text>
            </TouchableOpacity>
        );
    }

    function renderUnselectedButton() {
        return (
            <TouchableOpacity
                activeOpacity={0}
                style={styles.unselectedButton} onPress={() => { toggleActive(); }}>
                <Text style={styles.unselectedText}>Mark it as Default Address</Text>
            </TouchableOpacity>
        );
    }


    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Text style={styles.titleText}>
                    {' '}{props.title}
                </Text>
                <TouchableOpacity
                    activeOpacity={0}
                    onPress={() => props.navigationObj.navigate('EditingAddress')}
                >
                    <Image
                        style={{ height: verticalScale(16), width: verticalScale(16) }}
                        source={require('../../../assets/icons/edit.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.address}>
                <Text style={styles.addressText}>{props.country}</Text>
                <Text style={styles.addressText}>{props.city}</Text>
                <Text style={styles.addressText}>{props.address}</Text>
                <Text style={styles.addressText}>{props.poBox}</Text>
            </View>
            <View style={styles.btnContainer}>
                {buttonJSX}
            </View>
        </View>
    );
}

export default Card;