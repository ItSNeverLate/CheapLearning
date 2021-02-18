import { StyleSheet } from "react-native";

export default {
        background: '#000000',//USING
        primary: '#red',//USING
        secondary: '#ffd41d',
        grey0: 'red',//USING
        grey1: 'red',
        grey2: 'red',//USING
        grey3: 'red',//USING
        grey4: 'red',//USING
        grey5: 'red',//USING
        greyOutline: '#bbb',
        searchBg: '#303337',
        success: '#52c41a',
        error: '#ff190c',
        warning: '#faad14',
        disabled: 'hsl(208, 8%, 90%)',
        // Darker color if hairlineWidth is not thin enough
        divider: StyleSheet.hairlineWidth < 1 ? '#bcbbc1' : 'rgba(0, 0, 0, 0.12)',
        platform: {
                ios: {
                        primary: '#007aff',
                        secondary: '#5856d6',
                        success: '#4cd964',
                        error: '#ff3b30',
                        warning: '#ffcc00'
                },
                android: {
                        primary: '#2196f3',
                        secondary: '#9C27B0',
                        success: '#4caf50',
                        error: '#f44336',
                        warning: '#ffeb3b'
                }
        }
}