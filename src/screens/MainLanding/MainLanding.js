import React from 'react';
import {
    View, TouchableOpacity, Image, FlatList, Text, ImageBackground
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { DrawerActions } from '@react-navigation/native';
import styles from './styles';
import { verticalScale } from '../../utils/scaling';
import CategoryCard from '../../ui/CategoryCard/CategoryCard';
import BottomTab from '../../components/BottomTab/BottomTab';
import { OFFERS, PRODUCTS, CATEGORIES } from '../../utils/mockData';
import ProductCard from '../../ui/ProductCard/ProductCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const caroselImage = [
    require('../../assets/images/MainLanding/banner-1.png'),
    require('../../assets/images/MainLanding/recommended_2.png'),
    require('../../assets/images/MainLanding/carosel_img_3.png'),
    require('../../assets/images/MainLanding/banner-1.png'),
    require('../../assets/images/MainLanding/recommended_2.png'),
    require('../../assets/images/MainLanding/carosel_img_3.png'),
]

function renderCarosel(props) {
    return (
        <View style={styles.caroselContainer}>
            <SwiperFlatList
                index={0}
                showPagination
                autoplay
                autoplayDelay={3}
                autoplayLoop={true}
                paginationActiveColor="#fff"
                paginationStyle={{ marginBottom: '7%' }}
                paginationStyleItem={{ height: verticalScale(8), width: verticalScale(8), marginLeft: 0 }}
            >
                {Array(caroselImage.length).fill(0).map((value, index) => (
                    <ImageBackground
                        key={index}
                        source={caroselImage[index]}
                        style={styles.caroselStyle}
                    />
                ))}
            </SwiperFlatList>
            <TouchableOpacity
                activeOpacity={0}
                onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
                style={styles.menuDrawerContainer}
            >
                <Image
                    source={require('../../assets/images/MainLanding/menu_icon.png')}
                    style={styles.imgResponsive}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    )
}
function MainLanding(props) {
    return (
        <SafeAreaView style={styles.flex}>
            <View style={[styles.grayBackground, styles.flex]}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    ListHeaderComponent={() =>
                        <>
                            {renderCarosel(props)}
                            <View style={styles.categoryContainer}>
                                {CATEGORIES.map((category, index) => {
                                    return (
                                        <CategoryCard
                                            key={index}
                                            cardLabel={category.label}
                                            navigationObj={props.navigation}
                                        />
                                    )
                                })}
                            </View>
                            {
                                OFFERS.map((offer, index) => {
                                    return (
                                        <View key={index} style={styles.titleSpacer}>
                                            <Text style={styles.headingText}>{offer.offer_name}</Text>
                                            <FlatList
                                                horizontal={true}
                                                showsHorizontalScrollIndicator={false}
                                                keyExtractor={(item, index) => index.toString()}
                                                data={offer.items}
                                                renderItem={({ item, index }) => {
                                                    return (
                                                        <View
                                                            key={index}
                                                            style={styles.itemCardContainer}>
                                                            <ProductCard
                                                                cardPressed={() => props.navigation.navigate('ProductListing')}
                                                                item={item} />
                                                        </View>
                                                    )
                                                }}
                                            />
                                        </View>
                                    )
                                })
                            }
                            <View style={styles.titleSpacer}>
                                <Text style={styles.headingText}>All Items</Text>
                            </View>
                        </>
                    }
                    data={PRODUCTS}
                    renderItem={({ item }) => <ProductCard
                        styles={styles.productCard}
                        cardPressed={() => props.navigation.navigate('ProductListing')}
                        item={item} />
                    }

                />
                <BottomTab
                    navigationObj={props.navigation}
                />
            </View>
        </SafeAreaView>
    );
}
export default MainLanding;