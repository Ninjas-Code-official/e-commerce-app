import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Dropdown from '../../ui/Dropdowns/Dropdown';
import SearchBar from '../../ui/SearchBar/SearchBar';
import CategoryCard from './CategoryCard/CategoryCard';
import BottomTab from '../../components/BottomTab/BottomTab';
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

function Search(props) {
    return (
        <SafeAreaView style={styles.flex}>
            <View style={[styles.flex, styles.mainContainer]}>
                <View style={styles.container}>
                    <View style={[styles.body]}>
                        <View style={[styles.header]}>
                            <Text style={styles.header_text}>Search  In  </Text>
                            <Dropdown items={CATEGORIES} />
                        </View>
                        <View style={[styles.main]}>
                            <View style={styles.searchBarContainer}>
                                <SearchBar onPress={() => props.navigation.navigate('SearchResult')} placeholderText="What are you looking for?" />
                            </View>
                            <View style={styles.mainBodyContainer}>
                                <View style={styles.mixed_text}>
                                    <Text style={styles.text}>Our
                                        <Text style={styles.colored_text}>1342 </Text>
                                        <Text style={styles.text}>Products are distributed in these categories</Text>
                                    </Text>
                                </View>
                                <View style={styles.mainBody}>
                                    <View>
                                        <View style={styles.row}>
                                            <CategoryCard
                                                onPress={() => props.navigation.navigate('ProductListing')}
                                                text="Accessories"
                                            />
                                            <CategoryCard
                                                onPress={() => props.navigation.navigate('ProductListing')}
                                                text="Arts & Crafts"
                                            />
                                        </View>
                                        <View style={styles.row}>
                                            <CategoryCard
                                                onPress={() => props.navigation.navigate('ProductListing')}
                                                text="Event Ideas"
                                            />
                                            <CategoryCard text="Fashion" />
                                        </View>
                                        <View style={styles.row}>
                                            <CategoryCard
                                                onPress={() => props.navigation.navigate('ProductListing')}
                                                text="Food & Drinks"
                                            />
                                            <CategoryCard
                                                onPress={() => props.navigation.navigate('ProductListing')}
                                                text="Health & Beauty"
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.footer}>
                        </View>
                    </View>
                </View>
            </View>
            <BottomTab
                navigationObj={props.navigation}
            />
        </SafeAreaView>
    );
}

export default Search;
