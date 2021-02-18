import { StyleSheet } from "react-native";
import { isAndroid } from "../../utility/common";

export default StyleSheet.create({
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
});