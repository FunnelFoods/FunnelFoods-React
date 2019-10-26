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
}

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
                            }
                        }
                    }
                }, {
                    component: {
                        name: 'cookPage',
                        options: {
                            bottomTab: {
                                text: 'Cook',
                            }
                        }
                    }
                }, {
                    component: {
                        name: 'settingsPage',
                        options: {
                            bottomTab: {
                                text: 'Settings',
                            }
                        }
                    }
                }]
            }
        }
    });
};
