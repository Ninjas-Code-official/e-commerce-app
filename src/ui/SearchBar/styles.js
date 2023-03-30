import { verticalScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

export default {
    container: {
        backgroundColor: colors.backgroudGray,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: verticalScale(32),
        borderRadius: verticalScale(5),
    },
    image: {
        height: verticalScale(17),
        width: verticalScale(17),
        marginRight: verticalScale(15),
    },
    textfield: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(13),
        paddingLeft: '3%',
        flex: 1,
    },
};
