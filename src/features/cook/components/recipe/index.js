import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { styles } from "./styles";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default class Recipe extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <ImageBackground source={ require("../../../../assets/dish.jpg") }
                                 resizeMode={ 'cover' }
                                 style={ styles.imageContainer }>
                    <View style={ styles.informationContainer }>
                        <View style={ styles.fieldContainer }>
                            <Text style={ styles.field }>
                                <FontAwesome5 style={ styles.field } name={'star'} solid />
                                { this.props.rating }
                            </Text>
                        </View>
                        <View style={ styles.fieldContainer }>
                            <Text style={ styles.field }>{ this.props.heat }</Text>
                        </View>
                        <View style={ styles.fieldContainer }>
                            <Text style={ styles.field }>{ this.props.protein }</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={ styles.nameContainer }>
                    <Text style={ styles.name }>
                        { this.props.name }
                    </Text>
                </View>
            </View>
        );
    }
}
