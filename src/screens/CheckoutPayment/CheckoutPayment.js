import React, { useState } from 'react';
import {
    View, Text, TextInput,
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import BlueBtn from '../../ui/Buttons/BlueBtn';
import ViewCard from './Card/ViewCard';
import styles from './styles';
import { colors } from '../../utils/colors';
import BottomTab from '../../components/BottomTab/BottomTab';
import CheckoutReciept from './CheckoutReciept/CheckoutReciept';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHeader } from '../../components/Headers/Headers';

/* Config/Constants
============================================================================= */
const DATA = [
    { cardNumber: '1234123412344567', expiry: { month: 11, year: 22 }, cardHolderName: 'John M. Smith' },
    { cardNumber: '1234123412344212', expiry: { month: 18, year: 25 }, cardHolderName: 'Kevin M. Louise' },
];


function CheckoutPayment(props) {
    const [modalVisible, setModalVisible] = useState(false)

    function showModal() {
        setModalVisible(true)
    }

    function hideModal() {
        setModalVisible(false)
    }
    return (
        <SafeAreaView style={styles.flex}>
            <View style={[styles.flex, styles.mainContainer]}>
                <BackHeader
                    title="Payment"
                    backPressed={() => props.navigation.goBack()} />
                <View style={styles.container}>
                    <CheckoutReciept
                        navigationObj={props.navigation}
                        modalVisible={modalVisible}
                        hideModal={hideModal}
                    />
                    <View style={styles.body}>
                        <View style={styles.main}>
                            <View style={styles.mainTop}>
                                <View style={styles.mainTopHeadline}>
                                    <Text style={styles.headlineText}>Choose one of your saved card(s)</Text>
                                </View>
                                <View style={styles.cardContainer}>
                                    <SwiperFlatList
                                        paginationDefaultColor={colors.grayLinesColor}
                                        paginationActiveColor="#000"
                                        paginationStyleItem={styles.paginationItem}
                                        autoplayLoop
                                        showPagination
                                    >
                                        {
                                            DATA.map((item, index) => (
                                                <View
                                                    key={index}
                                                    style={styles.card}
                                                >
                                                    <ViewCard
                                                        data={item}
                                                    />
                                                </View>
                                            ))
                                        }
                                    </SwiperFlatList>
                                </View>

                            </View>
                            <View style={styles.mainBot}>
                                <View style={styles.subtotalContainer}>
                                    <View style={styles.row}>
                                        <Text style={styles.text}>Card Number</Text>
                                        <Text style={styles.text}>
                                            {'\u002A'}
                                            {'\u002A'}
                                            {'\u002A'}
                                            {'\u002A'}
                                            {' '}
                                            {'\u002A'}
                                            {'\u002A'}
                                            {'\u002A'}
                                            {'\u002A'}
                                            {' '}
                                            {'\u002A'}
                                            {'\u002A'}
                                            {'\u002A'}
                                            {'\u002A'}
                                            {' '}
                                                4567
                                    </Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.text}>CVV</Text>
                                        <View style={styles.cvvContainer}>
                                            <TextInput
                                                editable={false}
                                                maxLength={3}
                                                keyboardType="numeric"
                                                style={styles.cvvInput}
                                                placeholder="CVV"
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.totalContainer}>
                                    <View style={styles.row}>
                                        <Text style={styles.textBold}>Total</Text>
                                        <Text style={styles.textBlue}>192 PKR</Text>
                                    </View>
                                </View>
                                <View style={styles.submitContainer}>
                                    <BlueBtn
                                        onPress={() => showModal()}
                                        text="Pay"
                                    />
                                </View>
                            </View>
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


export default CheckoutPayment;