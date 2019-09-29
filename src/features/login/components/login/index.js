import React, { Component } from 'react';
import { Text, TextInput, View, Image, Button, Alert } from 'react-native';
import { styles } from "./styles";
import { styles as inputStyles } from "../../../../styles/authentication/input";
import { constants } from "../../constants";
import { colors } from "../../../../styles/colors"
import { navigateToSignupPage } from "../../actions";

export default class LoginPage extends Component {
    render() {
        return (
            <View style={ styles.background }>
                <Image source={ require('../../../../assets/logo.png') }
                       style={ styles.logo }/>
                <View style={ styles.container }>
                    <Text style={ inputStyles.field }>{ constants.fields.email }</Text>
                    <TextInput style={ inputStyles.input }
                               secureTextEntry={ false }
                               autoCompleteType={ 'email' }
                               textContentType={ 'emailAddress' }
                    />
                </View>
                <View style={ styles.container }>
                    <Text style={ inputStyles.field }>{ constants.fields.password }</Text>
                    <TextInput style={ inputStyles.input }
                               secureTextEntry={ true }
                               autoCompleteType={ 'password' }
                               textContentType={ 'password' }
                    />
                </View>
                <View style={ styles.container }>
                    <View style={ styles.buttonContainer }>
                        { /* TODO: Implement button behavior */ }
                        <Button title="sign in"
                                color={ colors.primaryLight }
                                onPress={() => Alert.alert('Simple Button pressed')}
                        />
                    </View>
                </View>
                <View style={ styles.container }>
                    <Button title={ "Don’t have an account? Sign up!" }
                            color={ colors.white }
                            onPress={ navigateToSignupPage } />
                </View>
            </View>
        );
    }
}
