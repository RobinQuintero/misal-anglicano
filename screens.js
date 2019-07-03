/*
  App: Misal Anglicano v1.0
  Author: Robin Quintero
  Email: robinquinteroc@gmail.com
  License: MIT

  /screens.js
  Contains all app's screen components, these are rendered by the Navigation wrapper
*/

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import { MenuButton } from './components/menubutton'
import { SquareButton } from './components/squarebutton'
import { GlobalPlayButton } from './components/playbuttons'
import { ritosiniciales, palabra, credo, eucaristia, ritosfinales } from './db';
import { TextScreen } from './components/screens/textscreen'
import { Player } from './components/services/player'

export class HomeScreen extends Component{

  static navigationOptions =  ({ navigation }) => ({
    title: 'Santa Eucaristía',
    headerLeft: <MenuButton navigate={navigation} />,
    headerRight:<GlobalPlayButton onPress={()=>Player.playPause()}/>,
    headerStyle:{backgroundColor:"white"},
    headerTintColor:"#212121"
  });
  render(){
    
    return(
        
      <View style={styles.container}>
      <StatusBar
      backgroundColor="white"
      barStyle="dark-content"
      />
        <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>Congregación religiosa San Patricio</Text>
        <Image source={require('./img/logo.png')} style={{height:"40%", width:"40%", marginTop:"5%", marginBottom:"5%"}} resizeMode="contain"/>

        <View style={{height:40, flex:1, flexDirection:"column", justifyContent:"space-evenly"}}>
          
            <SquareButton widthpercent="96%" text="RITOS INICIALES" id="Ritos Iniciales" navigation={this.props.navigation}/>
            <SquareButton widthpercent="47%" text="PALABRA" id="Palabra" navigation={this.props.navigation}/>
            <SquareButton widthpercent="47%" text="CREDO" id="Credo" navigation={this.props.navigation}/>
            <SquareButton widthpercent="47%" text="EUCARISTÍA" id="Eucaristia" navigation={this.props.navigation}/>
            <SquareButton widthpercent="47%" text="RITOS FINALES" id="Ritos finales" navigation={this.props.navigation}/>
      </View>
      </View>
    )
  }
  
}


export class RitosIniciales extends Component{
  static navigationOptions =  ({ navigation }) => ({
      title: 'Ritos Iniciales',
      headerLeft: <MenuButton navigate={navigation} />,
      headerRight:<GlobalPlayButton onPress={()=>Player.playPause()}/>,
      headerStyle:{backgroundColor:"white"},
      headerTintColor:"#212121"
    });
    
  render(){
      return <TextScreen data={ritosiniciales}/>
  }
}

export class Palabra extends Component {
    
  static navigationOptions =  ({ navigation }) => ({
    title: 'Palabra',
    headerLeft: <MenuButton navigate={navigation} />,
    headerRight:<GlobalPlayButton onPress={()=>Player.playPause()}/>,
    headerStyle:{backgroundColor:"white"},
    headerTintColor:"#212121"
  });
  render(){
    return <TextScreen data={palabra} navigationTitle="Palabra"/>
  }
}

export class Credo extends Component {
  static navigationOptions =  ({ navigation }) => ({
      title: 'Credo',
      headerLeft: <MenuButton navigate={navigation} />,
      headerRight:<GlobalPlayButton onPress={()=>Player.playPause()}/>,
      headerStyle:{backgroundColor:"white"},
      headerTintColor:"#212121"
    });
  render() {
      return <TextScreen data={credo}/>
  }
}

export class Eucaristia extends Component {
  static navigationOptions =  ({ navigation }) => ({
      title: 'Eucaristía',
      headerLeft: <MenuButton navigate={navigation} />,
      headerRight:<GlobalPlayButton onPress={()=>Player.playPause()}/>,
      headerStyle:{backgroundColor:"white"},
      headerTintColor:"#212121"
  });
  render() {
    return <TextScreen data={eucaristia}/>
  }
}

export class RitosFinales extends Component {
    static navigationOptions =  ({ navigation }) => ({
        title: 'Ritos finales',
        headerLeft: <MenuButton navigate={navigation} />,
        headerRight:<GlobalPlayButton onPress={()=>Player.playPause()}/>,
        headerStyle:{backgroundColor:"white"},
        headerTintColor:"#212121"
      });
    render() {
        return <TextScreen data={ritosfinales}/>
    }
}

  export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });