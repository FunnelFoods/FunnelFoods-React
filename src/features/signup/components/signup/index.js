// TODO: Replace the code once merged!

import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import {navigateToLoginPage} from "../../actions";

export default class SignupPage extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Text>This is the signup page</Text>
                <Button title={"navigate back to login page"} onPress={ navigateToLoginPage } />
            </View>
        );
    }
}
