import { scale } from '../../../utils/scaling';
import { colors } from '../../../utils/colors';
import { fontStyles } from '../../../utils/fontStyles';

export default {
    container: {
        width: '100%', 
        height: scale(100), 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderBottomWidth: 1, 
        borderColor: colors.darkGrayText, 
        backgroundColor: colors.whiteColor
    },
    subContainer: {
        width: '95%', 
        height: '90%', 
        flexDirection: 'row'
    },
    removeContainer: {
        width: '10%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    contentContainer: {
        flex: 1, 
        flexDirection: 'row'
    },
    imgContainer: {
        width: '23%', 
        height: '100%'
    },
    imgResponsive: {
        flex: 1, 
        width: undefined, 
        height: undefined
    },
    itemContainer: {
        flex: 1, 
        marginLeft: '2%' 
    },
    itemDetailContainer: {
        width: '100%', 
        height: '40%'
    },
    titleStyle: {
        fontSize: scale(12), 
        fontFamily: fontStyles.PoppinsBold
    },
    descStyle: {
        fontSize: scale(10), 
        fontFamily: fontStyles.PoppinsRegular, 
        color: colors.brownColor
    },
    quantityContainer: {
        width: '100%', 
        height: '30%', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    sizeStyle: {
        fontSize: scale(16), 
        fontFamily: fontStyles.PoppinsBold
    },
    quantitySelContainer: {
        flexDirection: 'row' 
    },
    quantityIconStyle: {
        paddingLeft: scale(5), 
        paddingRight: scale(5)
    },
    quantityTextStyle: {
        marginLeft: scale(30), 
        marginRight: scale(30), 
        fontFamily: fontStyles.PoppinsRegular, 
        fontSize: scale(15)
    },
    bottomContainer: {
        flex: 1, 
        flexDirection: 'row'
    },
    likeContainer: {
        width: '30%', 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    likeTextStyle: {
        marginLeft: scale(5), 
        fontFamily: fontStyles.PoppinsRegular, 
        fontSize: scale(10)
    },
    priceContainer: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-end'
    },
    actualPriceStyle: {
        textDecorationLine: 'line-through', 
        fontFamily: fontStyles.PoppinsBold, 
        fontSize: scale(14), 
        color: colors.googleRedColor
    },
    discountedPriceStyle: {
        marginLeft: scale(10), 
        fontFamily: fontStyles.PoppinsBold, 
        fontSize: scale(14), 
        color: colors.blueColor
    }
}