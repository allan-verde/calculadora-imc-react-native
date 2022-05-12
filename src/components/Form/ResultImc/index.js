import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'


export function ResultImc(props) {
  return (
    <View style={styles.formContext} >
        <Text>{props.messageResultImc}</Text>
        <Text>{props.resultImc}</Text>
    </View>
  )
}