
import React from 'react';
import { SafeAreaView,Text,StyleSheet,ImageBackground,StatusBar } from 'react-native';

const City = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <ImageBackground source={require('../../assets/city-background.jpg')} style={styles.imageLayout}>
         <Text style={styles.cityName}>Accra</Text> 
         <Text style={styles.countryName}>Ghana</Text>
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
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: "#fff" 
    },
    countryName:{
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: "#fff"    
    }
})
export default City;