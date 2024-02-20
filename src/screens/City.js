import React from 'react';
import {View, SafeAreaView,Text,StyleSheet,ImageBackground,StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';

const City = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <ImageBackground source={require('../../assets/city-background.jpg')} style={styles.imageLayout}>
         <Text style={[styles.cityName, styles.cityText]}>Accra</Text> 
         <Text style={[styles.countryName, styles.cityText]}>Ghana</Text>
         <View style={styles.populationWrapper}>
            <Feather name={'user'} size={50} color={'aqua'}/>
            <Text style={styles.populationText}>8000 Population</Text>
         </View>
         <View style={styles.riseSetWrapper}>
            <Feather name={'sunrise'} size={50} color={'white'}/>
            <Text style={styles.riseSetText}>10:16:23 am</Text>
            <Feather name={'sunset'} size={50} color={'white'}/>
            <Text style={styles.riseSetText}>17:45:36 pm</Text>
         </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    imageLayout:{
        flex: 1
    },
    cityName:{
        fontSize: 40,
    },
    countryName:{
        fontSize: 30    
    },
    cityText:{
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: "#fff"  
    },
    populationWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:30
    },
    populationText:{
        fontSize:25,
        marginLeft:7.5,
        color:'yellow',
        fontWeight:'bold'
    },
    riseSetWrapper:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',
        marginTop: 30
    },
    riseSetText:{
        fontSize:20,
        color: '#fff',
        fontWeight:'bold'
    }
})
export default City;