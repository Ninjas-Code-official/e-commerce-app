import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { colors } from '../../../utils/colors';


function ViewCard(props) {
    const [isActive, setIsActive] = useState(false)
    const outlineColor = isActive ? colors.textBlueColor : colors.secondaryWhiteColor;

    return (
        <TouchableOpacity
            onPress={() => setIsActive(!isActive)}
            style={[styles.outline, { borderColor: outlineColor }]}>
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Image
                        style={styles.simCardImage}
                        source={require('../../../assets/icons/simcard.png')}
                    />
                </View>
                <View style={styles.botContainer}>
                    <View style={[styles.row, styles.creditCardNumber]}>
                        <Text style={styles.ccText}>
                            {'\u2B24'}
                            {' '}
                            {'\u2B24'}
                            {' '}
                            {'\u2B24'}
                            {' '}
                            {'\u2B24'}
                        </Text>
                        <Text style={styles.ccText}>
                            {'\u2B24'}
                            {' '}
                            {'\u2B24'}
                            {' '}
                            {'\u2B24'}
                            {' '}
                            {'\u2B24'}
                        </Text>
                        <Text style={styles.ccText}>
                            {'\u2B24'}
                            {' '}
                            {'\u2B24'}
                            {' '}
                            {'\u2B24'}
                            {' '}
                            {'\u2B24'}
                        </Text>
                        <Text style={styles.ccText}>4 5 6 7</Text>

                    </View>

                    <View style={styles.expiryContainer}>
                        <View>
                            <Text style={styles.expiryText}>VALID</Text>
                            <Text style={styles.expiryText}>THRU</Text>
                        </View>
                        <View style={styles.expiryMonthYear}>
                            <Text style={styles.expiryNumberText}>{props.data.expiry.month}/{props.data.expiry.year}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.cardOwnerName}>{props.data.cardHolderName}</Text>
                        <Image
                            style={styles.visaImage}
                            source={require('../../../assets/icons/visa.png')}
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ViewCard;