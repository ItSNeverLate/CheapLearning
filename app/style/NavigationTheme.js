import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import colors from './colors/default';

export default {
    ...NavigationDefaultTheme,
    colors: {
        primary: colors.primary,
        background: colors.background,
        card: colors.background,
        text: colors.primary,
        border: colors.greyOutline,
        notification: colors.secondary,
    },
    isDark:true
}
