import React from 'react';
import {
    View, Text, ImageBackground, ScrollView, KeyboardAvoidingView, StatusBar, Dimensions
} from 'react-native';
import styles from './styles';
import { scale } from '../../utils/scaling';
import TextField from '../../ui/Textfield/Textfield';
import MainBtn from '../../ui/Buttons/MainBtn';
import AlternateBtn from '../../ui/Buttons/AlternateBtn';
import { SafeAreaView } from 'react-native-safe-area-context';

function SignUp(props) {
    return (
        <SafeAreaView style={styles.flex}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={[styles.flex, { marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }]}>
                <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <View style={styles.container}>
                        <View style={styles.body}>
                            <View style={styles.header}>
                                <Text style={styles.headerText}>Sign Up</Text>
                                <AlternateBtn
                                    onPress={() => props.navigation.navigate('noDrawer', { screen: 'MainLanding' })}
                                    text="Continue as a Guest"
                                />
                            </View>
                            <View style={styles.main}>
                                <ImageBackground
                                    style={styles.bodyContainerBackground}
                                    source={require('../../assets/images/formBackground.png')}
                                    resizeMode="cover"
                                >
                                    <View style={styles.mainTop}>
                                        <Text style={styles.h1Text}>Hello Guest!</Text>
                                        <Text style={styles.h2Text}> Sign Up</Text>
                                    </View>
                                    <View style={styles.mainMid}>
                                        <TextField placeholder="Full Name" style={{ marginBottom: scale(10) }} />
                                        <TextField placeholder="Email" style={{ marginBottom: scale(10) }} />
                                        <TextField placeholder="Mobile" style={{ marginBottom: scale(10) }} />
                                        <TextField placeholder="Password" style={{ marginBottom: scale(10) }} />
                                    </View>
                                    <View style={styles.mainBot}>
                                        <View style={styles.botBtnContainer}>
                                            <MainBtn
                                                onPress={() => props.navigation.navigate('Auth', { screen: 'SignIn' })}
                                                text="Sign up"
                                            />
                                        </View>
                                        <View style={styles.mixedLine}>
                                            <Text style={[styles.ft_text]}>Already have an account: </Text>
                                            <Text
                                                onPress={() => props.navigation.navigate('Auth', { screen: 'SignIn' })}
                                                style={[styles.ft_text, styles.ftTextUnderline]}
                                            >Sign in
                                  </Text>
                                        </View>
                                    </View>

                                </ImageBackground>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default SignUp;