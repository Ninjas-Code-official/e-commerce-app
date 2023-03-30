import { Dimensions, Platform, StatusBar } from 'react-native';
import { verticalScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';
const { height, width } = Dimensions.get('window');

export default {
    flex: {
        flex: 1,
    },
    mainContainer: {
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    formMainContainer: {
        flex: 1,
        backgroundColor: colors.backgroudGray,
        alignItems: 'center',
    },
    formContainer: {
        width: '90%',
        height: height * 0.8,
        backgroundColor: colors.whiteColor,
        borderRadius: verticalScale(8),
        alignItems: 'center',
    },
    imgResponsive: {
        width: '60%',
        height: '60%',
    },
    formContentContainer: {
        marginTop: '3%',
        width: '95%',
        height: '80%',
    },
    twoItemsContainer: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    halfContainer: {
        width: '45%',
        height: '80%',
    },
    labelContainer: {
        width: '100%',
        height: '40%',
    },
    inputContainer: {
        width: '100%',
        height: '60%',
        borderRadius: verticalScale(3),
        padding: verticalScale(5),
        justifyContent:'center',
        backgroundColor: colors.backgroudGray,
    },
    label: {
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.darkGrayText,
        fontSize: verticalScale(12),
    },
    oneItemContainer: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    fullContainer: {
        width: '95%',
        height: '80%',
    },
    addContainer: {
        width,
        height: height * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addBtn: {
        width: '80%',
        height: '45%',
        backgroundColor: colors.brownColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: verticalScale(4),
    },
    addStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.whiteColor,
    },
    nameAddressContainer: {
        marginTop: '3%',
        width: '85%',
        height: height * 0.1,
    },
    nameAddressLabel: {
        width: '100%',
        height: '30%',
    },
    nameAddressInput: {
        width: '60%',
        height: '70%',
    },
    nameAddressLabelStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(10),
    },
    addressInputStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(20),
        borderBottomWidth: verticalScale(1),
        borderBottomColor: '#9B9B9B',
    },
    inputText: {
        textAlign: "left",
        padding:5
    },
};