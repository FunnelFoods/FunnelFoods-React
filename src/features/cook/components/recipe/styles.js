import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 8,
        margin: 10,
        alignSelf: "stretch",
        backgroundColor: colors.white,
    },
    imageContainer: {
        width: '100%',
        height: 152,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        color: 'white',
    },
    informationContainer: {
        color: colors.white,
        alignSelf: 'flex-end',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingBottom: 5
    },
    fieldContainer: {
        paddingHorizontal: 5,
    },
    nameContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    field: {
        color: colors.white,
        paddingHorizontal: 5,
        fontFamily: 'Muli-Bold'
    },
    name: {
        color: colors.primaryDark,
        fontFamily: 'Muli-ExtraBold',
    }
});

export { styles }
