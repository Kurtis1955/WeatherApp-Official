import React from 'react';
import {View, SafeAreaView,Text,StyleSheet,ImageBackground,StatusBar } from 'react-native';
import IconText from '../components/IconText';

const City = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <ImageBackground source={require('../../assets/city-background.jpg')} style={styles.imageLayout}>
         <Text style={[styles.cityName, styles.cityText]}>Accra</Text> 
         <Text style={[styles.countryName, styles.cityText]}>Ghana</Text>
         <View style={styles.populationWrapper}>
            <IconText 
              iconName={'user'}
              iconColor={'aqua'} 
              bodyText={'8000 population'} 
              bodyTextStyles={[styles.populationText ,styles.rowLayout]} 
            />
         </View>
         <View style={[styles.riseSetWrapper ,styles.rowLayout]}>
         <IconText 
              iconName={'sunrise'}
              iconColor={'#fff'} 
              bodyText={'10:16:23am'} 
              bodyTextStyles={styles.riseSetText} 
            />           
            <IconText 
              iconName={'sunset'}
              iconColor={'#fff'} 
              bodyText={'17:45:36pm'} 
              bodyTextStyles={styles.riseSetText} 
            />
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
        justifyContent:'center',
        marginTop:30
    },
    populationText:{
        fontSize:25,
        marginLeft:7.5,
        color:'yellow',   
    },
    riseSetWrapper:{
        justifyContent:'space-around',
        marginTop: 30
    },
    riseSetText:{
        fontSize:20,
        color: '#fff'
    },
    rowLayout:{
        flexDirection:'row',
        alignItems:'center'
    }
})
export default City;