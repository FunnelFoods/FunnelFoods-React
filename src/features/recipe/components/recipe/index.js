import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    FlatList, Dimensions, ImageBackground, Alert
} from 'react-native';
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from "../../../../styles/colors";
import SegmentedControlTab from 'react-native-segmented-control-tab'
import { Navigation } from "react-native-navigation";

export default class RecipeView extends Component {
    constructor(){
        super();
        this.state = {
            bannerHeight: Math.round(Dimensions.get('window').height) / 2,
            selectedIndex: 0,
            ingredientHeight: '100%',
            instructionsHeight: 0,
            recipe: {
                data: {
                    id: 1,
                    directions: [
                        "1. Place the stock, lentils, celery, carrot, thyme, and salt in a medium saucepan and bring to a boil. Reduce heat to low and simmer until the lentils are tender, about 30 minutes, depending on the lentils. (If they begin to dry out, add water as needed.) Remove and discard the thyme. Drain and transfer the mixture to a bowl; let cool.",
                        "2. Fold in the tomato, apple, lemon juice, and olive oil. Season with the pepper.",
                        "3. To assemble a wrap, place 1 lavash sheet on a clean work surface. Spread some of the lentil mixture on the end nearest you, leaving a 1-inch border. Top with several slices of turkey, then some of the lettuce. Roll up the lavash, slice crosswise, and serve. If using tortillas, spread the lentils in the center, top with the turkey and lettuce, and fold up the bottom, left side, and right side before rolling away from you."
                    ],
                    fat: 7,
                    date: "2006-09-01 03:00:00",
                    categories: [
                        "Sandwich",
                        "Bean",
                        "Fruit",
                        "Tomato",
                        "turkey",
                        "Vegetable",
                        "Kid-Friendly",
                        "Apple",
                        "Lentil",
                        "Lettuce",
                        "Cookie"
                    ],
                    calories: 426,
                    description: null,
                    protein: 30,
                    rating: 2.5,
                    title: "Lentil, Apple, and Turkey Wrap ",
                    ingredients: [
                        "4 cups low-sodium vegetable or chicken stock",
                        "1 cup dried brown lentils",
                        "1/2 cup dried French green lentils",
                        "2 stalks celery, chopped",
                        "1 large carrot, peeled and chopped",
                        "1 sprig fresh thyme",
                        "1 teaspoon kosher salt",
                        "1 medium tomato, cored, seeded, and diced",
                        "1 small Fuji apple, cored and diced",
                        "1 tablespoon freshly squeezed lemon juice",
                        "2 teaspoons extra-virgin olive oil",
                        "Freshly ground black pepper to taste",
                        "3 sheets whole-wheat lavash, cut in half crosswise, or 6 (12-inch) flour tortillas",
                        "3/4 pound turkey breast, thinly sliced",
                        "1/2 head Bibb lettuce"
                    ],
                    sodium: 559,
                    ingredients_processed: [
                        "stalk",
                        "oil",
                        "ground",
                        "tortilla",
                        "carrot",
                        "lettuce",
                        "turkey",
                        "lentil",
                        "breast",
                        "thyme",
                        "tomato",
                        "pepper",
                        "celery",
                        "salt",
                        "pound",
                        "stock",
                        "apple",
                        "lemon juice"
                    ]
                }
            }
        };
    };

    componentDidMount() {
        fetch('http://api.funnelfoods.com/api/recipes/1')
            .then((res) => res.json())
            .then((data) => {
                let newState = this.state;
                newState.recipe = data;
                this.setState(newState);
            });
    };

    handleIndexChange = (index) => {
        this.refs.scroll.scrollTo({x:0, y:0, animated: true}); // will scroll to the top at y-position 0
        this.refs.scroll.scrollTo({x:0, y:0, animated: false}); // reset without animation to make sure it stays
        this.setState({
            ...this.state,
            selectedIndex: index,
            ingredientHeight: index === 0 ? '100%' : 0,
            instructionsHeight: index === 1 ? '100%' : 0,
        });
    };

    /* Handle shrinking of the top bar */
    handleScroll = (event) => {
        let minFraction = 0.25;
        let newState = this.state;
        newState.bannerHeight = (Math.round(Dimensions.get('window').height) / 2)
            * (1 - (event.nativeEvent.contentOffset.y / Math.round(Dimensions.get('window').height)));
        if (newState.bannerHeight < Math.round(Dimensions.get('window').height) * minFraction) {
            newState.bannerHeight = Math.round(Dimensions.get('window').height) * minFraction;

        } else if (newState.bannerHeight > (Math.round(Dimensions.get('window').height) / 2)) {
            newState.bannerHeight = (Math.round(Dimensions.get('window').height) / 2);
        }
        this.setState(newState);
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={{...styles.banner, height: this.state.bannerHeight}}>
                    <View style = {styles.crossButton}>
                        <TouchableOpacity onPress={ () => Navigation.pop(this.props.componentId) }>
                            <Icon name ='ios-arrow-back' size={30} color={colors.white} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>{this.state.recipe.data.title}</Text>
                    <View style={styles.stats}>
                        <View style={styles.stars}><Icon name="ios-star" size={25} color={colors.white} style={styles.starIcon}/><Text style={styles.statText}>{this.state.recipe.data.rating}</Text></View>
                        <View style={styles.calories}><Text style={styles.statText}>{this.state.recipe.data.calories.toString() + "kcal"}</Text></View>
                        <View style={styles.minutes}><Text style={styles.statText}>{this.state.recipe.data.protein.toString() + "g protein"}</Text></View>
                    </View>
                </ImageBackground>
                <View style = {styles.controlTab}>
                    <SegmentedControlTab
                        values={['Ingredients', 'Instructions']}
                        selectedIndex={this.state.selectedIndex}
                        onTabPress={this.handleIndexChange}
                        activeTabStyle={{backgroundColor: colors.primaryNeon}}
                        tabStyle={{borderColor: colors.primaryNeon}}
                        tabTextStyle={{color: colors.primaryNeon, fontFamily: 'Muli-Regular'}}
                    />
                </View>
                <ScrollView ref="scroll" onScroll={this.handleScroll} scrollEventThrottle={16} bounces={false}>
                    <View style={{height: this.state.ingredientHeight}}>
                        <Text style={styles.sectionHeader}>Ingredients:</Text>
                        <FlatList
                            data={this.state.recipe.data.ingredients}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item}) =>
                                <Text style={styles.sectionText}>{item}</Text>
                            }
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <View style={{height: this.state.instructionsHeight}}>
                        <Text style={styles.sectionHeader}>Instructions:</Text>
                        <FlatList
                            data={this.state.recipe.data.directions}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item}) =>
                                <Text style={styles.sectionText}>{item}</Text>
                            }
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </ScrollView>
            </View>

        );
    }
}

