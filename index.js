/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Navigation } from "react-native-navigation";
import LoginPage from "./src/features/login/components/login/index"
import SignupPage from "./src/features/signup/components/signup/index"
import ItemListPage from "./src/features/list/components/list/index";
import CookPage from "./src/features/cook/components/cook/index";
import SettingsPage from "./src/features/settings/components/settings/index"
import {navigateToMainApp, testRecipeView} from "./src/navigation/actions";
import ScannerView from "./src/features/scan/components/scan";
import RecipeView from "./src/features/recipe/components/recipe";

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('loginPage', () => LoginPage);
AppRegistry.registerComponent('signupPage', () => SignupPage);
AppRegistry.registerComponent('itemListPage', () => ItemListPage);
AppRegistry.registerComponent('cookPage', () => CookPage);
AppRegistry.registerComponent('scannerView', () => ScannerView);
AppRegistry.registerComponent('settingsPage', () => SettingsPage);
AppRegistry.registerComponent('recipeView', () => RecipeView);
Navigation.registerComponent('loginPage', () => LoginPage);
Navigation.registerComponent('signupPage', () => SignupPage);
Navigation.registerComponent('itemListPage', () => ItemListPage);
Navigation.registerComponent('cookPage', () => CookPage);
Navigation.registerComponent('settingsPage', () => SettingsPage);
Navigation.registerComponent('scannerView', () => ScannerView);
Navigation.registerComponent('recipeView', () => RecipeView);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
        topBar: {
            visible: false,
        }
    });
    navigateToMainApp();
    /**
    Navigation.setRoot({
        root: {
            component: {
                name: "loginPage",
            }
        }
    });
     */
});
