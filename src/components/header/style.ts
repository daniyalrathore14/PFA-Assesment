import { StyleSheet } from 'react-native';
import { width, height } from '../../utils/dimensions';
import { colors } from '../../utils/app-colors';

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: height(5),
        paddingBottom: height(2),
        paddingHorizontal: width(4),
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        width: width(100),
    },
    backArrow: {
        fontSize: width(6),
        marginRight: width(2),
        color: colors.primary,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: width(5),
        color: colors.dark,
        marginRight: width(8), // To balance the back arrow
    },
}); 