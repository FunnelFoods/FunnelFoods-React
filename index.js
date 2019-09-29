/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Navigation} from "react-native-navigation";
import HelloWorldApp from "./src/features/signup/components/signup";
import {} from './src/features/signup/components/signup/index'
AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
AppRegistry.registerComponent('signup', ()=>LoginPage)

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
            root: {
              component: {
                    name: "HelloWorldApp"
                  }
            }
     });
});


