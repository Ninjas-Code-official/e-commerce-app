import React from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import BottomTab from '../../components/BottomTab/BottomTab';
import { verticalScale } from '../../utils/scaling';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHeader } from '../../components/Headers/Headers';

function EditingProfile(props) {
    return (
        <SafeAreaView style={styles.flex}>
            <View style={[styles.flex, styles.mainContainer]}>
                <BackHeader
                    title="Editing Profile"
                    backPressed={() => props.navigation.goBack()} />
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.formMainContainer}>
                        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : null} keyboardVerticalOffset={100}>
                            <View style={styles.formContainer}>
                                <View style={styles.profileImageContainer}>
                                    <Image
                                        source={require('../../assets/images/mainMenu/menu_avatar.png')}
                                        style={styles.imgResponsive}
                                        resizeMode="contain"
                                    />
                                </View>
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
                                                <Text style={styles.label}>Email</Text>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={[styles.flex, styles.inputText]}
                                                    placeholder="sharan.gohar@gmail.com"
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
                                    <View style={styles.twoItemsContainer}>
                                        <View style={styles.halfContainer}>
                                            <View style={styles.labelContainer}>
                                                <Text style={styles.label}>Date of Birth</Text>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={[styles.flex, styles.inputText]}
                                                    placeholder="16-06-1993"
                                                    placeholderTextColor="black"
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.halfContainer}>
                                            <View style={styles.labelContainer}>
                                                <Text style={styles.label}>Gender</Text>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={[styles.flex, styles.inputText]}
                                                    placeholder="Male"
                                                    placeholderTextColor="black"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.addContainer}>
                                        <TouchableOpacity
                                        activeOpacity={0}
                                            onPress={() => props.navigation.navigate('ProfileDashboard')}
                                            style={styles.addBtn}
                                        >
                                            <Text style={styles.addStyle}>Save</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </ScrollView>
                <BottomTab
                    navigationObj={props.navigation}
                />
            </View>
        </SafeAreaView>
    );
}

export default EditingProfile;
