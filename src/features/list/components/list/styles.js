import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles/colors';

const styles = StyleSheet.create({
    heading: {
        paddingTop:10
    },

    background:{
        backgroundColor: 'rgba(231, 236, 240, 0.5)',
        flex:1
    },

    container1: {
        height: 110,
        backgroundColor: 'white',
        elevation: 3,
        paddingHorizontal: 32,
        paddingTop: 18,
        flexDirection: 'row',
        alignItems: 'center',
    },

    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    text1: {
        color: '#05436F',
        fontSize: 24,
        fontFamily: 'FilsonSoftMedium',
    },

    text2: {
        color: '#05436F',
        fontSize: 12,
        fontFamily: 'Muli-Regular',
    },

    rightButton:{
        paddingLeft: '30%',
        paddingTop: 10.5,
    },

    searchButton:{
        paddingLeft: '55%',
        paddingTop: 10.5,
    }
});

export { styles }