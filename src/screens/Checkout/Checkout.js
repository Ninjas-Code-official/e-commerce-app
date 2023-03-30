import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { verticalScale } from '../../utils/scaling';
import BottomTab from '../../components/BottomTab/BottomTab';
import BlueBtn from '../../ui/Buttons/BlueBtn';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHeader } from '../../components/Headers/Headers';

/* Config/Constants
============================================================================= */
const DATA = [
    { name: 'Leather Crossbody MID Bag', amount: 3, price: 120 },
    { name: 'Ves Bread Storage', amount: 1, price: 35 },
];

function Checkout(props) {
    function renderItem(item, index) {
        return (
            <View key={index} style={styles.listItem}>
                <View style={styles.simpleRow}>
                    <Text style={styles.itemBoldText}>
                        {item.amount}x{' '}
                    </Text>
                    <Text style={styles.itemBoldText}>{item.name}</Text>
                </View>
                <Text style={styles.itemBlueText}>
                    {item.price}{' '}PKR
                </Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.flex}>
            <View style={[styles.flex, styles.mainContainer]}>
                <BackHeader
                    title="Summary"
                    backPressed={() => props.navigation.goBack()} />
                <View style={styles.container}>
                    <View style={styles.body}>
                        <View style={styles.main}>
                            <View style={styles.main_top}>
                                <View style={styles.orders}>
                                    <View style={styles.row}>
                                        <Text style={styles.goldenText}>
                                            My Orders
                                            </Text>
                                        <TouchableOpacity
                                            activeOpacity={0}
                                            onPress={() => console.log('Pressed Edit')}>
                                            <Image
                                                source={require('../../assets/icons/edit.png')}
                                                style={{
                                                    height: verticalScale(16),
                                                    width: verticalScale(16),
                                                }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[styles.simpleRow, styles.padding]}>
                                        <Image
                                            source={require('../../assets/icons/delivery.png')}
                                            style={{
                                                height: verticalScale(13),
                                                width: verticalScale(25),
                                            }}
                                        />
                                        <Text style={styles.deliveryDate}>
                                            Delivery Date: 2/10/2019
                                            </Text>
                                    </View>
                                    <View style={styles.items}>
                                        <ScrollView showsVerticalScrollIndicator={false}>
                                            {DATA.map((item, index) => renderItem(item, index))}
                                        </ScrollView>
                                    </View>
                                </View>

                                <View style={styles.address}>
                                    <Text style={styles.goldenText}>
                                        Deliver to
                                        </Text>
                                    <View style={styles.addressDetail}>
                                        <Text style={styles.addressSmallText}>
                                            Sharan Khan
                                            </Text>
                                        <Text style={styles.addressSmallText}>
                                            sharan.gohar@gmail.com
                                            </Text>
                                        <Text style={styles.addressSmallText}>
                                            +92 3339461270
                                            </Text>
                                    </View>
                                    <View style={styles.borderBottom}>
                                        <View style={styles.row}>
                                            <Text style={styles.addressBoldText}>Pakistan</Text>
                                            <TouchableOpacity
                                                activeOpacity={0}
                                                onPress={() => console.log('Pressed Edit')}>
                                                <Image
                                                    source={require('../../assets/icons/edit.png')}
                                                    style={{
                                                        height: verticalScale(16),
                                                        width: verticalScale(16),
                                                    }}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={styles.addressBoldText}>Ali Sabah Alsaelem,</Text>
                                        <Text style={styles.addressBoldText}>Block 4, AParatment 102</Text>
                                        <Text style={styles.addressBoldText}>P.O Box 65000</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.main_bot}>
                                <View style={styles.subtotal_container}>
                                    <View style={styles.row}>
                                        <Text style={styles.text}> Total</Text>
                                        <Text style={styles.text}>191 PKR</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.text}>Delivery</Text>
                                        <Text style={styles.text}>1 PKR</Text>
                                    </View>
                                </View>
                                <View style={styles.total_container}>
                                    <View style={styles.row}>
                                        <Text style={styles.text_bold}>Total</Text>
                                        <Text style={styles.text_blue}>192 PKR</Text>
                                    </View>
                                </View>
                                <View style={styles.submit_container}>
                                    <BlueBtn
                                        onPress={() => props.navigation.navigate('CheckoutPayment')}
                                        text="Pay"
                                    />
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

export default Checkout;
