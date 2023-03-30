import { verticalScale, scale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';
import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    flex: {
        flex: 1
    },
    container: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        justifyContent:'center'
    },
    body: {
        height: height * .95,
        width: '95%',
        alignSelf: 'center',
    },
    bodyHeader: {
        height: '8%',
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
        paddingLeft: verticalScale(8),
    },
    bodyContainer: {
        width: '90%',
        height: '63%',
        alignSelf: 'center',
        backgroundColor: colors.greyLinesColor,
        borderRadius: verticalScale(5),
    },
    bodyContainerBackground: {
        backgroundColor: colors.backgroudGray,
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    bodyFooter: {
        width: '90%',
        height: '25%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    footer: {
        height: '55%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: verticalScale(5),
        paddingLeft: verticalScale(15),
        backgroundColor: '#fcead9',
    },
    bcH1: {
        fontSize: verticalScale(22),
        fontFamily: fontStyles.PoppinsRegular,
    },
    bcH2: {
        fontSize: verticalScale(12),
        fontFamily: fontStyles.PoppinsRegular,
        lineHeight: verticalScale(13),
    },
    bcTexts: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '30%',
    },
    bcMain: {
        height: '45%',
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    bcInputs: {
        width: '90%',
    },
    bcInputView: {
        backgroundColor: colors.secondaryWhiteColor,
        borderRadius: 3,
        height: verticalScale(38),
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.greyLinesColor,
    },
    bcInput: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(13),
        paddingLeft: '3%',
    },
    bcLoginBtns: {
        width: '90%',
    },
    mainBrownBtn: {
        backgroundColor: '#D0AD8A',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        height: verticalScale(50),
        borderRadius: 5,
    },
    bbText: {
        color: colors.secondaryWhiteColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
    },
    passwordText: {
        color: '#DC4E41',
    },
    bcSocialBtns: {
        flexDirection: 'row',
        width: '90%',
        height: '25%',
        alignItems: 'center',
    },
    socialBtnsView: {
        width: '50%',
    },
    socialBtn: {
        flexDirection: 'row',
        height: verticalScale(50),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleBtn: {
        height: verticalScale(50),
        borderWidth: 0,
        borderRightWidth: 0,
        borderRadius: 3,
        borderColor: 'orange',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: '#DC4E41',
    },
    facebookBtn: {
        height: verticalScale(50),
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRadius: 3,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,

        backgroundColor: '#3B5998',
    },
    fbText: {
        color: colors.secondaryWhiteColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
        paddingLeft: verticalScale(5),
    },
    mixedLine: {
        flexDirection: 'row',
    },
    boldText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontWeight: '500',
        fontSize: verticalScale(10),
    },
    ftText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: scale(10),
    },
    ftUnderline: {
        textDecorationLine: 'underline',
    },


};