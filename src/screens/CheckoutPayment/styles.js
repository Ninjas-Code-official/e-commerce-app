import { StatusBar, Platform, Dimensions } from 'react-native';
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
        height: '95%',
        width: '100%',
        alignSelf: 'center',
        justifyContent:'center',
    },
    body: {
        height: '95%',
        width: '90%',
        alignSelf: 'center',
    },
    main_scroller: {
        marginBottom: verticalScale(10),
    },
    // main
    main: {
        height: '80%',
        width: '100%',
        alignItems: 'center',
    },
    simpleRow: {
        flexDirection: 'row',
    },
    mainTop: {
        height: '65%',
        width: '100%',
    },
    mainTopHeadline: {
        height: '10%',
        justifyContent: 'center',
    },
    headlineText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(13),
    },
    cardContainer: {
        width: width * 0.90,
        height: '65%',
    },
    card: {
        width: width * 0.90,
    },
    manualBtnContainer: {
        height: '25%',
        width: '95%',
        alignSelf: 'center',
    },
    manBtnContText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(11),
    },
    paginationItem: {
        marginLeft: 0,
        marginRight: verticalScale(3),
        height: verticalScale(7),
        width: verticalScale(8),
    },
    mainBot: {
        height: '30%',
        width: '100%',
    },
    mainBot: {
        height: '35%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: colors.backgroudGray,
        borderRadius: verticalScale(5),
    },
    subtotalContainer: {
        width: '90%',
        borderBottomWidth: verticalScale(1),
        borderBottomColor: colors.grayLinesColor,
        paddingBottom: verticalScale(5),
    },
    cvvContainer: {
        backgroundColor: colors.whiteColor,
        borderWidth: verticalScale(1),
        borderRadius: verticalScale(3),
        borderColor: colors.grayLinesColor,
        height: verticalScale(25),
        width: verticalScale(45),
        justifyContent: 'center',
        alignItems: 'center',

    },
    cvvInput: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(12),
        width: '60%',
    },
    listItem: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: verticalScale(3),
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(12.5),
    },
    textBold: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(13),
        fontWeight: '500',
    },
    textBlue: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(13),
        fontWeight: '500',
        color: colors.textBlueColor,
    },
    totalContainer: {
        width: '90%',
    },
    submitContainer: {
        width: '90%',
    },
};