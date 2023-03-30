import React from 'react';
import {
    View, Text, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity, Image
} from 'react-native';
import styles from './styles';
import BottomTab from '../../components/BottomTab/BottomTab';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHeader } from '../../components/Headers/Headers';

function EditingAddress(props) {
    return (
        <SafeAreaView style={styles.flex}>
            <View style={[styles.flex, styles.mainContainer]}>
                <BackHeader
                    title="My Addresses"
                    backPressed={() => props.navigation.goBack()} />
                <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : null} keyboardVerticalOffset={100}>
                    <View style={styles.formMainContainer}>
                        <View style={styles.nameAddressContainer}>
                            <View style={styles.nameAddressLabel}>
                                <Text style={styles.nameAddressLabelStyle}>Name of this address</Text>
                            </View>
                            <View style={styles.nameAddressInput}>
                                <TextInput
                                    placeholder="My Home"
                                    placeholderTextColor="#D0AD8A"
                                    style={styles.addressInputStyle}
                                />
                            </View>
                        </View>
                        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', flexGrow: 1 }}>
                            <View style={styles.formContainer}>
                                <View style={styles.formContentContainer}>
                                    <View style={styles.twoItemsContainer}>
                                        <View style={styles.halfContainer}>
                                            <View style={styles.labelContainer}>
                                                <Text style={styles.label}>First Name</Text>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={[styles.flex, styles.inputText]}
                                                    placeholder="Sharan"
                                                    placeholderTextColor="black"
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.halfContainer}>
                                            <View style={styles.labelContainer}>
                                                <Text style={styles.label}>Last Name</Text>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={[styles.flex, styles.inputText]}
                                                    placeholder="Khan"
                                                    placeholderTextColor="black"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.oneItemContainer}>
                                        <View style={styles.fullContainer}>
                                            <View style={styles.labelContainer}>
                                                <Text style={styles.label}>Phone Number</Text>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={[styles.flex, styles.inputText]}
                                                    placeholder="+92 3339461270"
                                                    placeholderTextColor="black"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.oneItemContainer}>
                                        <View style={styles.fullContainer}>
                                            <View style={styles.labelContainer}>
                                                <Text style={styles.label}>Pin your location on the map</Text>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={[styles.flex, styles.inputText]}
                                                    placeholder='25°17’52.6"N 55°51’40.4"E'
                                                    placeholderTextColor="black"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.twoItemsContainer}>
                                        <View style={styles.halfContainer}>
                                            <View style={styles.labelContainer}>
                                                <Text style={styles.label}>Region</Text>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={[styles.flex, styles.inputText]}
                                                    placeholder="Fedral"
                                                    placeholderTextColor="black"
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.halfContainer}>
                                            <View style={styles.labelContainer}>
                                                <Text style={styles.label}>City</Text>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={[styles.flex, styles.inputText]}
                                                    placeholder="Islamabad"
                                                    placeholderTextColor="black"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.twoItemsContainer}>
                                        <View style={styles.halfContainer}>
                                            <View style={styles.labelContainer}>
                                                <Text style={styles.label}>Apt/Villa Number</Text>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={[styles.flex, styles.inputText]}
                                                    placeholder="01"
                                                    placeholderTextColor="black"
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.halfContainer}>
                                            <View style={styles.labelContainer}>
                                                <Text style={styles.label}>Building/Villa Name</Text>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={[styles.flex, styles.inputText]}
                                                    placeholder="Block 4"
                                                    placeholderTextColor="black"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.oneItemContainer}>
                                        <View style={styles.fullContainer}>
                                            <View style={styles.labelContainer}>
                                                <Text style={styles.label}>Additional Details</Text>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={[styles.flex, styles.inputText]}
                                                    placeholder="N/A"
                                                    placeholderTextColor="black"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.addContainer}>
                                <TouchableOpacity
                                    activeOpacity={0}
                                    onPress={() => props.navigation.navigate('AddressList')}
                                    style={styles.addBtn}
                                >
                                    <Text style={styles.addStyle}>Add new address</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
                <BottomTab
                    navigationObj={props.navigation}
                />
            </View >
        </SafeAreaView >
    );
}

export default EditingAddress;