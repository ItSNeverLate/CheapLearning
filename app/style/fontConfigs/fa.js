import { StyleSheet } from "react-native";
import { isAndroid } from "../../utility/common";

// ESSENTIAL - DON'T DOUBT
export default StyleSheet.create({
    normal: {
        fontFamily: 'IRANYekanRegularMsn',
    },
    meduim: {
        fontFamily: isAndroid ? 'IRANYekanBoldMsn' : 'IRANYekanRegularMsn',
        fontWeight: isAndroid ? 'normal' : '500'
    },
    bold: {
        fontFamily: isAndroid ? 'IRANYekanBoldMsn' : 'IRANYekanRegularMsn',
        fontWeight: isAndroid ? 'normal' : 'bold'
    }
});