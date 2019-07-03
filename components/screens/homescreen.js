import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
export class HomeScreen extends Component{

    static navigationOptions =  ({ navigation }) => ({
      title: 'Santa Eucaristía',
      headerLeft: <MenuButton navigate={navigation} />,
      headerRight:<GlobalPlayButton/>,
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