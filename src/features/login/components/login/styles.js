import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles/colors';

const styles = StyleSheet.create({
    scrollBackground: {
        backgroundColor: colors.primaryLight,
    },
    background: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: colors.primaryLight,
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        paddingTop: 50,
    },
    logo: {
        width: 400,
        height: 200
    },
    container: {
        alignSelf: "stretch",
        marginHorizontal: 40,
        marginVertical: 20,
    },
    buttonContainer: {
        alignSelf: "stretch",
        borderRadius: 4,
        height: 48,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -30,
    },
    facebookButtonContainer: {
        height: 48,
        alignSelf: "stretch",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -30,
    },
    googleButtonContainer: {
        height: 53,
        marginTop: -3,
        marginLeft: "-1%",
        width: "102%",
        alignSelf: "stretch",
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        alignSelf: "center",
        textDecorationLine: "underline",
        color: colors.white,
    }
});

export { styles };