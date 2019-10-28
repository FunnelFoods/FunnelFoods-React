import React, { Component } from 'react';
import { Text, View, FlatList, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import Recipe from "../recipe/index";
import {constants} from "../../constants";
import {colors} from "../../../../styles/colors";


export default class CookPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishIngredients: [],
        };
    }

    componentDidMount() {
        // TODO: Change this
        fetch('http://api.funnelfoods.com/api/receipt/recommend?input=[%27apple%27,%27orange%27]')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({recipes: responseJson.data});
            });
    }

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.headerContainer }>
                    <View style={ styles.titleContainer }>
                        <Text style={ styles.title }>
                            { constants.cookPage.title }
                        </Text>
                    </View>
                    <View style={ styles.searchContainer }>
                        <TouchableOpacity onPress={() => Alert.alert('Pushed Search Icion')}>
                            <Icon name ='ios-search' size={30} color={ colors.white } style = { styles.icon } />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <FlatList
                        data = {this.state.recipes}
                        renderItem={({ item }) => <Recipe
                            name = { item.title }
                            rating = { item.rating }
                            heat = { item.calories }
                            protein = { item.protein }
                        />}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </ScrollView>
            </View>
        );
    }
}
