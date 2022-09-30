import { FlatList, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Header, Text } from '../../components'
import { useAppDispatch, useAppSelector } from '../../components/hooks'
import { black, primary } from '../../constants/colors'
import { incrementProductCartCount, decrementProductCartCount } from '../home-page/redux/reducer'
import { useNavigation } from '@react-navigation/native'
const CheckoutPage = (): JSX.Element => {
  const { cartItems } = useAppSelector(st => st.product)
  const dispatch = useAppDispatch()
  const { navigate } = useNavigation()
  useEffect(() => {
    console.log(cartItems.length, cartItems.length > 0)
    if (cartItems.length < 1) {
      navigate('Home')
    }
  }, [cartItems.length])
  return (
    <View>
      <Header cartItems={cartItems}/>
        <FlatList
        data={cartItems}
        renderItem={({ item }) => {
          const { name, id, count } = item
          return (
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
              <Text size={20} weight="600" color={black}>
                {name}
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => dispatch(decrementProductCartCount(id))}>
                  <Text size={20} weight="bold" style={{ paddingRight: 20 }}>
                    -
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(incrementProductCartCount(id)) }>
                  <Text size={20} weight="bold">
                    +
                  </Text>
              </TouchableOpacity>
            </View><Text size={20} weight="bold" color={primary}>
                {count}
              </Text>
            </View>
          )
        }}
        />
    </View>
  )
}

export default CheckoutPage
