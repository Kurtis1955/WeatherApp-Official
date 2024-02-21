import React from 'react'
import { View,Text,StyleSheet} from 'react-native'

const RowText = (props) => {
    const {messageOneStyles,messageTwoStyles,containerStyles,messageone,messagetwo} = styles
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageone} </Text>
      <Text style={messageTwoStyles}>{messagetwo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default RowText