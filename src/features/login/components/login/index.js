import React, { Component } from 'react';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import { Text, TextInput, View, Image, Button, Alert, ScrollView } from 'react-native';
import { styles } from "./styles";
import { styles as inputStyles } from "../../../../styles/authentication/input";
import { constants } from "../../constants";
import { colors } from "../../../../styles/colors"
import { navigateToSignupPage, navigateToMainApp } from "../../../../navigation/actions/index";
import {signIn} from "../../../../actions";

// Necessary to setup the Google sign in button.
GoogleSignin.configure();

export default class LoginPage extends Component {
    state = {
        isUserSignedIn: false,
        loggedInUser: {},
        checkingSignedInStatus: true
    };
    constructor() {
        super();
        GoogleSignin.configure();
    }
    render() {
        return (
            <ScrollView style = {styles.scrollBackground}>
                <View style={ styles.background }>
                    <Image source={ require('../../../../assets/logo/logo.png') }
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
                    <View style = { styles.container }>
                        <LoginButton style = { styles.facebookButtonContainer }
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
                    <View style = { styles.container }>
                        <GoogleSigninButton
                            size={ GoogleSigninButton.Size.Wide }
                            style={ styles.googleButtonContainer }
                            color={GoogleSigninButton.Color.Light}
                            onPress={this.googleSignIn}
                            disabled={this.state.isSigninInProgress} />
                    </View>
                    <View style={ styles.container }>
                        <Button title={ "Don’t have an account? Sign up!" }
                                color={ colors.white }
                                onPress={ navigateToSignupPage } />
                    </View>
                </View>
            </ScrollView>
        );
    }
    /**
     * @name googleSignIn
     */
    googleSignIn = async () => {
        try {
            /** TODO: redux integrations, refer to
             * https://medium.com/fullstack-with-react-native-aws-serverless-and/google-sign-in-for-react-native-ios-c7197add640b */
            this.setState({ isSigninInProgress: true });
            await GoogleSignin.hasPlayServices();
            const loggedInUser = await GoogleSignin.signIn();
            this.setState({
                loggedInUser,
                isUserSignedIn: true,
                isSigninInProgress: false
            });
        } catch (error) {
            this.handleSignInError(error);
        }
    };

    /**
     * @name handleSignInError
     * @param error the SignIn error object
     */
    handleSignInError = async error => {
        if (error.code) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                this.showSignInError('User cancelled the login flow.');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                this.showSignInError('Sign in is in progress.');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                await this.getGooglePlayServices();
            } else {
                this.showSignInError(JSON.stringify(error));
            }
        } else {
            this.showSignInError(JSON.stringify(error));
        }
        this.setState({ isSigninInProgress: false });
    };

    /**
     * @name getGooglePlayServices
     */
    getGooglePlayServices = async () => {
        try {
            await GoogleSignin.hasPlayServices({
                showPlayServicesUpdateDialog: true
            });
            // google services are available
        } catch (err) {
            this.showSignInError('Play services are not available.');
        }
    };

    /**
     * @name showSignInError
     * @param alertMessage - message to be shown on alert box
     */
    showSignInError = alertMessage => {
        Alert.alert(
            'Google Signin Error',
            alertMessage,
            [
                {
                    text: 'OK'
                }
            ],
            {
                cancelable: false
            }
        );
    };
}
