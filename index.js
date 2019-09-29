/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Navigation } from "react-native-navigation";
import LoginPage from "./src/features/login/components/login/index"
import SignupPage from "./src/features/signup/components/signup/index"

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('loginPage', () => LoginPage);
AppRegistry.registerComponent('signupPage', () => SignupPage);
Navigation.registerComponent('loginPage', () => LoginPage);
Navigation.registerComponent('signupPage', () => SignupPage);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
        topBar: {
            visible: false,
        }
    });
    Navigation.setRoot({
        root: {
            component: {
                name: "loginPage"
            }
        }
    });
});
