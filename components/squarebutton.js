import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export class SquareButton extends Component{
    render(){
      return(
        <TouchableOpacity onPress={() => this.props.navigation.navigate(this.props.id)} activeOpacity={.8} style={{
          width:250,
        height:50,
        backgroundColor:'#039be5', 
        borderRadius:50,
        shadowColor: "#29b6f6",
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 2.62,
        elevation: 4,
  
        }}>
          <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text style={{textAlign:"center", textAlignVertical:"center", color:"white",  fontSize:18, fontWeight:"bold"}}>{this.props.text}</Text>
          </View>
        </TouchableOpacity>
      )
    }
  }