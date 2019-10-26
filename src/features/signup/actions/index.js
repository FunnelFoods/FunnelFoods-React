import { Navigation } from "react-native-navigation";

export const navigateToLoginPage = () => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'loginPage'
            }
        }
    });
};
