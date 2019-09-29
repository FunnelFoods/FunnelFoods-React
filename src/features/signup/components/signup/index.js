import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from "./styles";
import { field, input} from "src/styles/authentication"
import {constants} from "../../constants"
export default class HelloWorldApp extends Component {
    render() {
        return (
            <View style={styles.background}>
                <Text style={styles.textHeader}>{constants.title}</Text>
                <Text style={field}>{constants.fillName}</Text>

            </View>

        );
    }
}