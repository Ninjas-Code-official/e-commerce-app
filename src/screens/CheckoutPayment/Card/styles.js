import { verticalScale } from '../../../utils/scaling';
import { colors } from '../../../utils/colors';
import { fontStyles } from '../../../utils/fontStyles';

export default {
    outline: {
        height: '90%',
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.textBlueColor,
        borderRadius: verticalScale(12),
        borderWidth: verticalScale(5),
    },
    container: {
        height: '95%',
        width: '97.33%',
        alignItems: 'center',
        borderWidth: verticalScale(1),
        borderColor: colors.grayLinesColor,
        borderRadius: verticalScale(7),
        overflow: 'hidden',
    },
    topContainer: {
        height: '50%',
        width: '90%',
        justifyContent: 'flex-end',
    },
    simCardImage: {
        height: verticalScale(30),
        width: verticalScale(36),
        marginBottom: verticalScale(8),
    },
    visaImage: {
        height: verticalScale(14),
        width: verticalScale(45),
    },
    botContainer: {
        height: '50%',
        width: '90%',
        justifyContent: 'space-evenly',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    creditCardNumber: {
        width: '70%',
    },
    ccText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(8),

    },
    expiryContainer: {
        flexDirection: 'row',
    },
    expiryText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(9),
        lineHeight: verticalScale(11),
    },
    expiryNumberText: {
        letterSpacing: verticalScale(1),
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(10.5),
        marginLeft: verticalScale(5),
    },
    expiryMonthYear: {
        justifyContent: 'center',
    },
    cardOwnerName: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(13),
    },

};