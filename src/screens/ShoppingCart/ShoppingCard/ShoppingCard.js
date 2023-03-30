import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../../../utils/colors';

const images = {
    shop_2_collage_2: require('../../../assets/images/MainLanding/shop-2-collage-2.png'),
    belt: require('../../../assets/images/ProductListing/belt.png')
}

function ShoppingCard(props) {
    const [liked, setLiked] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.removeContainer}>
                    <Ionicons name="ios-close-circle" size={30} color={colors.darkGrayText} />
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.imgContainer}>
                        <Image
                            source={images[props.item.image]}
                            style={styles.imgResponsive}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemDetailContainer}>
                            <Text style={styles.titleStyle} numberOfLines={1}>{props.item.name}</Text>
                            <Text style={styles.descStyle} numberOfLines={1}>{props.item.category}</Text>
                        </View>
                        <View style={styles.quantityContainer}>
                            <Text style={styles.sizeStyle}>{props.item.size}</Text>
                            <View style={styles.quantitySelContainer}>
                                <TouchableOpacity
                                    activeOpacity={0}
                                    style={styles.quantityIconStyle}
                                    activeOpacity={1}>
                                    <Ionicons name="ios-arrow-back" size={25} />
                                </TouchableOpacity>
                                <Text style={styles.quantityTextStyle}>{props.item.quantity}</Text>
                                <TouchableOpacity
                                    activeOpacity={0}
                                    style={styles.quantityIconStyle}>
                                    <Ionicons name="ios-arrow-forward" size={25} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.bottomContainer}>
                            <TouchableOpacity
                                activeOpacity={0}
                                onPress={() => setLiked(!liked)}
                                style={styles.likeContainer}>
                                <Ionicons name={liked ? "ios-heart" : "ios-heart-empty"} size={25} />
                                <Text style={styles.likeTextStyle}>Save</Text>
                            </TouchableOpacity>
                            <View style={styles.priceContainer}>
                                <Text style={styles.actualPriceStyle}>${props.item.prev_price}</Text>
                                <Text style={styles.discountedPriceStyle}>${props.item.new_price}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default ShoppingCard;