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
        paddingTop: 58,

    },
    form:{
        height: 40,

    },
    fillName: {
        color: 'white',
        paddingTop: 36,
        alignSelf:"flex-start",
        paddingLeft: 57,
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