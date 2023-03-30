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
        marginTop: '15%',
        width: '90%',
        height: '85%',
        backgroundColor: colors.whiteColor,
        borderRadius: verticalScale(8),
        alignItems: 'center',
        position: 'relative',
    },
    profileImageContainer: {
        width: verticalScale(80),
        height: verticalScale(80),
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: colors.whiteColor,
        borderRadius: verticalScale(40),
        top: verticalScale(-40),
        borderWidth: verticalScale(3),
        borderColor: '#DDDDDD',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgResponsive: {
        width: '60%',
        height: '60%',
    },
    formContentContainer: {
        marginTop: '15%',
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
        height: '70%',
        padding: verticalScale(5),
        borderRadius: verticalScale(3),
        paddingBottom: verticalScale(5),
        backgroundColor: colors.backgroudGray,
    },
    inputText: {
        textAlign: "left",
        padding: 5
    },
    label: {
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.darkGrayText,
        fontSize: verticalScale(14),
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
        width: width * .9,
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

};
