import { verticalScale } from '../../../utils/scaling';
import { colors } from '../../../utils/colors';
import { fontStyles } from '../../../utils/fontStyles';

export default {
    container: {
        height: verticalScale(160),
        width: '100%',
        backgroundColor: colors.whiteColor,
        marginBottom: verticalScale(10),
        borderRadius: verticalScale(5),
        overflow: 'hidden',
        alignItems: 'center',
    },
    headerRow: {
        flexDirection: 'row',
        height: '25%',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(14),
        color: colors.brownColor,
    },
    address: {
        height: '45%',
        width: '90%',
        justifyContent: 'center',
    },
    addressText: {
        fontSize: verticalScale(11),
        fontFamily: fontStyles.PoppinsRegular,
        lineHeight: verticalScale(15),
    },
    btnContainer: {
        height: '30%',
        width: '90%',
        justifyContent: 'flex-start',
    },
    selectedBtn: {
        height: verticalScale(40),
        width: '100%',
        backgroundColor: colors.backgroudGray,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: verticalScale(3),
    },
    selectedText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(13),
    },
    unselectedButton: {
        height: verticalScale(40),
        width: '100%',
        backgroundColor: colors.brownColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: verticalScale(3),
    },
    unselectedText: {
        color: colors.whiteColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(13),
    },
    tickImage: {
        height: verticalScale(16),
        width: verticalScale(16),
        position: 'absolute',
        left: verticalScale(20),
    },
};