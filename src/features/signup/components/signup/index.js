import React, { Component } from 'react';
import {Text, TextInput, View} from 'react-native';
import { styles } from "./styles";
import { styles as inputStyles } from "../../../../styles/authentication/input"
import {constants} from "../../constants"
export default class HelloWorldApp extends Component {
    render() {
        return (
            <View style={styles.background}>
                <Text style={styles.textHeader}>{constants.title}</Text>
                <Text style={ styles.fillName }>{constants.fillName}</Text>
                <View
                    style={ styles.rule }
                />
                <Text style={ styles.fillAIA }>{constants.fillAIA}</Text>
                <View
                    style={ styles.rule }
                />
                <Text style={ styles.fillEMAIL }>{constants.fillEMAIL}</Text>
                <View
                    style={ styles.rule }
                />
                <Text style={ styles.fillPASSWORD }>{constants.fillPASSWORD}</Text>
                <View
                    style={ styles.rule }
                />
                <Text style={ styles.fillCOMFIRMPASSWORD }>{constants.fillCOMFIRMPASSWORD}</Text>
                <View
                    style={ styles.rule }
                />
            </View>

        );
    }
}