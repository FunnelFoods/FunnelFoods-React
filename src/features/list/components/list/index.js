import React, { Component } from 'react';
import {Text, TextInput, View, FlatList, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import ItemList from "../item";

export default class ItemListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishIngredients: [],
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
                    // dishName: data.ingredients[0].name,
                    // dishType: data.ingredients[0].category
                });
            });
    }

    render() {
        return (
            <View style={styles.background}>
                {/* Heading */}
                <View style={styles.container1}>
                    <View style={styles.heading}>
                        <Text style={styles.text1}>List</Text>
                        <Text style={styles.text2}>Current stock and spending of food</Text>
                    </View>
                    <View style={ styles.rightButton }>
                        <TouchableOpacity
                            onPress={() => Alert.alert('Pushed Add Icon!')}
                        >
                            <Icon name ='ios-add-circle' size={40} color='#05436F'/>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Search Bar */}
                <View style = {styles.containerBar}>
                <View style={styles.searchBar}>
                    <TextInput placeholder="Search                        "
                               placeholderTextColor='rgba(5, 67, 111, 0.8)'
                               style={{fontFamily: 'Muli-Regular', fontSize: 14, paddingHorizontal: 32, paddingTop: 14.5}}
                    />
                </View>
                <View style={styles.searchButton}>
                <TouchableOpacity
                            onPress={() => Alert.alert('Pushed Search Icon!')}
                        >
                        <Icon name ='ios-search' size={14} color='rgba(5, 67, 111, 1)'/>
                </TouchableOpacity>
                </View>
                </View>
            <ScrollView>
                    <FlatList
                        data = {this.state.dishIngredients}
                        renderItem={({ item }) => <ItemList
                            dishName = {item.name}
                            dishType= {item.category}
                            dishInventory="5"
                            dishPrice = {item.price}
                            dishExpire = "6th June"
                            dishBuyDate="6th June"
                        />}
                    />
            </ScrollView>

            </View>

        );
    }
}

