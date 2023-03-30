import { verticalScale, scale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

const mainBtnStyles = {
    backgroundColor: {
        backgroundColor: colors.brownColor,
        height: verticalScale(50),
        borderRadius: verticalScale(3),
    },
    main_brown_btn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    btn_text: {
        color: colors.secondaryWhiteColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
    },
};

const alternateBtn = {
    backgroundColor: {
        backgroundColor: colors.secondaryWhiteColor,
        height: verticalScale(50),
        borderRadius: verticalScale(3),
        borderWidth: verticalScale(2),
        borderColor: colors.backgroudGray,
    },
    main_alt_btn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    btn_text: {
        color: colors.brownColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
        fontWeight: '500',
    },
};

const blueBtn = {
    backgroundColor: {
        backgroundColor: colors.textBlueColor,
        height: verticalScale(46),
        borderRadius: verticalScale(3),
    },
    main_blue_btn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    btn_text: {
        color: colors.secondaryWhiteColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
    },
};
const styles = {
    container: {
        backgroundColor: colors.brownColor,
        height: scale(40),
        borderRadius: scale(4),
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: colors.textBlueColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: scale(16),
    }
}

const alternateBlueBtn = {
    backgroundColor: {
        height: verticalScale(46),
        borderRadius: verticalScale(3),
        borderWidth: verticalScale(2),
        borderColor: colors.textBlueColor,
    },
    main_blue_btn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    btn_text: {
        color: colors.textBlueColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
    },
};


const facebookStyles = {

};

const googleStyles = {

};
export {
    alternateBtn, mainBtnStyles, blueBtn, alternateBlueBtn, facebookStyles, googleStyles, styles
};
