import React, { Component } from 'react';
import {Text, TextInput, View, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { styles } from "./styles";

export default class ItemList extends Component {
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

