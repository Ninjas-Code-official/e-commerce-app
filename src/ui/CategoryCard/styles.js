import { scale } from "../../utils/scaling";
import { fontStyles } from '../../utils/fontStyles';
import { colors } from '../../utils/colors';

export default {
    container: {
        width: '45%',
        height: scale(50),
        backgroundColor: colors.whiteColor,
        borderRadius: scale(5),
        marginTop: scale(20),
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textViewContainer: {
        width: '80%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: scale(14),
    },
    imgContainer: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgSubContainer: {
        width: '100%',
        height: '80%',
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
};