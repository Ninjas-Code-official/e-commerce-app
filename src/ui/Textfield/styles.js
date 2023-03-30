import { verticalScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

export default {
    input_view: {
        backgroundColor: colors.secondaryWhiteColor,
        borderRadius: 3,
        height: verticalScale(38),
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.backgroudGray,
    },
    input: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(13),
        paddingLeft: '3%',
    },
};
