import { StatusBar } from 'react-native';
import { verticalScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';
import { Platform } from 'react-native'

export default {
    flex: {
        flex: 1,
    },
    mainContainer: {
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    tabContainer: {
        width: '90%',
        height: '8%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    tabStyleActive: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(14),
        color: colors.brownColor,
    },
    tabStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(14),
    },
};
