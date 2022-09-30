
import React from 'react'
import { HomePage, CheckoutPage } from '../modules'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { IStackNavigatorTypes } from './types'

const Stack = createNativeStackNavigator<IStackNavigatorTypes>()

const AppStack = (): JSX.Element => {
  return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Checkout" component={CheckoutPage}/>
        </Stack.Navigator>
  )
}

export default AppStack
