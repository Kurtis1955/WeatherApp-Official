import React from 'react';
import {View, SafeAreaView,Text,StyleSheet,ImageBackground,StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
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
              bodyTextStyles={styles.populationText} 
            />
         </View>
         <View style={styles.riseSetWrapper}>
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
              bodyTextStyles={styles.populationText} 
            />
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
    },
    riseSetWrapper:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',
        marginTop: 30
    },
    riseSetText:{
        fontSize:20,
        color: '#fff'
    }
})
export default City;