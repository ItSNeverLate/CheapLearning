import { DefaultTheme } from '@react-navigation/native';
import colors from '../style/colors/default';

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.white
    }
}