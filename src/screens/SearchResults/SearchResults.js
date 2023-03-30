import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { verticalScale } from '../../utils/scaling';
import Dropdown from '../../ui/Dropdowns/Dropdown';
import SearchBar from '../../ui/SearchBar/SearchBar';
import BottomTab from '../../components/BottomTab/BottomTab';
import FullCard from './Card/FullCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const CATEGORIES = [
    {
        value: 'Arts & Crafts',
    },
    {
        value: 'Event Ideas',
    },
    {
        value: 'Food & Drinks',
    },
    {
        value: 'Accessories',
    },
    {
        value: 'Fashion'

    },
    {
        value: 'Health & Beauty'
    }
];
const DATA = [
    {
        name: 'Leather crossbody MID Bag',
        rating: 5,
        totalVotes: 401,
        prev_price: null,
        price: 120,
        bagde: 'new',
        image: require('../../assets/images/MainLanding/shop-2-collage-2.png'),
    },
    {
        name: "Photographer's belt and harness",
        rating: 3,
        totalVotes: 274,
        prev_price: 39,
        price: 29,
        bagde: null,
        image: require('../../assets/images/ProductListing/belt.png'),
    },

];
const searchedTerm = 'Leather'

function SearchResult(props) {
    return (
        <SafeAreaView style={styles.flex}>
            <View style={[styles.flex, styles.mainContainer]}>
                <View style={[styles.body]}>
                    <View style={[styles.header]}>
                        <View style={[styles.headerLeft]}>
                            <Text style={[styles.header_text]}>Search  In  </Text>
                            <Dropdown items={CATEGORIES} />
                        </View>
                        <TouchableOpacity
                            activeOpacity={0}
                            onPress={() => console.log('Show modal')}>
                            <Image
                                style={{ height: verticalScale(32), width: verticalScale(42), marginBottom: verticalScale(5) }}
                                source={require('../../assets/icons/header.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.main]}>
                        <View style={styles.searchBarContainer}>
                            <SearchBar placeholderText={searchedTerm} />
                        </View>
                        <View style={styles.mainBodyContainer}>
                            <View style={styles.mainBody}>
                                <View style={styles.mixed_text}>
                                    <Text style={styles.bold}>
                                        {DATA.length}
                                    </Text>
                                    <Text style={styles.text}>
                                        results found for:
                                            </Text>
                                    <Text style={styles.bold}>
                                        {searchedTerm}
                                    </Text>
                                </View>
                                <ScrollView style={styles.main_scroller}>
                                    {DATA.map((item, i) => (
                                        <FullCard
                                            productImage={item.image}
                                            productName={item.name}
                                            productRating={item.rating}
                                            productTotalVotes={item.totalVotes}
                                            productBadge={item.bagde}
                                            productPreviousPrice={item.prev_price}
                                            productNewPrice={item.price}
                                            key={i}
                                        />
                                    ))}
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                    <View style={styles.footer}>
                    </View>
                </View>
            </View>
            <BottomTab
                navigationObj={props.navigation}
            />
        </SafeAreaView>
    )
}

export default SearchResult;