import { StatusBar, Platform } from 'react-native';
import { verticalScale, scale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

export default {
    flex: {
        flex: 1
    },
    mainContainer:{
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    spacer: {
        marginTop: scale(10)
    },
    textStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: scale(13)
    },
    totalStyle: {
        color: colors.blueColor
    },
    summaryContainer: {
        marginTop: scale(30),
        width: '90%', 
        backgroundColor: colors.grayLinesColor, 
        alignSelf: 'center', 
        padding: scale(10),
        justifyContent: 'flex-end'
    },
    rowContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    lineStyle: {
        width: '99%', 
        height: 1, 
        backgroundColor: colors.grayLinesColor, 
        alignSelf: 'center'
    },
    btnContainer: {
        backgroundColor: colors.textBlueColor
    },
    btnText: {
        color: colors.whiteColor
    },
};