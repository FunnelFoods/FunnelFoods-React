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
        flex: 3,
        alignItems: 'center',
    },

    containerBar:{
        flexDirection: 'row',
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
        textAlign: 'right',
        paddingLeft: '20%',
        paddingTop: 10.5,
        flexDirection: "row",
        alignItems: "center"
    },

    icon: {
        marginRight: 10,
    },

    container2:{
        alignItems:'center',
    },

    dishName:{
        color: '#05436F',
        fontFamily: 'Muli-Bold',
        fontSize:20,
        marginLeft:9,
        marginTop:3,
    },

    underline: {textDecorationLine: 'underline'},

    dishType:{
        color: '#05436F',
        fontFamily: 'Muli-Regular',
        fontSize:12,
        marginLeft:9,
        marginTop:2,
    },

    inventory:{
        color: '#05436F',
        fontFamily: 'Muli-Regular',
        fontSize:10,
        marginLeft:9,
        marginTop:5,
    },

    price: {
        color: '#05436F',
        fontFamily: 'Muli-ExtraBold',
        fontSize:20,
        marginLeft:230,
        marginTop:-60,
    },

    expiration:{
        color: '#E61259',
        fontFamily: 'Muli-Regular',
        fontSize:12,
        marginLeft:200,
        marginTop:1.5,
    },

    purchaseDate:{
        color: '#05436F',
        fontFamily: 'Muli-Regular',
        fontSize:10,
        marginLeft:223.5,
        marginTop:4,

    },

    itemContainer: {
        width: 311,
        height: 70,
        borderRadius: 8,
        backgroundColor: colors.white,
        shadowColor:'#AAAAAA55',
        shadowOffset:{width:2, height:2},
        marginTop:10,
        marginBottom:5,
        
    },

    searchButton:{
        flex:1,
        paddingLeft: '55%',
        paddingTop: 15.5,
    }
});

export { styles }