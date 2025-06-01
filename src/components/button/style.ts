import { StyleSheet } from 'react-native';
import { colors } from '../../utils/app-colors';
import { width, height } from '../../utils/dimensions';

export const styles = StyleSheet.create({
    button: {
        height: height(6),
        borderRadius: width(2),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width(4),
    },
    primary: {
        backgroundColor: colors.primary,
    },
    secondary: {
        backgroundColor: colors.secondary,
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: width(0.25),
        borderColor: colors.primary,
    },
    disabled: {
        opacity: 0.5,
    },
    text: {
        fontSize: width(4),
        fontWeight: '600',
    },
    primaryText: {
        color: colors.white,
    },
    secondaryText: {
        color: colors.white,
    },
    outlineText: {
        color: colors.primary,
    },
}); 