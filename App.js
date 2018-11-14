import React, { Component } from "react";
import { createDrawerNavigator } from "react-navigation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import One from "./src/screen";
import Two from "./src/screen2";

export default createDrawerNavigator({
  Screen1: {
    screen: One,
    navigationOptions: {
      drawerLabel: "Gallery1",
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="grade" size={24} style={{ color: tintColor }} />
      )
    }
  },
  Screen2: {
    screen: Two,
    navigationOptions: {
      drawerLabel: "Gallery2",
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="panorama" size={24} style={{ color: tintColor }} />
      )
    }
  }
});
