import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomePage = (): JSX.Element => {
  const navigation = useNavigation()
  const handleCheckoutPress = (): void => {
    navigation.navigate('Checkout', { cartId: 'harish' })
  }

  return (
    <View>
      <TouchableOpacity onPress={handleCheckoutPress}>
         <Text>HomePage</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomePage
