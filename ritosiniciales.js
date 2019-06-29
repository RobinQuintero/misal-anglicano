import {Component} from 'react'
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Button,StatusBar} from 'react-native';


export class RitosIniciales extends Component{
    static navigationOptions =  ({ navigation }) => ({
        title: 'Ritos Iniciales',
        headerLeft: <MenuButton navigate={navigation} />,
        headerStyle:{backgroundColor:"white"},
        headerTintColor:"#212121"
      });
    render(){
        
        return(
            <View>
            <StatusBar
                backgroundColor="white"
                barStyle="dark-content"
                />
                <Text>
                    AAAA
                </Text>
            </View>
        )
    }
}