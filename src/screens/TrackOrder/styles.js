import { Dimensions, Platform, StatusBar } from 'react-native';
import { verticalScale, scale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

const { height, width } = Dimensions.get('window');

export default {
    flex: {
        flex: 1,
    },
    mainContainer: {
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    line: {
        width: '100%',
        height: verticalScale(1),
        backgroundColor: colors.grayLinesColor
    },
    backImg: {
        marginBottom: '3%',
        marginLeft: '5%',
    },
    cardContainer: {
        backgroundColor: colors.backgroudGray,
        width: '100%',
        height: height * 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        backgroundColor: colors.whiteColor,
        width: '90%',
        height: '80%',
        flexDirection: 'row',
        borderRadius: verticalScale(8),
        borderTopLeftRadius: verticalScale(8),
        borderBottomLeftRadius: verticalScale(8),
    },
    cardLeftContainer: {
        width: '35%',
        height: '100%',
        borderTopLeftRadius: verticalScale(8),
        borderBottomLeftRadius: verticalScale(8),
    },
    cardRightContainer: {
        marginLeft: '3%',
        width: '60%',
        height: '100%',
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderTopLeftRadius: verticalScale(8),
        borderBottomLeftRadius: verticalScale(8),
    },
    marginTop5: {
        marginTop: '5%',
    },
    timelineContainer: {
        backgroundColor: colors.backgroudGray,
        paddingTop: verticalScale(10),
        flex: 1,
    },
};