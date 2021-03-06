import React, { Component } from 'react';
import {Text, TextInput, View, FlatList, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import ItemList from "../item";
import { navigateToScanner } from "../../../../navigation/actions";
import Moment from 'react-moment';
import 'moment-timezone';
import moment from "moment";
import {colors} from "../../../../styles/colors";
import {Navigation} from "react-native-navigation";

export default class ItemListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishIngredients: [],
        };
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/FunnelFoods/FunnelFoods-React/master/src/appStore.json')
            .then((res) => res.json())
            .then((data) => {
                this.setState({dishIngredients: data.ingredients});
                let stateCopy = JSON.parse(JSON.stringify(this.state.dishIngredients));
                for (let i = 0; i<stateCopy.length; i++) {
                    stateCopy[i].purchaseTime = moment(new Date(stateCopy[i].purchaseTime * 1000)).format('MM/DD/YYYY');
                }
                    this.setState({
                        dishIngredients:stateCopy
                    })
            });
        console.log(this.props.results);
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
                        <TouchableOpacity onPress={() => Alert.alert('Pushed Add Icon!')}>
                            <Icon name ='ios-add-circle' size={35} color={colors.white} style = { styles.icon } />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Navigation.showModal({
                            stack: {
                                children: [{
                                    component: {
                                        name: 'scannerView',
                                    }
                                }]
                            }
                        })}>
                            <Icon name ='ios-camera' size={40} color={colors.white} style = { styles.icon }/>
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
                        purchaseTime = {this.state.dishPurchaseTime}
                        renderItem={({ item }) => <ItemList
                            dishName = {item.name}
                            dishType= {item.category}
                            dishInventory="5"
                            dishPrice = {item.price}
                            dishExpire = {item.purchaseTime}
                            dishBuyDate="6th June"
                        />}

                        keyExtractor={(item, index) => index.toString()}
                    />
            </ScrollView>

            </View>

        );
    }
}

