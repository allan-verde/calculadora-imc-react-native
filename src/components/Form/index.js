import React, { useState } from 'react'
import { Text, TouchableOpacity, TextInput, View } from 'react-native'
import { ResultImc } from './ResultImc'
import { styles } from './styles'

export function Form() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState('preencha o peso e altura')
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState('Calcular')

  function imcCalculator() {
      return setImc((weight/(height*height)).toFixed(2))
  }

  function validationImc() {
      if (weight != null && height != null) {
          imcCalculator()
          setHeight(null)
          setWeight(null)
          setMessageImc('Seu imc é igual:')
          setTextButton('Calcular Novamente')
          return
        }
      setImc(null)
      setTextButton('Calcular')
      setMessageImc('preencha seu peso e altura')
  }

  return (
    <View style={styles.formContext} >
        <View style={styles.form} >
            <Text style={styles.formLabel}>Altura</Text>
            <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder='Ex. 1.75'
                keyboardType='numeric'
            />
            <Text style={styles.formLabel}>Peso</Text>
            <TextInput
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder='Ex. 75.365'
                keyboardType='numeric'
            />
            <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={() => {
                    validationImc()
                }}
            >
                <Text style={styles.textButtonCalculator} >{textButton}</Text>
            </TouchableOpacity>
        </View>
        <ResultImc
            messageResultImc={messageImc}
            resultImc={imc}
        />
    </View>
  )
}