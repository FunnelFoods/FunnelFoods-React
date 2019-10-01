import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#FF7F5A',
        alignItems: "center",
        // paddingTop: 58,

    },
    textHeader: {
        color: 'white',
        fontFamily: 'FilsonSoftMedium',
        fontSize: 24,
        paddingTop: 58,

    },
    form:{
        height: 40,

    },
    fillName: {
        color: 'white',
        fontFamily: 'FilsonSoftMedium',
        fontSize: 16,
        paddingTop: 50,
        paddingRight: 220,
        },
    fillAIA: {
        color: 'white',
        fontFamily: 'FilsonSoftMedium',
        fontSize: 16,
        paddingTop: 40,
        paddingRight: 140,
    },
    fillEMAIL: {
        color: 'white',
        fontFamily: 'FilsonSoftMedium',
        fontSize: 16,
        paddingTop: 40,
        paddingRight: 215,
    },
    fillPASSWORD: {
        color: 'white',
        fontFamily: 'FilsonSoftMedium',
        fontSize: 16,
        paddingTop: 40,
        paddingRight: 175,
    },
    fillCOMFIRMPASSWORD: {
        color: 'white',
        fontFamily: 'FilsonSoftMedium',
        fontSize: 16,
        paddingTop: 40,
        paddingRight: 90,
    },
    rule:{
        paddingTop: 48,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        width: 270,
    },
    header: {
        marginTop: 150,
        backgroundColor: '#ededed',
        flexWrap: 'wrap'
    },
    primary: {
        flex: 1,
        height: 70,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20
    }
});

export { styles }