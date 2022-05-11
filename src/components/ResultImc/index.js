import React from 'react'
import { Text, View } from 'react-native'


export function ResultImc(props) {
  return (
    <View>
        <Text>{props.messageResultImc}</Text>
        <Text>{props.resultImc}</Text>
    </View>
  )
}