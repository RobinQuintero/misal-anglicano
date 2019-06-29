import React from 'react'
import { createStackNavigator, createAppContainer, createDrawerNavigator} from "react-navigation";
import {HomeScreen, Reproductor, RitosIniciales, Palabra, Credo, Eucaristia, RitosFinales} from './screens'


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


