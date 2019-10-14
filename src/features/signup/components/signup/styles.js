import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles/colors';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#FF7F5A',
        alignItems: "center",
    },
    container: {
        marginTop:50,
        alignSelf: "stretch",
        marginHorizontal: 45,
        marginVertical: 20
    },
    lastContainer: {
        marginTop:5,
        alignSelf: "stretch",
        marginHorizontal: 45,
        marginVertical: 20
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
        paddingTop: 30,
        paddingRight: 140,
    },
    fillEMAIL: {
        color: 'white',
        fontFamily: 'FilsonSoftMedium',
        fontSize: 16,
        paddingTop: 30,
        paddingRight: 215,
    },
    fillPASSWORD: {
        color: 'white',
        fontFamily: 'FilsonSoftMedium',
        fontSize: 16,
        paddingTop: 30,
        paddingRight: 175,
    },
    fillCOMFIRMPASSWORD: {
        color: 'white',
        fontFamily: 'FilsonSoftMedium',
        fontSize: 16,
        paddingTop: 30,
        paddingRight: 90,
    },
    customBtnBG: {
        alignSelf: "stretch",
        borderRadius: 4,
        height: 48,
        backgroundColor: '#FFFFFF99',
        shadowColor: "#EB6B45A3",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        alignSelf: "stretch",
        borderRadius: 4,
        height: 48,
        backgroundColor: '#FFFFFF99',
        shadowColor: "#EB6B45A3",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        alignItems: 'center',
        justifyContent: 'center',
    },
    customBtnText: {
        paddingTop:2.5,
        textAlign: 'center',
        fontFamily: 'FilsonSoftMedium',
        fontSize: 24,
        // fontWeight: '400',
        color: "#FF7F5A",

    },
    customBtnTextN: {

        textAlign: 'center',
        fontFamily: 'Muli-Regular',
        fontSize: 16,
        // fontWeight: '400',
        color: "#FFFFFF",
        textDecorationLine: 'underline',

    },
    text: {
        alignSelf: "center",
        textDecorationLine: "underline",
        color: colors.white,
    },

    rule:{
        paddingTop: 15,
        borderBottomWidth: 0.5,
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