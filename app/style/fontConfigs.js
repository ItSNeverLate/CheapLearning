import { StyleSheet } from "react-native";
import { isAndroid } from "../utility/common";

export default {
    en: StyleSheet.create({
        normal: {
            fontFamily: 'Roboto',
        },
        meduim: {
            fontFamily: isAndroid ? 'RobotoMeduim' : 'Roboto',
            fontWeight: isAndroid ? 'normal' : '500'
        },
        bold: {
            fontFamily: isAndroid ? 'RobotoBold' : 'Roboto',
            fontWeight: isAndroid ? 'normal' : 'bold'
        }
    }),
    fa: StyleSheet.create({
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
    })
}
