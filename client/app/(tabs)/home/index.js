import { StyleSheet, Text, View,SafeAreaView,StatusBar } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <SafeAreaView style={{
      marginTop:StatusBar.currentHeight,
    }}>
      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})