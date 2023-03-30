import { Dimensions, Platform, StatusBar } from 'react-native';
import { verticalScale, scale } from '../../utils/scaling';
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
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    caroselContainer: {
        width: '100%',
        height: height * 0.1,
        alignItems: 'center',
    },
    caroselSubContainer: {
        width: '80%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    caroselTitleContainer: {
        width: '70%',
        height: '100%',
        justifyContent: 'center',
    },
    caroselPriceContainer: {
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    caroselPriceSubContainer: {
        minWidth: '80%',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.grayLinesColor
    },
    mainScrollViewContainer: {
        backgroundColor: '#F8F8F8',
    },
    textStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: scale(12),
    },
    boldStyle: {
        fontFamily: fontStyles.PoppinsBold
    },
    priceColor: {
        color: colors.textBlueColor,
    },
    caroselMainImgCnt: {
        height: height * 0.5,
        width: '100%'
    },
    scrollViewStyle: {
        height: height * 0.08,
    },
    caroselItemsContainer: {
        flexDirection: 'row',
        width: '100%',
        height: height * 0.08,
    },
    caroselItems: {
        width: width * 0.15,
        height: height * 0.08,
        marginRight: width * 0.01,
        marginLeft: width * 0.01,
        marginTop: width * 0.01,
    },
    shoppingCartContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: scale(20),
        marginBottom: scale(20),
        backgroundColor: colors.textBlueColor
    },
    shoppingCartText: {
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.whiteColor,
        fontSize: verticalScale(16),
    },
    spacer: {
        marginTop: scale(20)
    },
    smallSpacer: {
        marginTop: scale(5)
    },
    variationContainer: {
        width: '90%',
        alignSelf: 'center'
    }
};