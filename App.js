/*
  App: Misal Anglicano v1.0
  Author: Robin Quintero
  Email: robinquinteroc@gmail.com
  License: MIT
*/

// App.js
// Entry point for the App

import { createStackNavigator, createAppContainer, createDrawerNavigator} from "react-navigation";
import {DrawerNavigator} from './components/navigator'


//Initialize the main Navigation Wrapper (/components/navigator)
const Drawer = createAppContainer(DrawerNavigator)
export default Drawer


