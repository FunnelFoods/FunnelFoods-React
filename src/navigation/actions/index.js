import { Navigation } from "react-native-navigation";
import { listIcon, cookIcon, settingsIcon } from "../components/icons";

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
                    component: {
                        name: "itemListPage",
                        options: {
                            bottomTab: {
                                text: 'List',
                                icon: listIcon
                            }
                        }
                    }
                }, {
                    component: {
                        name: 'cookPage',
                        options: {
                            bottomTab: {
                                text: 'Cook',
                                icon: cookIcon
                            }
                        }
                    }
                }, {
                    component: {
                        name: 'settingsPage',
                        options: {
                            bottomTab: {
                                text: 'Settings',
                                icon: settingsIcon
                            }
                        }
                    }
                }]
            }
        }
    });
};
