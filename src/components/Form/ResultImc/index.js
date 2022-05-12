import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'


export function ResultImc(props) {
  return (
    <View style={styles.resultImc} >
        <Text style={styles.information} >{props.messageResultImc}</Text>
        <Text style={styles.numberImc} >{props.resultImc}</Text>
    </View>
  )
}