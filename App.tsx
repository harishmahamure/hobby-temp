import React from 'react'
import { Provider } from 'react-redux'
import { setupStore } from './redux/store'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './app/routes'
const store = setupStore({ product: { cartItems: [], products: [] } })

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppStack/>
      </Provider>
    </NavigationContainer>
  )
}

export default App
