import { Dimensions, Platform, StatusBar } from 'react-native';
import { verticalScale,scale } from '../../utils/scaling';
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
    line: {
        width: '100%',
        height: verticalScale(1),
        backgroundColor: '#edeaea'
    },
    cardContainer: {
        backgroundColor: colors.backgroudGray,
        width: '100%',
        height: height * 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        backgroundColor: colors.whiteColor,
        width: '90%',
        height: '80%',
        flexDirection: 'row',
        borderRadius: verticalScale(8),
        borderTopLeftRadius: verticalScale(8),
        borderBottomLeftRadius: verticalScale(8),
    },
    cardLeftContainer: {
        width: '35%',
        height: '100%',
        borderTopLeftRadius: verticalScale(8),
        borderBottomLeftRadius: verticalScale(8),
    },
    cardRightContainer: {
        marginLeft: '3%',
        width: '60%',
        height: '100%',
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderTopLeftRadius: verticalScale(8),
        borderBottomLeftRadius: verticalScale(8),
    },
    marginTop5: {
        marginTop: '5%',
    },
    productTitleStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(14),
    },
    productDescriptionStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(12),
        color: colors.greenColor,
    },
    amountContainer: {
        width: '100%',
        height: '30%',
        flexDirection: 'row',
        marginTop: '10%',
        justifyContent: 'space-between',
    },
    quantityContainer: {
        width: '40%',
        height: '100%',
        justifyContent: 'center',
    },
    priceContainer: {
        width: '40%',
        height: '100%',
        justifyContent: 'center',
    },
    deliverContainer: {
        width: '100%',
        height: height * 0.29,
        backgroundColor: colors.backgroudGray,
        justifyContent: 'center',
    },
    deliverSubContainer: {
        paddingLeft: '5%',
        paddingRight: '5%',
        width: '100%',
        height: '90%',
    },
    titleStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
        color: colors.brownColor,
    },
    contactStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(14),
        color: '#9B9B9B',
    },
    addressStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(14),
    },
    paymentContainer: {
        backgroundColor: colors.backgroudGray,
        width: '100%',
        height: height * 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    paymentSubContainer: {
        width: '90%',
        height: '70%',
    },
    twoItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    totalContainer: {
        backgroundColor: colors.backgroudGray,
        width: '100%',
        height: height * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    totalSubContainer: {
        width: '90%',
        height: '50%',
        justifyContent: 'center'
    },
    trackOrderContainer: {
        width: '100%',
        height: height * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroudGray,
    },
    trackOrderSubContainer: {
        width: '90%',
        height: '80%',
        backgroundColor: colors.whiteColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: verticalScale(4),
    },
    trackStyle: {
        width: '90%',
        height: '40%',
        backgroundColor: colors.lightBlueColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: verticalScale(4),
    },
    trackStyleText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
        color: colors.whiteColor,
    },
};