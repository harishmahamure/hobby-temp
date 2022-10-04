
import React from 'react'
import { HomePage, CheckoutPage } from '../modules'
import { Stack } from './types'

const AppStack = (): JSX.Element => {
  return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Checkout" component={CheckoutPage}/>
        </Stack.Navigator>
  )
}

export default AppStack
