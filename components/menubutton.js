import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

export class MenuButton extends Component {
	render(){
    
        return(
            <View>
                <TouchableOpacity onPress={() => {this.props.navigate.openDrawer()} }>
                <Image
                    source={ require('../img/hamburger_icon.png') }
                    style={{ width: 25, height: 25, marginLeft: 10 }}
                />
                </TouchableOpacity>
            </View>
        )
    }
}