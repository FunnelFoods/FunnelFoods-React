import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(231, 236, 240, 0.5)',
        flex: 1
    },
    headerContainer: {
        backgroundColor: '#E61259',
        paddingHorizontal: 32,
        flexDirection: "row",
        paddingBottom: 10
    },
    titleContainer: {
        marginTop: 50,
        alignSelf: "center",
        flex: 1
    },
    searchContainer: {
        alignSelf: "flex-end",
    },
    title: {
        color: colors.white,
        fontSize: 24,
        fontFamily: 'FilsonSoftMedium',
    },
    icon: {
        marginRight: 10,
    },
});

export { styles }
