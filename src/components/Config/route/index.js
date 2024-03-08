import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Activity, Home } from '../../page';

const MaterialBottom = createMaterialBottomTabNavigator();

export default class Index extends Component {
  render() {
    return (
      <NavigationContainer>
        <MaterialBottom.Navigator>
          <MaterialBottom.Screen name="Home" component={Home} />
          <MaterialBottom.Screen name="Actvity" component={Activity} />
        </MaterialBottom.Navigator>
      </NavigationContainer>
    );
  }
}