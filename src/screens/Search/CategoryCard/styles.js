import { verticalScale } from '../../../utils/scaling';
import { colors } from '../../../utils/colors';
import { fontStyles } from '../../../utils/fontStyles';

export default {
    container: {
        backgroundColor: colors.secondaryWhiteColor,
        height: verticalScale(60),
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: verticalScale(5),
    },
    text: {
        fontSize: verticalScale(16),
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.fontBlackColor,
    },
};
