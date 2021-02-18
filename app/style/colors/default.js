import { StyleSheet } from "react-native";

export default {
        surface:'#fff',
        background: 'white',//USING
        primary: 'blue',//USING
        secondary: 'orange',
        grey0: '#e8e8e8',//USING
        grey1: '#b6b6b6',
        grey2: '#5e6977',//USING
        grey3: '#6B6B6B',//USING
        grey4: '#454545',//USING
        grey5: '#343434',//USING
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