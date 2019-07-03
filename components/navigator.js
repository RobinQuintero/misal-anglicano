/*
  App: Misal Anglicano v1.0
  Author: Robin Quintero
  Email: robinquinteroc@gmail.com
  License: MIT

  /components/navigator.js
  Main navigation wrapper.
*/
import { createStackNavigator, createDrawerNavigator} from "react-navigation";
import {HomeScreen, RitosIniciales, Palabra, Credo, Eucaristia, RitosFinales} from '../screens'

export const HomeStack = createStackNavigator({
  Home: {screen: HomeScreen}
})

export const RitosInicialesStack = createStackNavigator({
  "Ritos Iniciales": {screen: RitosIniciales}
})

export const PalabraStack = createStackNavigator({
  "Palabra":{screen: Palabra}
})

export const CredoStack = createStackNavigator({
  "Credo":{screen: Credo}
})

export const EucaristiaStack = createStackNavigator({
  "Eucaristia":{screen: Eucaristia}
})

export const RitosFinalesStack = createStackNavigator({
  "Ritos finales":{screen: RitosFinales}
})



export const DrawerNavigator = createDrawerNavigator({
  Inicio: {
    screen: HomeStack
  },
  "Ritos Iniciales":{
    screen:RitosInicialesStack
  },
  "Palabra":{
    screen:PalabraStack
  },
  "Credo":{
    screen:CredoStack
  },
  "Eucaristia":{
    screen:EucaristiaStack
  },
  "Ritos Finales":{
    screen:RitosFinalesStack
  }
})


