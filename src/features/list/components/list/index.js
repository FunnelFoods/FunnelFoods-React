import React, { Component } from 'react';
import {Text, TextInput, View, Button, Alert, TouchableOpacity} from 'react-native';
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import { styles as inputStyles } from "../../../../styles/authentication/input"
import {constants} from "../../constants"
import { colors } from '../../../../styles/colors';
import {navigateToSignupPage} from "../../../login/actions";

export default class ItemListPage extends Component {
    render() {
        return (
            <View style={styles.background}>
                {/* Heading */}
                <View style={styles.container1}>
                    <View style={styles.heading}>
                        <Text style={styles.text1}>List</Text>
                        <Text style={styles.text2}>Current stock and spending of food</Text>
                    </View>
                    <View style={ styles.rightButton }>
                        <TouchableOpacity
                            onPress={() => Alert.alert('Pushed Add Icon!')}
                        >
                            <Icon name ='ios-add-circle' size={40} color='#05436F'/>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Search Bar */}
                <View style={styles.searchBar}>
                    <TextInput placeholder="Search    "
                               placeholderTextColor='rgba(5, 67, 111, 0.8)'
                               style={{fontFamily: 'Muli-Regular', fontSize: 14, paddingHorizontal: 32, paddingTop: 14.5}}
                    />
                    <View style={styles.searchButton}>
                        <Icon name ='ios-search' size={14} color='rgba(5, 67, 111, 1)'/>
                    </View>
                </View>


            </View>

        );
    }
}