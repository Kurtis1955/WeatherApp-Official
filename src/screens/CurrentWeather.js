import React from 'react'
import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const CurrentWeather = () => {
  return (
    <SafeAreaView style = {styles.wrapper}>
      <View style= {styles.container}>
        <Feather name='sun' size={100} color='black'/>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels Like 5</Text>
        <View style= {styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8 </Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View> 
      </View>
      <View style={styles.bodyWrapper}>
          <Text style={styles.description}>It's sunny</Text>
          <Text style={styles.message}>It's perfect T-shirt weather</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'pink',
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  temp:{
    color: 'black',
    fontSize: 48
  },
  feels:{
    fontSize: 30,
    color: 'black',
  },
  highLow:{
    color:'black',
    fontSize: 30
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems:'flex-start',
    paddingLeft: 25,
    marginBottom:40
  },
  description:{
    fontSize: 40
  },
  message:{
    fontSize: 30
  }

});
export default CurrentWeather;
