import { Navigation } from "react-native-navigation";
import { listIcon, cookIcon, settingsIcon } from "../components/icons";
import { colors } from "../../styles/colors";

export const navigateToSignupPage = () => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'signupPage'
            }
        }
    });
};

export const navigateToLoginPage = () => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'loginPage'
            }
        }
    });
};

export const navigateToScanner = () => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'scannerView'
            }
        }
    })
};

export const testRecipeView = () => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'recipeView'
            }
        }
    })
};

export const navigateToMainApp = () => {
    Navigation.setRoot({
        root: {
            bottomTabs: {
                children: [{
                    stack: {
                        children: [
                            {
                                component: {
                                    name: 'itemListPage'
                            }
                        }],
                        options: {
                            bottomTab: {
                                text: 'List',
                                icon: listIcon,
                                color: colors.primaryDark
                            }
                        }
                    }
                }, {
                    stack:{
                       children: [{
                           component: {
                               name: 'cookPage',
                           }
                       }],
                        options: {
                            bottomTab: {
                                text: 'Cook',
                                icon: cookIcon,
                                color: colors.primaryDark
                            }
                        }
                    }
                }, {
                    component: {
                        name: 'settingsPage',
                        options: {
                            bottomTab: {
                                text: 'Settings',
                                icon: settingsIcon,
                                color: colors.primaryDark
                            }
                        }
                    }
                }]
            }
        }
    });
};
