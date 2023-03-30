import React from 'react';
import {
    View, FlatList
} from 'react-native';
import styles from './styles';
import BottomTab from '../../components/BottomTab/BottomTab';
import { PRODUCTS } from '../../utils/mockData';
import ProductCard from '../../ui/ProductCard/ProductCard';
import { BackHeader } from '../../components/Headers/Headers';
import { SafeAreaView } from 'react-native-safe-area-context';

function ProductListing(props) {
    return (
        <SafeAreaView style={styles.flex}>
            <View style={[styles.flex,styles.container]}>
                <BackHeader
                    title='Arts & Crafts'
                    backPressed={() => props.navigation.goBack()}
                />
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={PRODUCTS}
                    renderItem={({ item }) => <ProductCard
                        styles={styles.productCard}
                        cardPressed={() => props.navigation.navigate('ProductDescription')}
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

export default ProductListing;