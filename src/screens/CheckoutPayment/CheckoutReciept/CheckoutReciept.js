import React from 'react';
import {
    Text, TouchableOpacity, View, Image,
} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';

function CheckoutReceipt(props) {
    return (
        <Modal
            isVisible={props.modalVisible}
            onBackdropPress={props.hideModal}
            onBackButtonPress={props.hideModal}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.imageContainer}>
                        <View style={styles.imageSubContainer}>
                            <Image
                                source={require('../../../assets/icons/shoppingBagTick.png')}
                                resizeMode="contain"
                                style={styles.imageResponsive}
                            />
                        </View>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleStyle}>Hey Sharan,</Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleStyle}>Thanks for your purchase.</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateStyle}>Sunday 20, Jan 2019</Text>
                    </View>
                    <View style={styles.fullWidth}>
                        <View style={styles.halfWidth}>
                            <Text style={styles.normalStyle}>Total</Text>
                        </View>
                        <View style={[styles.halfRightWidth]}>
                            <Text style={styles.blueFont}>193 PKR</Text>
                        </View>
                    </View>
                    <View style={styles.fullWidth}>
                        <View style={styles.halfWidth}>
                            <Text style={styles.normalStyle}>Order Number</Text>
                        </View>
                        <View style={[styles.halfRightWidth]}>
                            <Text style={styles.blueFont}>#123456789</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0}
                        onPress={() => {
                            props.hideModal();
                            props.navigationObj.navigate('OrderDetail');
                        }
                        }
                        style={styles.btnContainer}
                    >
                        <Text style={styles.btnStyle}>Order Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0}
                        onPress={() => {
                            props.hideModal();
                            props.navigationObj.navigate('MainLanding');
                        }
                        }
                        style={styles.btnContainer}
                    >
                        <Text style={styles.btnStyle}>Continue Shopping</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

export default CheckoutReceipt;