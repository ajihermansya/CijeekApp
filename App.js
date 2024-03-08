import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import CardPay from './src/components/CardPay/CardPay'

const App = () => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <CardPay />
  </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
});