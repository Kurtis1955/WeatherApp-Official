import React from 'react'
import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import RowText from '../components/RowText';
import { weatherType } from '../Utilities/weatherType';

const CurrentWeather = () => {
  return (
    <SafeAreaView style = {styles.wrapper}>
      <View style= {styles.container}>
        <Feather name='sun' size={100} color='black'/>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels Like 5</Text>
        <RowText 
          messageOne={'High:8'} 
          messageTwo={'Low:6'} 
          containerStyles={styles.highLowWrapper} 
          messageOneStyles={styles.highLow} 
          messageTwoStyles={styles.highLow}
        /> 
      </View>
      <RowText 
          messageOne={"It's sunny"} 
          messageTwo={weatherType['Thunderstorm'].message} 
          containerStyles={styles.bodyWrapper} 
          messageOneStyles={styles.description} 
          messageTwoStyles={styles.highLow}
        /> 
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
