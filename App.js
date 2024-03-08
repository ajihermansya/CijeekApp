import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import Routes from './src/components/Config/route';
const {height, width} = Dimensions.get('window');

class App extends Component {
render() {
  return(
    <Routes/>
  )
}
}

export default App

