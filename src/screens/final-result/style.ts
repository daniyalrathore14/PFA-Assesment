import { StyleSheet } from 'react-native';
import { width, height } from '../../utils/dimensions';
import { colors } from '../../utils/app-colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        padding: width(5),
        backgroundColor: '#fff',
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
    resultCard: {
        marginTop: height(8),
        marginHorizontal: width(6),
        borderRadius: width(4),
        backgroundColor: colors.primary,
        padding: width(8),
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    resultEmoji: {
        fontSize: width(14),
        marginBottom: height(2),
    },
    resultText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: width(6),
        marginBottom: height(1),
        textAlign: 'center',
    },
    scoreText: {
        color: colors.white,
        fontSize: width(4.5),
        marginBottom: height(1),
        textAlign: 'center',
    },
    profileText: {
        color: colors.white,
        fontSize: width(5),
        fontWeight: '600',
        textAlign: 'center',
    },
}); 