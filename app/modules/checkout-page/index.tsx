import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Header, Text } from '../../components'
import { useAppDispatch, useAppSelector } from '../../components/hooks'
import { black, primary } from '../../constants/colors'
import { incrementProductCartCount, decrementProductCartCount, ICart } from '../home-page/redux/reducer'
import { useNavigation } from '@react-navigation/native'
const CheckoutPage = (): JSX.Element => {
  const { cartItems }: { cartItems: ICart[] } = useAppSelector(st => st.product)
  const dispatch = useAppDispatch()
  const { navigate } = useNavigation()
  useEffect(() => {
    console.log(cartItems.length, cartItems.length > 0)
    if (cartItems.length < 1) {
      navigate('Home')
    }
  }, [cartItems.length])

  const total = cartItems.reduce((initial, curr) => {
    return initial + (Number(curr.price) * Number(curr.count))
  }, 0)

  return (
        <FlatList
        data={cartItems}
        ListHeaderComponent={<Header cartItems={cartItems}/>}
        ListFooterComponent={() => (
        <Text size={24} weight="800">
          Your total is {total}
        </Text>
        )}
        renderItem={({ item }) => {
          const { name, id, count } = item
          return (
            <View style={{ flex: 1, paddingHorizontal: 20, marginHorizontal: 20 }}>
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

  )
}

export default CheckoutPage
