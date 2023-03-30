import { scale } from "../../../utils/scaling";
import { colors } from "../../../utils/colors";
import { fontStyles } from "../../../utils/fontStyles";

export default {
    mainContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    textStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: scale(12)
    },
    boldStyle: {
        fontFamily: fontStyles.PoppinsBold
    },
    container: {
        padding: scale(5),
        paddingLeft: scale(10),
        paddingRight: scale(10),
        margin: scale(5),
        marginLeft: 0,
        marginRight: scale(10),
        borderWidth: 1,
        borderColor: colors.blackText,
        borderRadius: scale(3)
    },
}