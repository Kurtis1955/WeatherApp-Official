import React from 'react'
import { View,Text,StyleSheet} from 'react-native'

const RowText = (props) => {
    const {
        messageOneStyles,
        messageTwoStyles,
        containerStyles,
        messageOne,
        messageTwo
    } = props
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne} </Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default RowText