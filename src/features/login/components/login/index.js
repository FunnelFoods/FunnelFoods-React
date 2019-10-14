import React, { Component } from 'react';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { Text, TextInput, View, Image, Button, Alert } from 'react-native';
import { styles } from "./styles";
import { styles as inputStyles } from "../../../../styles/authentication/input";
import { constants } from "../../constants";
import { colors } from "../../../../styles/colors"
import { navigateToSignupPage, navigateToMainApp } from "../../../../navigation/actions/index";

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
                                onPress={ navigateToMainApp }
                        />
                    </View>
                </View>
                <View stule = { styles.container }>
                    <LoginButton
                        onLoginFinished={
                            (error, result) => {
                                if (error) {
                                    console.log("login has error: " + result.error);
                                } else if (result.isCancelled) {
                                    console.log("login is cancelled.");
                                } else {
                                    AccessToken.getCurrentAccessToken().then(
                                        (data) => {
                                            console.log(data.accessToken.toString())
                                        }
                                    )
                                }
                            }
                        }
                        onLogoutFinished={() => console.log("logout.")}/>
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
