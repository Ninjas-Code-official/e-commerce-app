import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView, ScrollView, Platform, StatusBar } from 'react-native';
import styles from './styles';
import { verticalScale } from '../../utils/scaling';
import TextField from '../../ui/Textfield/Textfield';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import MainBtn from '../../ui/Buttons/MainBtn';
import { SafeAreaView } from 'react-native-safe-area-context';

function SignIn(props) {
    const [modalVisible, setModalVisible] = useState(false)

    function showModal() {
        setModalVisible(true)
    }

    function hideModal() {
        setModalVisible(false)
    }

    return (
        <SafeAreaView style={styles.flex}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={[styles.flex, { marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }]}>
                <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.container}>
                        <ForgotPassword
                            modalVisible={modalVisible}
                            hideModal={hideModal}
                        />
                        <View style={styles.body}>
                            <View style={styles.bodyHeader}>
                                <Image
                                    source={require('../../assets/icons/avatar.png')}
                                    style={{
                                        height: verticalScale(18),
                                        width: verticalScale(16),
                                    }}
                                />
                                <Text style={styles.headerText}>Sign In</Text>
                            </View>
                            <View style={styles.bodyContainer}>
                                <ImageBackground
                                    style={styles.bodyContainerBackground}
                                    source={require('../../assets/images/formBackground.png')}
                                >
                                    <View style={styles.bcTexts}>
                                        <Text style={styles.bcH1}>
                                            Hello Guest!
                                </Text>
                                        <Text style={styles.bcH2}>
                                            Sign In
                                </Text>
                                    </View>
                                    <View style={styles.bcMain}>
                                        <TextField
                                            placeholder="Username"
                                        />
                                        <TextField
                                            placeholder="Password"
                                        />
                                        <MainBtn
                                            onPress={() => props.navigation.navigate('noDrawer', { screen: 'MainLanding' })}
                                            text="Sign In"
                                        />
                                        <TouchableOpacity
                                            activeOpacity={0}
                                            onPress={() => showModal()}>
                                            <Text style={styles.passwordText}>
                                                Forgot my password
                                  </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.bcSocialBtns}>
                                        <View style={[styles.socialBtnsView, styles.googleBtn]}>
                                            <TouchableOpacity
                                                activeOpacity={0}
                                                onPress={() => props.navigation.navigate('noDrawer', { screen: 'MainLanding' })}
                                                style={styles.socialBtn}
                                            >
                                                <Image
                                                    source={require('../../assets/icons/google.png')}
                                                    style={{
                                                        height: verticalScale(25),
                                                        width: verticalScale(25),
                                                    }}
                                                />
                                                <Text style={styles.fbText}>Google</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={[styles.socialBtnsView, styles.facebookBtn]}>
                                            <TouchableOpacity
                                                activeOpacity={0}
                                                onPress={() => props.navigation.navigate('noDrawer', { screen: 'MainLanding' })}
                                                style={styles.socialBtn}
                                            >
                                                <Image
                                                    source={require('../../assets/icons/facebook.png')}
                                                    style={{
                                                        height: verticalScale(24),
                                                        width: verticalScale(24),
                                                    }}
                                                />
                                                <Text style={styles.fbText}>Facebook</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                            <View style={styles.bodyFooter}>
                                <View style={styles.footer}>
                                    <View style={styles.mixedLine}>
                                        <Text style={[styles.ftText, styles.boldText]}>Create New Account: </Text>
                                        <Text style={styles.ftText}>By creating a new account, you</Text>
                                    </View>
                                    <Text style={styles.ftText}>
                                        will become a valuable customer/buyer to Enatega by
                            </Text>
                                    <View style={styles.mixedLine}>
                                        <Text style={styles.ftText}>default. While registering, </Text>
                                        <Text
                                            onPress={() => props.navigation.navigate('SignUp')}
                                            style={[styles.ftUnderline, styles.ftText]}
                                        >you can also choose to
                                </Text>
                                    </View>
                                    <Text
                                        onPress={() => props.navigation.navigate('SignUp')}
                                        style={[styles.ftUnderline, styles.ftText]}
                                    >
                                        become a seller and open your own shop
                          </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default SignIn;