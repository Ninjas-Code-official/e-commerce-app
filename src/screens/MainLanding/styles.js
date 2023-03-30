import { Dimensions, Platform, StatusBar } from 'react-native';
import { verticalScale, scale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';
const { height, width } = Dimensions.get('window');

export default {
    flex: {
        flex: 1,
    },
    scrollViewStyle: {
        marginTop: verticalScale(20),
        backgroundColor: colors.backgroudGray,
    },
    grayBackground: {
        backgroundColor: colors.backgroudGray,
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    caroselContainer: {
        width: '100%',
        height: height * 0.3,
        position: 'relative',
    },
    caroselStyle: {
        width,
        height: height * 0.3,
    },
    menuDrawerContainer: {
        width: verticalScale(20),
        height: verticalScale(18),
        position: 'absolute',
        top: '15%',
        left: '6%',
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    headingText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: scale(16)
    },
    itemCardContainer: {
        width: scale(200),
        height: scale(225),
        marginTop: scale(10),
        marginRight: scale(20),
        borderRadius: scale(5),
        borderColor: colors.whiteColor,
        borderWidth: scale(4)
    },
    categoryContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: scale(20),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    titleSpacer: {
        marginLeft: '5%',
        marginTop: scale(30)
    },
    productCard: {
        marginLeft: '5%',
        width: '42%',
        height: scale(225),
        marginTop: scale(10),
        marginBottom: scale(20)
    }
};