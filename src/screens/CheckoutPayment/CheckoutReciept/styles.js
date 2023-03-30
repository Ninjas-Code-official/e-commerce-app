import { Dimensions } from 'react-native';
import { verticalScale } from '../../../utils/scaling';
import { colors } from '../../../utils/colors';
import { fontStyles } from '../../../utils/fontStyles';
const { height, width } = Dimensions.get('window');

export default {
    modalContainer: {
        alignSelf: 'center',
        height: height * 0.65,
        width: width * 0.8,
        backgroundColor: colors.whiteColor,
        borderRadius: verticalScale(8),
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '90%',
        height: '80%',
    },
    imageContainer: {
        width: '100%',
        height: '17%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '3%',
    },
    imageSubContainer: {
        width: '30%',
        height: '100%',
    },
    imageResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    titleContainer: {
        marginTop: '5%',
        width: '100%',
        height: '7%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    titleStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
    },
    line: {
        marginTop: '3%',
        width: '100%',
        height: verticalScale(1),
        backgroundColor: colors.grayLinesColor,
    },
    dateContainer: {
        marginTop: '3%',
        width: '100%',
        height: '8%',
    },
    dateStyle: {
        color: colors.darkGrayText,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(12),
        marginBottom: '3%',
    },
    fullWidth: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfWidth: {
        width: '45%',
        height: '100%',
        justifyContent: 'center',
    },
    halfRightWidth: {
        width: '45%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    normalStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(14),
    },
    blueFont: {
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.blueColor,
        fontSize: verticalScale(14),
    },
    btnContainer: {
        width: '100%',
        height: '13%',
        marginTop: '5%',
        backgroundColor: colors.textBlueColor,
        borderRadius: verticalScale(3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnStyle: {
        marginTop:'2%',
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(14),
        color: colors.whiteColor,
    },

};