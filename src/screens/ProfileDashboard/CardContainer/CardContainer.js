import React from 'react';
import {
    Text, TouchableOpacity, View, Image, ScrollView,
} from 'react-native';
import styles from './styles';

/* Config/Constants
============================================================================= */
const cardData = [
    {
        img: require('../../../assets/images/MainLanding/carosel_img_3.png'),
        title: 'Order No. 10363',
        subTitle: 'Delivery Service',
        status: 'In Delivery',
        action: 'Track',
    },
    {
        img: require('../../../assets/images/MainLanding/shop-2-collage-2.png'),
        title: 'Order No. 10352',
        subTitle: 'Multiple Items/Shops',
        status: 'In Delivery',
        action: 'Track',
    },
    {
        img: require('../../../assets/images/MainLanding/carosel_img_3.png'),
        title: 'Order No. 10363',
        subTitle: 'Delivery Service',
        status: 'In Delivery',
        action: 'Track',
    },
];

function cardContainer(props) {
    return (
        <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.mainCardContainer}>
                {
                    cardData.map((data, ind) => (
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => props.navigationObj.navigate('OrderDetail')}
                            key={ind}
                            style={styles.cardContainer}
                        >
                            <View style={styles.leftContainer}>
                                <Image
                                    source={data.img}
                                    resizeMode="cover"
                                    style={[styles.imgResponsive, styles.roundedBorder]}
                                />
                            </View>
                            <View style={styles.rightContainer}>
                                <View style={styles.subRightContainer}>
                                    <View style={styles.titleContainer}>
                                        <Text style={styles.titleStyle}>{data.title}</Text>
                                        <View style={styles.rightArrowContainer}>
                                            <Image
                                                source={require('../../../assets/images/ProfileDashboard/rightArrow.png')}
                                                resizeMode="contain"
                                                style={styles.imgResponsive3}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.subTitleContainer}>
                                        <Text style={styles.subTtitleStyle}>{data.subTitle}</Text>
                                    </View>
                                    <View style={styles.actionsContainer}>
                                        <View style={styles.subActionsContainer}>
                                            <Text style={styles.statusStyle}>{data.status}</Text>
                                            <TouchableOpacity
                                                activeOpacity={0}
                                                onPress={() => props.navigationObj.navigate('TrackOrder')}
                                                style={styles.actionContainer}>
                                                <Text style={styles.actionStyle}>{data.action}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </ScrollView>
    );
}

export default cardContainer;
