import { StatusBar, Dimensions, Platform } from 'react-native';
import { verticalScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';
const { width, height } = Dimensions.get('window');

export default {
    flex: {
        flex: 1
    },
        mainContainer: {
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    container: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
    },
    statusbarImage: {
        height: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        backgroundColor: 'black',
    },
    body: {
        height: '95%',
        width: '100%',
        alignSelf: 'center',
    },
    main_scroller: {
        marginBottom: verticalScale(10),
    },

    // header
    header: {
        height: height*.08,
        width: '95%',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header_text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(14),
        paddingLeft: verticalScale(8),
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center'

    },

    // main
    main: {
        height: height*.8,
        width: '100%',
        marginLeft: 0,
        justifyContent: 'center',
        alignItems: 'center',

    },
    searchBarContainer: {
        height: '10%',
        width: '93%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainBodyContainer: {
        height: '90%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.backgroudGray,

    },
    mainBody: {
        width: '93%',
        height: '93%',
    },
    mixed_text: {
        height: '7%',
        width: '100%',
        paddingTop: verticalScale(5),
        flexDirection: 'row',
    },
    text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(14),
        paddingRight: verticalScale(4),
    },
    bold: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(14),
        fontWeight: '500',
        paddingRight: verticalScale(4),

    },
    main_scroller: {
        height: '93%',
    },
    // footer
    footer: {
        backgroundColor: colors.backgroudGray,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

};