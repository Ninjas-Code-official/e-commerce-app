import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

function BottomTab(props) {
    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity
                onPress={() => props.navigationObj.navigate('MainLanding')}
                style={styles.footerBtnContainer}
            >
                <View style={styles.imgContainer}>
                    <Image
                        source={require('../../assets/images/footer/home.png')}
                        style={styles.imgResponsive}
                        resizeMode="contain"
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigationObj.navigate('Search')}
                style={styles.footerBtnContainer}
            >
                <View style={styles.imgContainer}>
                    <Image
                        source={require('../../assets/images/footer/search.png')}
                        style={styles.imgResponsive}
                        resizeMode="contain"
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigationObj.navigate('ProfileDashboard')}
                style={styles.footerBtnContainer}
            >
                <View style={styles.profileContainer}>
                    <Image
                        source={require('../../assets/images/footer/profile.png')}
                        style={styles.imgResponsive}
                        resizeMode="contain"
                    />
                    <View style={styles.profileBadge} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigationObj.navigate('ShoppingCart')}
                style={styles.footerBtnContainer}
            >
                <View style={styles.shoppingContainer}>
                    <Image
                        source={require('../../assets/images/footer/shopping.png')}
                        style={styles.imgResponsive}
                        resizeMode="contain"
                    />
                    <View style={styles.shoppingBadgeContainer}>
                        <Text style={styles.shoppingBadgeStyle}>x5</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default BottomTab;
