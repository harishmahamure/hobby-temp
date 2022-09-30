import { View, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { useHomePage } from './hooks'
import { Header, Text } from '../../components'
import styles from './styles'
import { primary, white } from '../../constants/colors'

const HomePage = (): JSX.Element => {
  const {
    products,
    handleAddToProductPress,
    cartItems,
    handleRemoveProductPress
  } = useHomePage()
  return (
<>
    <Header cartItems={cartItems} />
    <FlatList
      data={products}
      renderItem={({ item }) => {
        const { id, colour, img, name, price } = item
        const presentInCart = cartItems.findIndex((value) => value.id === id)
        return (
          <View key={id} style={styles.container}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: img }}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <View style={{ flex: 3 }}>
              <Text size={22} weight="400">
                {name}
              </Text>
              <Text size={20} weight="bold" color={primary}>
                &#x20b9;{price}
              </Text>
              <TouchableOpacity
                style={[styles.colorButton, { backgroundColor: colour }]}
              />
              <TouchableOpacity
                onPress={() => {
                  presentInCart === -1
                    ? handleAddToProductPress(item)
                    : handleRemoveProductPress(id)
                }}
                style={styles.button}
              >
                <Text color={white} weight="600">
                  {presentInCart !== -1 ? 'Remove' : ' Add to cart'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }}
    />
    </>
  )
}

export default HomePage
