/*
  App: Misal Anglicano v1.0
  Author: Robin Quintero
  Email: robinquinteroc@gmail.com
  License: MIT

  /components/screens/textscreen.js
  TextScreen component, renders text and player components dynamically based on '/db.js' data.
*/
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-material-dropdown';
import { PlayerComponent } from '../playercomponent';

export class TextScreen extends Component{

    populate = (screendata, elems) =>{
        for (let i = 0; i < screendata.length;i++){
            if (screendata[i].type == "text"){
                elems.push(
                    <Text style={{
                        textAlign:"center", 
                        fontWeight:"bold", 
                        fontSize:20, 
                        color:screendata[i].color, 
                        justifyContent:'center' 
                        }}
                    >{screendata[i].text}</Text>
                )
            }else if(screendata[i].type == "audio"){
                elems.push(<PlayerComponent songs={screendata[i].songs} title={screendata[i].title}/>)
            }
        }
        
    }
      
    render(){
        let elems = []
        this.populate(this.props.data, elems)
        
        return(
            <View>
            <StatusBar
                backgroundColor="white"
                barStyle="dark-content"
                />
                <View >
                <ScrollView>
                <ScrollView style={{padding:5}}>{elems}</ScrollView></ScrollView>
                    
                </View>
            </View>
        )
    }
}