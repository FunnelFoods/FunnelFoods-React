import React, { Component } from 'react';
import {Text, TextInput, View, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import data from "../../../../appStore";
import { styles as inputStyles } from "../../../../styles/authentication/input";
import {constants} from "../../constants";
import { colors } from '../../../../styles/colors';
import {navigateToSignupPage} from "../../../login/actions";

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishName: '',
            dishType: '',
            dishInventory: '',
            dishPrice: '',
            dishExpire: '',
            dishBuyDate: '',
        };
    }

    componentWillMount() {
        fetch('https://raw.githubusercontent.com/FunnelFoods/FunnelFoods-React/master/src/appStore.json')
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    dishIngredients: data.ingredients,
                    dishName: data.ingredients[0].name,
                    dishType: data.ingredients[0].category
                });
            });
    }

    render() {
        return (
                    <View style = {styles.container2}>
                        <View style = {styles.itemContainer}>
                            <Text style={styles.dishName}>
                                {this.props.dishName}
                            </Text>
                            <Text style={styles.dishType}>
                                {this.props.dishType}
                            </Text>
                            <Text style={styles.inventory}>
                                <Text style={styles.underline}>
                                    {this.props.dishInventory} bundles
                                </Text> in stock
                            </Text>
                            <Text style = {styles.price}>
                                $ {this.props.dishPrice}
                            </Text>
                            <Text style = {styles.expiration}>Expire on {this.props.dishExpire}</Text>
                            <Text style={styles.purchaseDate}>bought {this.props.dishBuyDate}</Text>
                        </View>
                    </View>
        );
    }
}

