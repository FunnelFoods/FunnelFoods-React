import React, { Component } from 'react';
import { Text, TextInput, View, Image, Button, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';
import RNTextDetector from "react-native-text-detector";
import { styles } from "./styles.js";
import { navigateToMainApp } from "../../../../navigation/actions";
import {colors} from "../../../../styles/colors";

export default class ScannerView extends Component {
    constructor() {
        super();
        this.state = {
            flashState: RNCamera.Constants.FlashMode.off,
            flashIcon: 'ios-flash-off',
            receiptLines: [],
        }
    };
    render() {
        return (
                <View style={styles.container}>
                    <View style={styles.topBar}>
                        <TouchableOpacity onPress={ navigateToMainApp } style={styles.backButton}>
                            <Icon name ='ios-arrow-back' size={35} color={colors.white}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ this.toggleFlashState } style={styles.flashButton}>
                            <Icon name ={this.state.flashIcon} size={35} color={colors.white} />
                        </TouchableOpacity>
                    </View>
                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={styles.preview}
                        type={RNCamera.Constants.Type.back}
                        flashMode={this.state.flashState}
                        captureAudio={false}
                        autoFocus={RNCamera.Constants.AutoFocus.on}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'Please enable access to the camera to scan your receipt.',
                            buttonPositive: 'OK',
                            buttonNegative: 'Cancel',
                        }}
                    />
                    <View style={styles.bottomBar}>
                        <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                            <Icon name ='ios-radio-button-on' size={65} color={colors.white} />
                        </TouchableOpacity>
                    </View>
                </View>

        );
    }

    takePicture = async() => {
        if (this.camera) {
            try {
                const options = {
                    quality: 1.0,
                    base64: true,
                    forceUpOrientation: true,
                    fixOrientation: true
                };
                const { uri } = await this.camera.takePictureAsync(options);
                const results = await RNTextDetector.detectFromUri(uri);
                this.processResponse(results);
            } catch (e) {
                Alert.alert("Receipt scanning failed", "Please move your camera closer to the receipt.")
            }
        }
    };

    processResponse = async(results) => {
        // Choose the most confident group of text
        let receiptLines = [];
        for (var i = 0; i < results.length; i++) {
            receiptLines = receiptLines.concat(results[i].text.split("\n"));
        }
        for (var j = 0; j < receiptLines.length; j++) {
            receiptLines[j] += " 2.53";
        }
        console.log(receiptLines);
        try {
            let response = await fetch(
                `http://api.funnelfoods.com/api/receiptparse/items/parse?input=${JSON.stringify(receiptLines)}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            const result = await response.json();
            console.log(result);
        } catch (error) {
            Alert.alert("Failed to connect", "Make sure that your internet connection is working and try again!");
        }
    };

    toggleFlashState = () => {
        if (this.state.flashState === RNCamera.Constants.FlashMode.off) {
            this.setState(
                {
                    flashState: RNCamera.Constants.FlashMode.on,
                    flashIcon: 'ios-flash'
                }
            );
        } else {
            this.setState(
                {
                    flashState: RNCamera.Constants.FlashMode.off,
                    flashIcon: 'ios-flash-off'
                }
            );
        }
    };
}
