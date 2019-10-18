import { Navigation } from "react-native-navigation";

export const navigateToSignupPage = () => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'signupPage'
            }
        }
    });
};
