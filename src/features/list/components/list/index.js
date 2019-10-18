// TODO: Replace the code once merged!

import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { navigateToLoginPage } from "../../../../navigation/actions/index";

export default class ItemListPage extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Text>This is the index page for item list</Text>
                <Button title={"navigate back to login page"} onPress={ navigateToLoginPage } />
            </View>
        );
    }
}
