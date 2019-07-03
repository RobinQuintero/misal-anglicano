import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
export class PlayButton extends Component{
    render(){
      return(
        <TouchableOpacity activeOpacity={.8} onPress={this.props.onPress} style={{
          width:50,
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
          <View style={{flex:1, justifyContent:"center", paddingLeft:2.5}} >
          <Image
                source={require('../img/play.png')}
                style={{ width: 25, height: 25, marginLeft: 10 }} 
                
            />
          </View>
        </TouchableOpacity>
      )
    }
  }

  export class GlobalPlayButton extends Component{
    render(){
      return(
        <TouchableOpacity activeOpacity={.8} onPress={this.props.onPress} style={{
          width:50,
        height:50,
        backgroundColor:'white', 
        borderRadius:50,
  
        }}>
          <View style={{flex:1, justifyContent:"center", paddingLeft:2.5}} >
          <Image
                source={require('../img/play.png')}
                style={{ width: 25, height: 25, marginLeft: 10 }} 
                
            />
          </View>
        </TouchableOpacity>
      )
    }
  }
