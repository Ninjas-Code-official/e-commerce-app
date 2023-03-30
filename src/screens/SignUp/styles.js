import { Dimensions } from 'react-native';
import { verticalScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

const { height } = Dimensions.get('window')
export default {
    flex: {
        flex: 1
    },
    container: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    body: {
        height: height * .95,
        width: '95%',
        alignSelf: 'center',
    },

    // Header
    header: {
        justifyContent: 'space-evenly',
        height: '20%',
        width:'90%',
        alignSelf:'center',
    },
    headerText: {
        paddingLeft: '5%',
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
    },
    headerBtn: {

    },

    // main
    main: {
        backgroundColor: colors.backgroudGray,
        height: '80%',
        width: '90%',
        alignSelf:'center',
        borderRadius: verticalScale(5),
    },
    bodyContainerBackground: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },

    mainTop: {
        height: '20%',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    h1Text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(17.5),
        fontWeight: '500',
        letterSpacing: verticalScale(0.5),
        marginTop: '5%',
    },
    h2Text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(12),
    },
    mainMid: {
        height: '55%',
        width: '90%',
    },
    mainBot: {
        height: '25%',
        width: '90%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    botBtnContainer: {
        width: '100%',
    },
    mixedLine: {
        flexDirection: 'row',
    },
    ftText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(10),
    },
    ftTextUnderline: {
        textDecorationLine: 'underline',
    },

};