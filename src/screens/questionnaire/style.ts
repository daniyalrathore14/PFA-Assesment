import { StyleSheet } from 'react-native';
import { width, height } from '../../utils/dimensions';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    pager: {
        flex: 1,
    },
    page: {
        flex: 1,
        padding: width(5),
        justifyContent: 'flex-start',
    },
    questionTitle: {
        marginTop: height(3),
        marginBottom: height(3),
        fontWeight: '600',
    },
    optionsList: {
        width: '100%',
        marginBottom: height(3),
    },
    optionSpacing: {
        marginBottom: height(2),
    },
    questionCounter: {
        marginTop: height(2),
        alignSelf: 'center',
    },
}); 