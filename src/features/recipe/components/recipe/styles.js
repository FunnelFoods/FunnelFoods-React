import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        flex: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        backgroundColor: colors.primaryNeon
    },
    title: {
        color: colors.white,
        fontFamily: 'Muli-Regular',
        fontSize: 22,
        marginLeft: 20,
        marginBottom: 12,
    },
    stats: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'stretch',
        marginBottom: 10
    },
    stars: {
        width: "33%",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    starIcon: {
      marginRight: 10,
    },
    calories: {
        width: "33%",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    minutes: {
        width: "33%",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    statText: {
        color: colors.white,
        fontFamily: 'Muli-Regular',
        fontSize: 18,
    },
    controlTab: {
        height: 50,
        paddingTop: '3%',
        marginLeft: '3%',
        marginRight: '3%',
    },
    sectionHeader: {
        fontFamily: 'FilsonSoftMedium',
        fontSize: 22,
        color: colors.primaryDark,
        margin: 20,
    },
    sectionText: {
        fontFamily: 'Muli-Regular',
        color: colors.primaryDark,
        fontSize: 16,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 15,
    }
});

export { styles }