import React, {useState,useEffect} from 'react';
import { ActivityIndicator, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';

const App = () =>{
  const [loading,setLoading]=useState(true)
  const [location,setLocation] = useState(null)
  const [error,setError] = useState(null)

  useEffect(()=>{
    // passing a funtion with immeadiate effect
    (async ()=>{
      let {status} = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted'){
        setError('permission to access location denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, 
  // to immediately invoke the function we set an empty array 
  [] )

  if (location){
    console.log(location)
  }

  if (loading){
    return(
      <View style={StyleSheet.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }
 
  return(
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    flex:1
  }
})

export default App