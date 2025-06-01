import { StyleSheet } from 'react-native';
import { colors } from '../../utils/app-colors';
import { width, height } from '../../utils/dimensions';

export const styles = StyleSheet.create({
    option: {
        width: width(85),
        margin: width(2),
        paddingVertical: height(1.5),
        paddingHorizontal: width(2),
        borderRadius: width(3),
        backgroundColor: 'white',
        borderWidth: width(0.25),
        borderColor: colors.gray[400],
    },
    selected: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
    },
}); 