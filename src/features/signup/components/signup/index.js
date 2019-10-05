import React, { Component } from 'react';
import {Text, TextInput, View, Button, Alert, TouchableOpacity} from 'react-native';
import { styles } from "./styles";
import { styles as inputStyles } from "../../../../styles/authentication/input"
import {constants} from "../../constants"
import { colors } from '../../../../styles/colors';
import {navigateToSignupPage} from "../../../login/actions";

export default class HelloWorldApp extends Component {
    render() {
        return (
            <View style={styles.background}>
                <Text style={styles.textHeader}>{constants.title}</Text>
                <Text style={ styles.fillName }>{constants.fillName}</Text>
                <View style={ styles.rule }>
                    <TextInput style={ inputStyles.input }
                               secureTextEntry={ false }
                               autoCompleteType={ 'name' }
                               textContentType={ 'name' }
                    />
                </View>
                <Text style={ styles.fillAIA }>{constants.fillAIA}</Text>
                <View style={ styles.rule }>
                    <TextInput style={ inputStyles.input }
                               secureTextEntry={ false }
                               autoCompleteType={ 'cc-number' }
                               textContentType={ 'none' }
                    />
                </View>
                <Text style={ styles.fillEMAIL }>{constants.fillEMAIL}</Text>
                <View style={ styles.rule }>
                    <TextInput style={ inputStyles.input }
                               secureTextEntry={ false }
                               autoCompleteType={ 'email' }
                               textContentType={ 'emailAddress' }
                    />
                </View>
                <Text style={ styles.fillPASSWORD }>{constants.fillPASSWORD}</Text>
                <View style={ styles.rule }>
                    <TextInput style={ inputStyles.input }
                               secureTextEntry={ true }
                               autoCompleteType={ 'password' }
                               textContentType={ 'password' }
                    />
                </View>
                <Text style={ styles.fillCOMFIRMPASSWORD }>{constants.fillCOMFIRMPASSWORD}</Text>
                <View style={ styles.rule }>
                    <TextInput style={ inputStyles.input }
                               secureTextEntry={ true }
                               autoCompleteType={ 'password' }
                               textContentType={ 'password' }
                    />
                </View>



                <View style={ styles.container }>
                <TouchableOpacity
                    style={styles.customBtnBG}
                    onPress={() => Alert.alert('Sign Up Button Pressed')}
                >
                    <Text style={styles.customBtnText}>Sign Up</Text>
                </TouchableOpacity>
                </View>

                <View style={ styles.lastContainer }>
                    {/*<Button title={ "Don’t have an account? Sign up!" }*/}
                    {/*        color={ colors.white }*/}
                    {/*        onPress={ navigateToSignupPage } />*/}
                    <TouchableOpacity
                        onPress={() => Alert.alert('Already have an account? Sign in!')}
                    >
                        <Text style={styles.customBtnTextN}>Already have an account? Sign in!</Text>
                    </TouchableOpacity>
                </View>

            </View>

        );
    }
}